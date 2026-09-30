"use client";

import { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Layers,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion";
import { knowledge } from "@/lib/knowledge";

const icons = {
  code: Code2,
  server: Server,
  database: Database,
  mobile: Smartphone,
  layers: Layers,
  team: Users,
};
const categories = [
  { value: "all", label: "Todos" },
  { value: "backend", label: "Backend y datos" },
  { value: "interfaces", label: "Interfaces" },
  { value: "team", label: "Equipo" },
];

export function Knowledge() {
  const [category, setCategory] = useState("all");
  const visible = knowledge.filter(
    (item) => category === "all" || item.category === category,
  );
  return (
    <Tabs
      value={category}
      onValueChange={setCategory}
      className="knowledge-tabs"
    >
      <TabsList aria-label="Filtrar conocimientos" variant="line">
        {categories.map((item) => (
          <TabsTrigger value={item.value} key={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={category} key={category}>
        <div className="knowledge-grid">
          {visible.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.id} delay={index * 70}>
                <article className="knowledge-card">
                  <div className="knowledge-card-top">
                    <span className="knowledge-icon">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <span className="knowledge-label">{item.label}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p className="knowledge-description">{item.description}</p>
                  <div className="knowledge-tags">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Accordion
                    type="single"
                    collapsible
                    className="knowledge-accordion"
                  >
                    <AccordionItem value={item.id}>
                      <AccordionTrigger
                        aria-label={`Ver detalles de ${item.name}`}
                      >
                        Ver detalles
                      </AccordionTrigger>
                      <AccordionContent>
                        <dl className="knowledge-details">
                          {item.details.map((detail) => (
                            <div key={detail.title}>
                              <dt>{detail.title}</dt>
                              <dd>{detail.text}</dd>
                            </div>
                          ))}
                        </dl>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </article>
              </Reveal>
            );
          })}
        </div>
      </TabsContent>
    </Tabs>
  );
}
