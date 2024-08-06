This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Portfolio Website

Welcome to my portfolio website project! This project showcases my work as a web developer using technologies like Next.js, this site features a dynamic and responsive design to highlight my skills.

## Project Overview

This portfolio website is built with Next.js, a popular React framework that enables server-side rendering and static site generation. It is configured to be deployed on GitHub Pages, ensuring seamless integration with GitHub's hosting services for fast and reliable delivery.

## Features

- Dynamic Content: Showcases my work and skills with interactive elements and smooth transitions.
- Responsive Design: Optimized for various screen sizes to ensure a great user experience on both desktop and mobile devices.
- Testimonials Section: Displays feedback from clients and colleagues with a carousel for easy navigation.
- Secure Access: Includes a password-protected area for exclusive content, demonstrating my skills in implementing secure authentication.

## Technologies Used

- Next.js: Framework for building server-rendered React applications.
- React: Library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- TypeScript: Superset of JavaScript that adds static types.
- GitHub Pages: Hosting service for deploying static sites.
- Lottie: Library for rendering animations.

## Configuration for GitHub Pages

To deploy the Next.js project on GitHub Pages, the following configuration changes were made:

1. next.config.mjs:

- basePath: Set to the repository name to handle GitHub Pages' directory structure.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/your-repo-name",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
```

2. GitHub Actions Workflow:

- Defined in .github/workflows/nextjs.yml to automate the build and deployment process.

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install dependencies
        run: npm install
      - name: Build with Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## Deployment

The project is automatically deployed to GitHub Pages via GitHub Actions. Once changes are pushed to the main branch, the workflow will build and deploy the site.

## Contributing

Feel free to open issues or submit pull requests if you have any suggestions or improvements!

## Contact

For any inquiries or to discuss potential collaborations, please reach out to me at ezekieljkang@gmail.com.
