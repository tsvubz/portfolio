# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Overview
This project is a portfolio application built using React and Vite. It showcases various projects and skills, providing a platform for users to learn more about the developer.

### Features
- **Dynamic Project Showcase**: The application dynamically displays a list of projects, each with an image, title, description, and link to the source code.
- **Skills Visualization**: Skills are represented with progress bars, indicating proficiency levels in various technologies.
- **Responsive Design**: The layout is responsive, ensuring a good user experience across devices.
- **Typewriter Effect**: A typewriter effect is used to display the developer's titles, enhancing the visual appeal.
- **Contact Information**: Users can easily find contact information, including email and social media links.

### Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **ESLint**: For maintaining code quality and consistency.

### Project Structure
- **src/**: Contains all source code files.
  - **components/**: Reusable components organized into atoms, molecules, and organisms.
  - **assets/**: Contains images and styles.
  - **hooks/**: Custom hooks for reusable logic.
  - **skills.js**: Data file for skills used in the application.
  - **projects.js**: Data file for projects showcased in the portfolio.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm run dev`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
