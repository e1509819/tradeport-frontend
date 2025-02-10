# Explore Singapore Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Contribution Guidelines](#contribution-guidelines)

## Overview

This repository includes:

1. A frontend built with React, TypeScript, and Tailwind CSS using Vite for rapid development and hot module replacement.

## Installation

1. Clone the repository:
   ```bash
   git@github.com:e1509819/tradeport-frontend.git
   ```
2. Navigate to the project directory:

3. Run the application using Docker Compose:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

## Tech Stack

**Frontend:**

- React
- TypeScript
- Vite
- Tailwind CSS

## Project Structure

```
explore-singapore/
├── frontend/
│   ├── node_modules/         # Dependencies
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Application pages
│   │   ├── assets/           # Static assets (images, icons, etc.)
│   │   ├── utils/            # Helper functions
│   │   ├── App.tsx           # Root component
│   │   └── main.tsx          # Application entry point
│   ├── .gitignore
│   ├── Dockerfile.dev        # Docker configuration for frontend (dev)
│   ├── docker-compose.dev.yml # Docker Compose configuration for frontend
│   ├── eslint.config.js
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── README.md             # Frontend-specific docs
├── Documentation/            # Additional project documentation
└── docker-compose.dev.yml    # Main Compose file combining both frontend & backend


```

## Contribution Guidelines

As this is a group project, the following guidelines should be followed:

1. Each member should work on their assigned tasks and maintain clear communication with the team.
2. Use meaningful commit messages when pushing code.
3. Create a pull request and request a review from at least one team member before merging changes.
4. Document any major changes in the code to ensure clarity for all team members.
5. Feature Branches: Work on a dedicated branch for each feature or bugfix.
6. Commit Messages: Use meaningful commit messages to describe changes.
7. Pull Requests (PRs): Create a PR for your branch into the main or development branch. Request reviews from at least one team member before merging.
8. Documentation: Document any major changes in the code or architecture to maintain clarity for all team members.
