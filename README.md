# Dashboard Project

This project is a **Dashboard** built using **React**, **Ant Design**, **SCSS**, and **Jotai** for state management. It provides a clean, responsive UI with various interactive components powered by Ant Design and custom styling using SCSS.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [State Management](#state-management)
- [Styling](#styling)
- [Components](#components)
- [Running the Project](#running-the-project)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arbabhsiddiqui/ant-dashboard-theme
   cd ant-dashboard-theme
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. The app should now be running on `http://localhost:5173`.

## Project Structure

```
dashboard-project/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Reusable UI components
│   ├── assets/              # Static files like images
│   ├── pages/               #  pages as components to access routes
│   ├── store/               # Jotai state management stores
│   ├── utils/               # for helper functions
│   ├── App.jsx              # Main app component
│   ├── index.jsx            # Entry point of the app
├── .gitignore
├── package.json
└── README.md

note :  all file here will have .component or .page or .style as additional suffix to identify those file easily
```

## Technologies Used

### 1. **React**

- The project is built with **React** as the front-end framework.
- React allows for building interactive UIs by breaking them into reusable components.

### 2. **Ant Design**

- **Ant Design** (Antd) is used for ready-made components like buttons, menus, modals, and form elements.
- It provides a sleek, modern design with customizable components for building complex UI elements with ease.

### 3. **SCSS**

- Custom styles are written using **SCSS** for flexibility and maintainability.
- SCSS is used to organize and modularize styles efficiently with features like variables, nesting, and mixins.

### 4. **Jotai**

- **Jotai** is used for **state management** in the application.
- It’s a minimalistic state management library that uses atomic states for managing different parts of the app state efficiently.

## State Management

We are using **Jotai** to manage state across the application.

- **Atoms**: Represent units of state that can be used globally or locally in components.
- **useAtom Hook**: This hook is used to read and update the state stored in atoms.

Example:

```javascript
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Styling

The app uses **SCSS** for custom styles:

- All CSS variables are stored in the `index.scss` file.
- SCSS modules are used to scope styles to specific components when necessary.
- Custom breakpoints and responsive design have been implemented for a mobile-first approach.

### Example SCSS usage:

```scss
:root {
  --primary-color: #4caf50;
  --font-size: 16px;
}

body {
  font-size: var(--font-size);
  background-color: var(--primary-color);
}
```

## Components

The project uses reusable components for the dashboard's UI, such as:

- **Sidebar**: Custom sidebar using Ant Design’s `Menu` component for navigation.
- **Header**: Contains logo, user profile, and other top-level navigation items.
- **Cards**: Display summary information such as analytics or user statistics.
- **Tables**: Render data in tables with sorting and pagination.

Each component is self-contained and styled using SCSS.

## Running the Project

To run the project locally, follow the installation instructions above. Once set up, use:

```bash
npm run dev
```

This will run the development server, and you can view the dashboard at `http://localhost:5173`.
