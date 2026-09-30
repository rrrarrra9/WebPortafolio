"use client";

import { useState } from "react";
import { ArrowUpRight, Asterisk, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReadingProgress } from "@/components/motion";

const links = [
  { href: "#conocimientos", label: "Conocimientos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyecto" },
];

export function Navigation({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <ReadingProgress />
      <div className="container-shell header-inner">
        <a href="#inicio" className="brand" aria-label="Ir al inicio">
          <Asterisk size={29} strokeWidth={1.9} />
          <span>
            {name}
            <span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="outline" className="header-contact">
          <a href="#contacto">
            Hablemos <ArrowUpRight size={15} />
          </a>
        </Button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu"
              aria-label="Abrir menú"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader>
              <SheetTitle>Explora el portafolio</SheetTitle>
              <SheetDescription>
                Conocimientos, formación y contacto profesional.
              </SheetDescription>
            </SheetHeader>
            <nav aria-label="Navegación móvil" className="mobile-links">
              {[...links, { href: "#contacto", label: "Contacto" }].map(
                (link, index) => (
                  <a
                    href={link.href}
                    key={link.href}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-link-number">0{index + 1}</span>
                    {link.label}
                    <ArrowUpRight />
                  </a>
                ),
              )}
            </nav>
            <div className="mobile-menu-footer">
              <Asterisk />
              Buscando prácticas y oportunidades.
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
