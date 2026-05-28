# Pro Calendar — Landing page

Web pública de Pro Calendar, construida con **Angular 18 (standalone)** y preparada para alojarse en **GitHub Pages**.

## Estructura

```
landing/
├── package.json
├── angular.json
├── tsconfig*.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   ├── app/
│   │   ├── app.component.ts        (root)
│   │   ├── app.config.ts           (router + http + scroll restore)
│   │   ├── app.routes.ts           (lazy routes)
│   │   ├── shared/
│   │   │   ├── header/             (nav + language picker + GitHub)
│   │   │   └── footer/
│   │   ├── services/
│   │   │   ├── i18n.service.ts     (carga JSON, switching, persistencia)
│   │   │   └── translate.pipe.ts   (pipe { | t })
│   │   └── pages/
│   │       ├── home/               (hero, features, descargas)
│   │       ├── help/               (Google + iCloud + problemas)
│   │       ├── terms/              (términos)
│   │       └── privacy/            (privacidad)
│   └── assets/
│       ├── favicon.svg
│       ├── images/                 (capturas)
│       └── i18n/
│           ├── es.json
│           └── en.json
```

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo en http://localhost:4200
npm start

# Build de producción (sale en dist/)
npm run build

# Build para GitHub Pages (base-href + carpeta docs/)
npm run deploy
```

## Añadir un nuevo idioma

1. Crea `src/assets/i18n/<código>.json` copiando `es.json` y traduciendo los valores.
2. Añade el idioma al array `available` en `src/app/services/i18n.service.ts`:

```ts
{ code: 'fr', label: 'Français', flag: '🇫🇷' }
```

3. Reinicia el dev server. Aparecerá automáticamente en el selector.

## Desplegar en GitHub Pages

1. Ajusta la `base-href` en el script `build:gh` del `package.json` al nombre exacto de tu repo:
   - Si tu repo es `https://github.com/sfmrbb/Calendario` → usa `/Calendario/` (ya está así).
   - Si lo subes a `tuuser.github.io` (root) → usa `/`.

2. Ejecuta:

```bash
npm run deploy
```

3. Sube la carpeta `docs/` (creada por el build) al repo:

```bash
git add docs/
git commit -m "deploy landing"
git push
```

4. En GitHub → Settings → Pages → Source → `main` branch / `/docs` folder → Save.

5. Tu web estará en `https://sfmrbb.github.io/Calendario/`.

## Cambios futuros rápidos

- **Cambiar URL del repo**: edita `GITHUB_REPO` en `src/app/shared/header/header.component.ts`.
- **Cambiar enlaces de descarga**: edita `home.component.html`, sección `dl-card`.
- **Cambiar copy**: edita los JSON en `assets/i18n/`.
