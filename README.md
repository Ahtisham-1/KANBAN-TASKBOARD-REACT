# Kanban Taskboard

A fully interactive Kanban board built with React, TypeScript, and Vite. This is the first project in my Phase 2 learning path — rebuilt from scratch in React after originally building it in vanilla JS.

## Tech Stack

- **React 18** — component-based UI
- **TypeScript** — typed props, interfaces, and state
- **Vite** — dev server and build tool
- **CSS** — custom styling, no framework

## Features

- Add tasks with a title, description, tag, and column
- Delete tasks instantly
- Three columns: Todo, In Progress, Done
- Empty state message per column when no tasks exist
- Controlled form inputs — React owns all state

## How to Run Locally

```bash
git clone https://github.com/frogman01/kanban-taskboard-react
cd kanban-taskboard
npm install
npm run dev
```

## What I Learned Building This

- JSX syntax and function components
- Typed props with TypeScript interfaces
- Rendering lists with `.map()` and stable `key` props
- Conditional rendering with `&&`
- `useState` for reactive data
- Controlled inputs — `value` + `onChange`
- Immutable state updates with spread operator
- Passing functions as props for child → parent communication

## Part of

**FeeEase Kashmir** learning roadmap — Phase 2, Week 1 (July 2026)
