# murmur landing

Landing page de l'application murmur, construite avec React, Vite et Tailwind CSS.

## Développement local

```bash
pnpm install
pnpm dev
```

## Déploiement sur Vercel

Le projet est configuré pour un déploiement Vercel avec :

- installation reproductible via `pnpm install --frozen-lockfile` ;
- build via `pnpm build` ;
- fichiers générés dans `dist`.

### Depuis le tableau de bord Vercel

1. Importer le dépôt GitHub `Rahim10020/murmur.landing` dans Vercel.
2. Conserver le framework détecté `Vite`.
3. Vérifier que la branche de production est `main`.
4. Lancer le déploiement.

### Depuis la CLI Vercel

Après authentification avec `pnpm dlx vercel login` :

```bash
pnpm dlx vercel --prod
```

Les réglages du projet sont également décrits dans [`vercel.json`](./vercel.json).
