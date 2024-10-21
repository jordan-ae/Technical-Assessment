# Frontend Developer Technical Assessment

This is a **Next.js** project built with **TypeScript**, **Tailwind CSS**, **Jest**, and **Storybook**. The project follows a **mobile-first** design philosophy and is structured using the **Atomic Design** principles to ensure high reusability of components.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Storybook](#storybook)

## Project Overview

This project is designed with **reusability** and **maintainability** as core principles. The **atomic design** approach organizes the components into small, reusable parts, making it easy to scale and extend the project. I chose **Tailwind CSS** due to its **utility-first** approach, which simplifies the process of building responsive components and ensures easier maintenance.

### Why Tailwind CSS?
- **Utility-First**: Tailwind CSS provides a highly customizable utility-first framework that makes it easier to implement responsive design with less custom CSS.
- **Mobile-First Approach**: The project prioritizes mobile experience, which is critical in today’s mobile-first world.

## Tech Stack

- **Next.js**: React-based framework for server-side rendering and static site generation.
- **TypeScript**: Type-safe development with JavaScript, ensuring fewer bugs and better scalability.
- **Tailwind CSS**: Utility-first CSS framework for building responsive, maintainable components.
- **Jest**: Testing framework for unit and integration tests.
- **Storybook**: Component development and documentation tool.

## Folder Structure

```bash
SDF-TA
├── .next
├── .storybook
├── .swc
├── node_modules
├── public
├── src
│   ├── app
│   │   ├── fonts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── core
│   │   └── components
│   │       ├── atoms
│   │       │   ├── button.tsx
│   │       │   └── star_rating.tsx
│   │       └── organisms
│   │           └── Casino_Cards
│   │               └── __tests__
│   │                   └── CasinoCard.test.tsx
│   └── stories
│       └── index.tsx
├── .eslintrc.json
├── .gitignore
├── jest.config.js
├── jest.setup.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

The project is structured according to **Atomic Design** principles:


### Atomic Design

- **Atoms**: Fundamental components like buttons, icons, and inputs.
- **Molecules**: Groups of atoms, like a form field that combines input and label.
- **Organisms**: More complex structures, e.g., a complete form or card layout.
- **Templates**: Page layouts or skeleton structures.
- **Pages**: Specific pages combining templates and organisms.

This structure ensures that components are reusable, modular, and maintainable across the project.

## Features

- **Responsive Design**: Built mobile-first using Tailwind CSS, ensuring compatibility across devices.
- **Reusable Components**: Components are designed to be modular and reusable, using Atomic Design principles.
- **Type-Safe Development**: Built with TypeScript, allowing for better code quality and maintainability.
- **Comprehensive Testing**: The project is fully tested using Jest, ensuring reliability and robustness.
- **Storybook for UI Development**: Storybook allows isolated component development, improving the quality and reusability of components.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repository/project-name.git
cd project-name
```

```bash
cd your-repo
```

```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000.

## Running the Project

To run the development server locally:

```bash
npm run dev
```
```bash
npm run build
```
```bash
npm start
```

## Testing

This project uses Jest for testing.

To run tests:

```bash
npm run test
```
```bash
npm run test:watch
```

## Storybook

To develop and view UI components in isolation, run Storybook:
```bash
npm run storybook
```

Storybook will start at http://localhost:6006.
