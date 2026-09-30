import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import { profile } from "@/lib/profile";
import "./globals.css";
import { MotionProvider } from "@/components/motion";

export const metadata: Metadata = {
  title: `${profile.fullName} · Portafolio`,
  description:
    "Raúl Ortiz, estudiante de DAM buscando prácticas y oportunidades de desarrollo. C# con ASP.NET, Java con Swing, Supabase y React Native con TypeScript.",
  openGraph: {
    title: "Raúl Ortiz · Desarrollo backend y aplicaciones",
    description:
      "Estudiante de DAM. Buscando prácticas y oportunidades para incorporarme a un equipo de desarrollo.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
