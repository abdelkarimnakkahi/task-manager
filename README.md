# Task Manager

A small React app to add, edit, and delete tasks. Data is saved in the browser with **localStorage**, so your list survives refresh.

## Features

- Add tasks with validation (empty names are rejected)
- Edit tasks (inline form switches between **Add** and **Update**)
- Delete individual tasks or **Clear All**
- Task count and timestamps (created/updated)

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [CSS]
- [react-bootstrap-icons](https://www.npmjs.com/package/react-bootstrap-icons)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended; includes `npm`)

## Getting started

```bash
git clone <your-repo-url>
cd task-manager
npm install
npm run dev