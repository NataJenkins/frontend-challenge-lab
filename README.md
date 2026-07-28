# Frontend Challenge Lab

A personal frontend laboratory for solving UI challenges, experimenting with different technologies, and documenting implementation approaches.

The main goal of this repository is to practice frontend development through real-world challenges while exploring different tools, libraries, and architectural approaches.

## 🧪 What I'm Exploring

This lab may include challenges from different platforms and sources, such as:

- [GreatFrontend](https://www.greatfrontend.com/)
- [Frontend Mentor](https://www.frontendmentor.io/)
- Other frontend challenges and UI ideas

Each challenge can be implemented using different approaches, allowing me to compare technologies and patterns rather than committing to a single stack.

### Technologies & Libraries

The project is designed to experiment with technologies such as:

- React
- TypeScript
- Vite
- Storybook
- Vitest
- React Testing Library
- Playwright
- Tailwind CSS
- Chakra UI
- Bootstrap
- CSS / CSS Modules
- Other frontend libraries and tools

Not every challenge will use every technology. Each implementation is intentionally independent.

## 📁 Project Structure

```text
src/
├── challenges/
│   ├── greatfrontend/
│   ├── frontend-mentor/
│   └── other/
│
└── test/
    └── setup.ts
```

Each challenge is self-contained and can include its own implementation, styles, Storybook stories, and tests.

For example:

```text
src/challenges/greatfrontend/autocomplete/
├── vanilla/
│   ├── Autocomplete.tsx
│   ├── Autocomplete.stories.tsx
│   ├── Autocomplete.test.tsx
│   └── Autocomplete.css
│
├── tailwind/
│   ├── Autocomplete.tsx
│   ├── Autocomplete.stories.tsx
│   └── Autocomplete.test.tsx
│
└── chakra/
    ├── Autocomplete.tsx
    ├── Autocomplete.stories.tsx
    └── Autocomplete.test.tsx
```

Shared components will only be extracted when there is a real need for reuse across multiple challenges.

## 📚 Storybook

Storybook acts as the visual catalog for the lab.

It allows each challenge and implementation to be explored independently without having to navigate through the main application.

Start Storybook with:

```bash
npm run storybook
```

Then open the local Storybook instance in your browser.

## 🧪 Testing

The project uses two complementary testing approaches.

### Unit & Component Tests

Built with:

- Vitest
- React Testing Library
- jsdom
- jest-dom

Run unit tests with:

```bash
npm test -- --project=unit
```

### Storybook Tests

Storybook stories can also be tested through the browser using:

- Vitest
- Storybook
- Playwright
- Chromium

This allows interaction and UI behavior to be tested in a real browser environment.

## 🚀 Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd frontend-challenge-lab
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Start Storybook:

```bash
npm run storybook
```

Run the unit tests:

```bash
npm test -- --project=unit
```

## 🎯 Goals

This repository is primarily a learning and experimentation space.

Some of the goals are:

- Practice frontend challenges consistently.
- Improve React and TypeScript skills.
- Explore different UI libraries and styling approaches.
- Compare multiple implementations of the same problem.
- Practice component architecture and reusable patterns.
- Build accessible and responsive interfaces.
- Write meaningful component and interaction tests.
- Use Storybook as a living visual catalog.
- Experiment with frontend tooling and development workflows.

## 📌 Status

This is an ongoing personal lab. The structure, tools, and conventions may evolve as new challenges and experiments are added.
