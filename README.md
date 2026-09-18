# Nataliia Hrushanyk - Portfolio

My personal developer portfolio, built to showcase my projects, skills, and
professional experience.

> This project is currently a work in progress.

## Features

- Responsive navigation for desktop and mobile devices
- English and Ukrainian localization
- Light and dark themes
- Smooth UI animations
- Responsive project cards with localized metadata and technology tags
- Interactive project previews with desktop and mobile viewport modes
- Direct links to project details and live external websites
- Pages for projects, skills, experience, and contact information

## Tech Stack

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) for localization
- [next-themes](https://github.com/pacocoursey/next-themes) for theme switching
- [Motion](https://motion.dev/) for animations
- ESLint, Prettier, Husky, and lint-staged for code quality

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone https://github.com/NataliGru/portfolio.git
cd portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev          # Start the development server
npm run build        # Create a production build
npm run start        # Start the production server
npm run lint         # Check the project with ESLint
npm run lint:fix     # Fix ESLint issues where possible
npm run format       # Format files with Prettier
npm run format:check # Check formatting
npm run fix          # Fix ESLint issues and format the project
```

## Development Workflow

The repository includes workspace settings for VS Code. With the recommended
ESLint and Prettier extensions installed, pressing `Ctrl+S`:

- formats the current file with Prettier;
- sorts imports with ESLint;
- removes unused imports with ESLint.

Prettier handles code formatting and Tailwind CSS class sorting, while ESLint
is the single source of truth for import organization. Staged files are checked
and fixed automatically before each commit with Husky and lint-staged.

## Project Structure

The project follows a feature-oriented structure:

```text
src/
├── app/          # Routes, layouts, and global styles
├── features/     # User-facing features
├── localization/ # English and Ukrainian translations
├── providers/    # Application providers
├── settings/     # Routes and shared configuration
├── shared/       # Reusable hooks, utilities, and UI components
└── widgets/      # Larger interface blocks such as the header
```

## Author

**Nataliia Hrushanyk**

- GitHub: [@NataliGru](https://github.com/NataliGru)

## License

This project is intended for personal portfolio use. The source code is
available for reference.
