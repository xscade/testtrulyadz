# Developer Documentation - TrulyAdz Digital Marketing

Welcome to the developer documentation for the TrulyAdz Digital Marketing website. This project is a modern, responsive single-page application built with React and TypeScript.

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Font:** Inter (via Google Fonts)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository.
2.  Install dependencies:

```bash
npm install
```

### Development Server

To start the local development server:

```bash
npm run dev
```

The application will typically be available at `http://localhost:3000` (or the port shown in the terminal).

### Production Build

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

The project follows a flat structure with source files located in the root directory.

```text
.
├── components/           # UI Components
│   ├── About.tsx        # "About Us" section
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Navigation bar (includes mobile menu)
│   ├── Hero.tsx         # Landing hero section
│   ├── Icons.tsx        # SVG Icon components
│   └── Services.tsx     # Services listing section
├── App.tsx              # Main application layout
├── index.html           # HTML entry point (Tailwind CDN included here)
├── index.tsx            # React DOM entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🧩 Key Components

### Header (`components/Header.tsx`)
-   Contains the navigation bar.
-   Handles smooth scrolling to sections via anchor tags (`#services`, `#about`, etc.).
-   Includes a responsive mobile menu with a toggle state.

### App (`App.tsx`)
-   Assembles the main sections of the landing page.
-   Applies global layout styles (e.g., dark mode background).

### Icons (`components/Icons.tsx`)
-   Centralized file for SVG icons used throughout the application.
-   Exported as functional components for easy reuse.

## 🎨 Styling

The project uses **Tailwind CSS** loaded via a CDN script in `index.html`.

```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Note:** Since Tailwind is loaded via CDN, there is no `tailwind.config.js` file. Customizations are applied directly in classes or via inline styles if necessary. The global font family 'Inter' is defined in the `<head>` of `index.html`.

## 🔧 Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Builds the app for production.
-   `npm run preview`: Previews the built app locally.

