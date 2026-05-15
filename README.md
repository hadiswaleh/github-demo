# github-demo

Next.js project prepared to replicate `https://z2c.activ8.digital/` as native, responsive pages.

## What is implemented

- Native Next.js App Router pages (`/`, `/about`, `/services`, `/contact`).
- Shared responsive shell and reusable style system (no iframe wrapper).
- A helper script to extract WordPress pages/assets in environments that can access the target host.

## Run locally

```bash
npm install
npm run dev
```

## Extract source assets/content (run where network access is allowed)

```bash
./scripts/extract-wordpress-site.sh https://z2c.activ8.digital ./extracted-site
```

Then map extracted HTML/CSS/images/fonts into Next.js components and `public/` assets.
