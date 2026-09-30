# Animate UI

Componentes de https://github.com/animate-ui/animate-ui, revisión `efeb96ffd7a3b7a4868667e4ac3c346620fb3044`. Se conserva el archivo original `LICENSE.md` (MIT + Commons Clause).

Incluye Fade, Magnetic, Scroll Progress, Button y Accordion, con sus primitivas y hooks. `components/motion.tsx` los aplica a las entradas de sección, los botones, los elementos flotantes y el progreso de lectura. `components/ui/button.tsx` y `components/ui/accordion.tsx` exponen sus versiones animadas; los demás componentes conservan la base de shadcn/ui.

Adaptaciones locales:

- Imports del registro y de `cn` a las rutas del proyecto.
- Slot utiliza componentes Motion DOM definidos fuera del render y resuelve hijos lazy de React 19, siguiendo el patrón de Radix Slot. Evita recrear componentes y perder contenido al renderizar desde RSC.
- Los controles y efectos respetan `prefers-reduced-motion`. El estado inicial del servidor se conserva durante la hidratación.
- El estado controlado del accordion deriva de su valor actual y compara exactamente los identificadores de sus elementos.
- Las entradas mantienen el contenido visible en el HTML inicial. Los movimientos decorativos son finitos, y los efectos magnéticos se limitan a la interacción.
