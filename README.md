# Personal Webpage

**Live Site:** https://lasaj.neocities.org

A personal project to experiment with web development and create a personal website to host a photo gallery.

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for production.
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
*   [ESLint](https://eslint.org/) - For code linting.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later recommended)
*   npm

### Installation

1.  Clone the repo:
    ```sh
    git clone <repo-url>
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Development Server

Run the following command to start the development server with Turbopack:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode with Turbopack.
*   `npm run build`: Builds the app for production to the `.next` folder.
*   `npm run start`: Starts a Next.js production server.
*   `npm run lint`: Runs ESLint to find and fix problems in the code.

## Project Structure

*   `src/app/`: Contains the core application pages and layouts.
*   `src/components/`: Contains reusable React components.
*   `src/data/`: Contains data files, like the gallery data.
*   `public/`: Contains static assets like images and fonts.