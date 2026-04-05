# React Practice & Machine Coding Questions

This repository is my personal React practice project where I learn, implement, and revisit important React concepts along with common machine coding interview questions.

The goal of this project is to build hands-on understanding by creating working examples instead of only reading theory.

## About the Project

This app is a collection of small React-based examples, reusable patterns, and machine coding challenges. It includes practice around:

- React fundamentals and component architecture
- Custom hooks and reusable logic
- Context API
- Performance optimizations
- Routing and lazy loading
- State management with Redux, React Redux, and Redux Saga
- Common frontend interview/machine coding problems

## Implemented Practice Topics

### React Concepts

- Memoization example
- Custom hook example
- Context API example
- Debounce example
- Throttle example
- Infinite scroll
- Virtual list
- Error boundary usage

### State Management

- Core Redux example
- React Redux example
- React Redux Saga example

### Machine Coding / UI Challenges

- Auto complete search
- Tabs
- Accordion
- Pagination
- Todo app
- Chips input
- Nested checkbox
- File explorer
- Box click game

## Tech Stack

- **React 19**
- **Vite**
- **React Router**
- **Redux / React Redux / Redux Saga**
- **Axios**
- **React Toastify**
- **ESLint**

## Project Structure

```text
React/
├── public/
├── src/
│   ├── components/        # Reusable UI examples and machine coding components
│   ├── context/           # Context API related code
│   ├── coreRedux/         # Redux implementation without React Redux bindings
│   ├── hooks/             # Custom hooks
│   ├── layout/            # Main layout and sidebar navigation
│   ├── pages/             # Route-level pages for each topic/example
│   ├── reactRedux/        # React Redux example setup
│   ├── reactReduxSaga/    # Redux Saga example setup
│   ├── routes/            # App routing configuration
│   ├── store/             # Store configuration
│   └── utils/             # Utility components like ErrorBoundary
├── package.json
└── vite.config.js
```

## Available Examples in the App

The sidebar-driven UI currently includes pages for:

- Home
- Auto Complete Search
- Tabs
- Accordion
- Pagination
- Todo
- Chips Input
- Nested Checkbox
- File Explorer
- Debounce Example
- Throttle Example
- Infinite Scroll
- Virtual List
- Memoization Example
- Custom Hook Example
- Context Example
- Core Redux Example
- React Redux Example
- React Redux Saga Example
- Box Click Game

## Getting Started

### Prerequisites

Make sure you have installed:

- **Node.js**
- **npm**

### Installation

1. Clone the repository
2. Move into the project folder
3. Install dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

After that, open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Why I Built This

I created this project to:

- Practice React by building real UI problems
- Strengthen machine coding and interview preparation
- Understand state management patterns in depth
- Maintain a single place for reusable examples and learning references

## Future Improvements

Some ideas I may add in the future:

- Unit and integration tests
- Better homepage/documentation inside the app
- More machine coding challenges
- TypeScript migration
- Responsive design improvements

## Contributing

This is primarily a personal learning project, but suggestions and improvements are always welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Open a pull request

## Conclusion

This project reflects my ongoing React learning journey through practical implementation. If you're also preparing React topics or machine coding questions, this repository can serve as a helpful reference and practice playground.
