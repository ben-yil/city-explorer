# City Explorer App

# Table of Contents

1. [Introduction](#introduction)
2. [Description](#description)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Available Scripts](#available-scripts)
6. [Dependencies and Imposed Libraries](#dependencies-and-imposed-libraries)
7. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Clone the App](#clone-the-app)
    - [Install Dependencies](#install-dependencies)
    - [Run](#run)
8. [Learn More About Next.js](#learn-more-about-nextjs)

## Introduction

Welcome! This is a NextJS project created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) .

## Description

City Explorer is an interactive web application designed to provide detailed information about various cities globally. It focuses on delivering insights into cities' landmarks, cultural heritage, and geographic specifics.

## Features

- **City Information:** Provides historical, cultural, and significant aspects of various cities.
- **Interactive Maps:** Dynamic maps to explore the geography and landmarks of cities.
- **Landmark Highlights:** Information about key landmarks within each city.

## Technology Stack

- **Next.js**
- **React**
- **TypeScript**
- **Material-UI**
- **React Query**
- **Axios**

## Available Scripts

In the project directory, you can run the following commands:

| Command      | Description                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn dev`   | Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. |
| `yarn build` | Builds the app for production to the `build` folder. It correctly bundles NextJS in production mode and optimizes the build for the best performance.                                                      |

## Dependencies and imposed libraries

This application comes with a set of pre-installed libraries:

| Library-code-name          | Description                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `react-leaflet`            | React components for Leaflet maps                                                                                 |
| `axios`                    | Standard library for performing HTTP request                                                                      |
| `react-query`              | Asynchronous state management and performing HTTP request                                                         |
| `tailwind-merge`           | Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts                          |
| `class-variance-authority` | Creating UI variants and type-safe UI components                                                                  |
| `@mui/material`            | Comprehensive UI library of React components                                                                      |
| `@mui/material-nextjs`     | MUI for NextJS apps                                                                                               |
| `tailwindcss`              | Tailwind CSS is a utility-first CSS framework |

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Clone the app

1. Clone the repository:

```bash
git clone [repository URL]
```

2. Navigate to the app's directory:

```bash
cd city-explorer
```

### Install dependencies

Install all necessary dependencies:

```bash
npm install
# or
yarn add
```

### Run

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)
