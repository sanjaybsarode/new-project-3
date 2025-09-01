# Shipify Logistics

An intelligent logistics platform for modern supply chains. This application includes an advanced tool to search, manage, and understand global tariffs, along with various calculators and a customer portal for delivery management.

This project was bootstrapped with Vite and uses React, TypeScript, and Tailwind CSS.

## Features

- **Global Tariff Directory**: Search and view detailed tariffs for sea ports and airports worldwide.
- **AI-Powered Explanations**: Use Gemini AI to get simple, easy-to-understand summaries of complex tariff documents.
- **Logistics Calculators**:
    - Instant Freight Quote
    - Load & Stuffing Calculator
    - Bollard Pull Calculator
    - Sea Fastening Calculator
- **Vessel Tracking**: Search for vessels by name or IMO number to see their current status and technical details.
- **Live Map**: View a global map of live marine traffic.
- **Customer Portal**: A multi-role dashboard for Merchants, Agents, and Admins to manage deliveries.
- **AI Chatbot**: A helpful assistant to answer questions about logistics and shipments.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- A package manager like npm, yarn, or pnpm

### Environment Setup

This project requires a Gemini API key to power its AI features.

1.  Create a file named `.env` in the root of the project.
2.  Add your API key to this file:

    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```

    The application is configured to load this key via Vite.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sanjaybsarode/new-website-for-logistics-.git
    cd new-website-for-logistics-
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Step 1: Run the Deploy Script

Make sure all your latest changes are committed and pushed to your GitHub repository. Then, run the following command in your terminal:

```bash
npm run deploy
```

This command will automatically:
1.  Build your application for production.
2.  Push the contents of the `dist` build folder to a special `gh-pages` branch on your GitHub repository.

### Step 2: Configure GitHub Pages Settings

After the script finishes, you need to tell GitHub to use the `gh-pages` branch as the source for your live site.

1.  Go to your repository on GitHub: `https://github.com/sanjaybsarode/new-website-for-logistics-`
2.  Click on the **"Settings"** tab.
3.  In the left sidebar, click on **"Pages"**.
4.  Under "Build and deployment", for the **Source**, select **"Deploy from a branch"**.
5.  Set the branch to **`gh-pages`** and the folder to **`/(root)`**.
6.  Click **"Save"**.

After a minute or two, your website will be live at: **https://sanjaybsarode.github.io/new-website-for-logistics-/**

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally previews the production build.
- `npm run deploy`: Deploys the application to GitHub Pages.