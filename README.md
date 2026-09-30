# Portafolio de Raúl Ortiz

Web personal clara y minimalista, creada con Next.js 16, React 19, TypeScript, Tailwind CSS 4 y componentes de shadcn/ui y Animate UI. El contenido está orientado a conseguir prácticas y oportunidades de desarrollo. La información combina el CV y las aclaraciones de Raúl: Java básico con Swing, C# con ASP.NET, Supabase, React Native y TypeScript, y experiencia de aprendizaje con Scrum.

La presentación de GitHub y los proyectos seleccionados que ya contenía este repositorio se conservan en [docs/github-profile.md](docs/github-profile.md) y [docs/github-presentation.md](docs/github-presentation.md).

## Desarrollo

Requiere Node.js 20.9 o superior y npm. Este entorno utiliza Node.js 24.

```bash
npm ci
npm run dev -- --hostname 0.0.0.0 --port 3000
```

Trabaja en el checkout existente. Cada tarea de Codex ya dispone de un entorno aislado; no es necesario crear un worktree.

## Comprobaciones

```bash
npm run lint
npm run build
npm run typecheck
npm run test:e2e
```

Las pruebas de Playwright comprueban la navegación, las pestañas, el menú móvil, la formación, la ausencia de fotografías, el PDF del CV, los enlaces de contacto, el desbordamiento horizontal y la accesibilidad automática con axe en escritorio y móvil. También comprueban los filtros de conocimientos, sus detalles desplegables, la reducción de movimiento y la lectura del perfil sin JavaScript. Hay 14 pruebas. Usan el servidor de producción en el puerto 3100 y lo cierran al terminar.

La configuración detecta Chromium en `/usr/bin/chromium`, ya instalado en este entorno. En otra máquina puedes instalar el navegador con `npx playwright install chromium` o indicar `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

## Personalización

- `lib/profile.ts`: nombre, biografía, contacto y enlaces. LinkedIn queda pendiente de la URL confirmada.
- `lib/knowledge.ts`: conocimientos confirmados, categorías y detalles técnicos.
- `components/knowledge.tsx`: filtros y detalles interactivos.
- `components/motion.tsx`: integración de Animate UI y preferencias de movimiento.
- `app/page.tsx`: contenido y secciones.
- `app/globals.css`: colores, tipografía, distribución y tamaños adaptables.
- `components/code-scene.tsx`: composición gráfica de código, sin fotografías.
- `public/raul-ortiz-cv.pdf`: copia del CV sin fotografía, disponible para descargar por autorización de Raúl. Conserva su contenido, con el correo de contacto actualizado.
- `components/ui`: componentes de shadcn/ui, con licencia MIT incluida.
- `components/animate-ui`: componentes de Animate UI, con su licencia MIT + Commons Clause original incluida.

La tipografía DM Sans se sirve localmente desde `@fontsource-variable/dm-sans`. La web no necesita servicios externos, claves API ni un backend para funcionar. El botón de correo abre el cliente de correo; no hay un formulario que simule enviar mensajes.

## Producción

```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

Se puede desplegar en una plataforma compatible con Next.js. Crear los archivos y comprobar la compilación no publica la web.

Para desplegar en Vercel, importa este repositorio y selecciona el framework Next.js. Usa `npm ci` para instalar y `npm run build` para compilar. La web no requiere variables de entorno. El archivo `.vercelignore` excluye dependencias locales, resultados de pruebas y archivos de entorno de las subidas mediante la CLI.
