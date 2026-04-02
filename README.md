# James Portfolio

A modern, responsive personal portfolio website showcasing projects, services, and professional information. Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multiple Pages** - Home, About, Services, Resume, Projects, and Contact sections
- **Contact Form** - Integrated email functionality using EmailJS
- **Modern Styling** - Tailwind CSS for a clean, professional appearance
- **Fast Performance** - Built with Vite for lightning-fast development and production builds
- **Client-side Routing** - Smooth navigation between pages using React Router v7

## Pages

- **Home** - Landing page with hero section
- **About** - Personal information and background
- **Services** - Services offered
- **Resume** - Professional experience and qualifications
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form for inquiries

## Technologies

- **React** 19.2.4 - UI framework
- **Vite** 8.0.1 - Build tool and dev server
- **React Router** 7.13.2 - Client-side routing
- **Tailwind CSS** 4.2.2 - Utility-first CSS framework
- **EmailJS** 4.4.1 - Email service integration

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd james-portfolio
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Build

Create a production build:
```bash
npm run build
```

The optimized build will be output to the `dist` directory.

## Preview

Preview the production build locally:
```bash
npm run preview
```

## Linting

Check code quality with ESLint:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── navbar.jsx
│   ├── hero.jsx
│   ├── aboutsection.jsx
│   ├── services-section.jsx
│   ├── projectssection.jsx
│   ├── resumesection.jsx
│   ├── contactsection.jsx
│   └── footer.jsx
├── pages/               # Page components
│   ├── home.jsx
│   ├── about.jsx
│   ├── services.jsx
│   ├── resume.jsx
│   ├── projects.jsx
│   └── contact.jsx
├── assets/              # Static assets
│   └── images/
├── App.jsx              # Main app component with routing
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## Configuration Files

- **vite.config.js** - Vite configuration with React, Tailwind CSS, and TanStack Router plugins
- **eslint.config.js** - ESLint configuration for code quality
- **tailwind.config.js** - Tailwind CSS configuration

## Environment Variables

For email functionality with EmailJS, you may need to configure EmailJS API credentials. Refer to the contact component for integration details.

## License

This project is private. All rights reserved.
"# jamesjuniorportfolio" 
