# Lime Logic

A beautiful landing page for the Lime ecosystem - a suite of applications designed to enhance your online experience.

## 🍋 About Lime Logic

Lime Logic is the central hub for a collection of Lime applications, each designed with stunning design and user-focused functionality:

- **Lime Adblocker** - Browse faster and cleaner with advanced ad-blocking technology
- **Lime SafeGuard** - Shop safely with our online store safety checker

More projects coming soon to expand the Lime ecosystem!

## 🚀 Quick Start

### Prerequisites
- Node.js (install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun package manager

### Installation

```sh
git clone https://github.com/nmmhw4cbc7-commits/lime-logic.git
cd lime-logic
npm install
# or
bun install
```

### Development

```sh
npm run dev
# or
bun run dev
```

Visit `http://localhost:5173` to see the app in development mode.

### Build for Production

```sh
npm run build
# or
bun run build
```

### Preview Production Build

```sh
npm run preview
# or
bun run preview
```

## 🛠️ Tech Stack

Built with modern web technologies:

- **[TanStack Start](https://tanstack.com/start)** - Full-stack framework
- **[React 19](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[React Router](https://tanstack.com/router)** - Client-side routing
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Lovable](https://lovable.dev)** - Design & development platform

## 📁 Project Structure

```
src/
├── routes/          # File-based routing
├── components/      # Reusable UI components
├── styles/          # Global styles
└── server.ts        # Server entry point

public/             # Static assets
```

## 🔗 Links

- **Live App**: https://lime-suite-of-joy.lovable.app
- **Lime Adblocker**: https://adblocker-lime.vercel.app
- **Lime SafeGuard**: https://lime-safe-guard.vercel.app
- **GitHub**: https://github.com/nmmhw4cbc7-commits

## 📚 Development Guide

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Routing

This project uses **file-based routing** via TanStack Start. Place `.tsx` files in `src/routes/` and they automatically become routes:

| File | URL |
|------|-----|
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` |

See `src/routes/README.md` for more routing conventions.

### Code Style

- **ESLint** enforces code quality
- **Prettier** formats code automatically
- Run `npm run format` before committing

## 🎨 Design Philosophy

No AI Slop - Beautiful, stunning design crafted with care and attention to detail.

## 📝 License

This project is developed with [Lovable](https://lovable.dev).

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ for the Lime ecosystem
