import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("presenta a Raúl y permite explorar el proyecto y su formación", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle("Raúl Ortiz · Portafolio");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Desarrollador\s*en formación\./,
  );
  await page
    .getByRole("main")
    .getByRole("link", { name: "Hablemos", exact: true })
    .click();
  await expect(page).toHaveURL(/#contacto$/);
  await page.getByRole("tab", { name: "Cómo está hecho" }).click();
  await expect(
    page.getByRole("tabpanel", { name: "Cómo está hecho" }),
  ).toContainText("Construido con Next.js, React y TypeScript");
  await page.getByRole("tab", { name: "Cómo está hecho" }).press("ArrowLeft");
  await expect(
    page.getByRole("tab", { name: "El proyecto", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.getByRole("button", { name: "Mi formación" }).click();
  await expect(
    page
      .locator(".about-accordion")
      .getByText("Grado superior · iMES Maresme · En curso"),
  ).toBeVisible();
  await expect(page.locator("img")).toHaveCount(0);
  await expect(page.locator(".code-scene").first()).toBeVisible();
  expect(errors).toEqual([]);
});

test("los enlaces de contacto y el CV apuntan a recursos reales", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(
    page.locator('a[href^="mailto:rrrarrra100@gmail.com"]'),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "GitHub", exact: false }),
  ).toHaveAttribute("href", "https://github.com/rrrarrra9");
  await expect(
    page.getByRole("link", { name: "Descargar mi CV" }),
  ).toHaveAttribute("download", "CV-Raul-Ortiz.pdf");
  const portrait = await request.get("/raul-ortiz.png");
  expect(portrait.status()).toBe(404);
  const response = await request.get("/raul-ortiz-cv.pdf");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("el menú permite navegar y se cierra correctamente", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Abrir menú" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await dialog.getByRole("link", { name: "Sobre mí" }).click();
    await expect(dialog).not.toBeVisible();
  } else {
    await page
      .getByRole("navigation", { name: "Navegación principal" })
      .getByRole("link", { name: "Sobre mí" })
      .click();
  }
  await expect(page).toHaveURL(/#sobre-mi$/);
});

test("la página no desborda y pasa la revisión automática de accesibilidad", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();
  expect(result.violations).toEqual([]);
  for (const width of testInfo.project.name === "mobile"
    ? [320, 390, 600]
    : [768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow, `Desbordamiento a ${width}px`).toBe(false);
  }
  await page.screenshot({
    path: testInfo.outputPath("portfolio.png"),
    fullPage: true,
  });
});

test("los conocimientos se filtran y sus detalles se abren con teclado", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("#conocimientos");
  await expect(section.getByRole("article")).toHaveCount(6);
  await section.getByRole("tab", { name: "Interfaces", exact: true }).click();
  await expect(section.getByRole("article")).toHaveCount(2);
  await expect(
    section.getByRole("heading", { name: "Java & Swing", exact: true }),
  ).toBeVisible();
  await expect(
    section.getByRole("heading", {
      name: "React Native & TypeScript",
      exact: true,
    }),
  ).toBeVisible();
  const trigger = section.getByRole("button", {
    name: "Ver detalles de Java & Swing",
  });
  await trigger.focus();
  await trigger.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(
    section.getByText(
      "Java es mi base de aprendizaje en programación de aplicaciones.",
    ),
  ).toBeVisible();
  await trigger.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await section.getByRole("tab", { name: "Backend y datos" }).click();
  await expect(section.getByRole("article")).toHaveCount(3);
  await expect(
    section.getByRole("heading", { name: "Supabase", exact: true }),
  ).toBeVisible();
  await section.getByRole("tab", { name: "Equipo", exact: true }).click();
  await expect(section.getByRole("article")).toHaveCount(1);
  await expect(
    section.getByRole("heading", {
      name: "Scrum & agentes de IA",
      exact: true,
    }),
  ).toBeVisible();
  await section.getByRole("tab", { name: "Todos", exact: true }).click();
  await expect(section.getByRole("article")).toHaveCount(6);
});

test("las animaciones respetan la preferencia de reducir movimiento", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toHaveCSS("transform", "none");
  await expect(page.locator(".profile-availability")).toHaveCSS(
    "transform",
    "none",
  );
  const contact = page
    .getByRole("main")
    .getByRole("link", { name: "Hablemos", exact: true });
  await contact.hover();
  await expect(contact).toHaveCSS("transform", "none");
  const details = page.getByRole("button", {
    name: "Ver detalles de Java & Swing",
  });
  await details.click();
  await expect(details).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByText(
      "Java es mi base de aprendizaje en programación de aplicaciones.",
    ),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("el perfil y el contacto son legibles sin JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:3100/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "C# & ASP.NET", exact: true }),
    ).toBeVisible();
    await expect(
      page.locator('a[href^="mailto:rrrarrra100@gmail.com"]'),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Descargar mi CV" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCSS(
      "opacity",
      "1",
    );
  } finally {
    await context.close();
  }
});
