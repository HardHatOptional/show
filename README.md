 # Hugging Face Spaces Embed Site

 This repository is a Next.js application that automatically embeds all Hugging Face Spaces under a given user. When you deploy to Vercel, it will fetch your spaces and display them on the site. It uses Incremental Static Regeneration (ISR) to keep the site up-to-date.

 ## Setup

 1. Clone the repo:
    ```bash
    git clone <repo-url>
    cd <repo-directory>
    ```
 2. Install dependencies:
    ```bash
    npm install
    ```
 3. Configure environment variables:
    - Copy `.env.example` to `.env.local`:
      ```bash
      cp .env.example .env.local
      ```
    - Edit `.env.local` and set `HF_USER` to your Hugging Face username.
 4. Run locally:
    ```bash
    npm run dev
    ```
    Open http://localhost:3000 in your browser.

 ## Deploying to Vercel

 1. Push this repository to GitHub.
 2. On Vercel dashboard, import the repo.
 3. Set environment variable `HF_USER` in Vercel project settings.
 4. Deploy. The site will regenerate and list your spaces.