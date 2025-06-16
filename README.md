 # Hugging Face Spaces Embed Site

 This repository is a Next.js application that renders a collection of Hugging Face Spaces embeds. You can manually list your Space embed URLs or full `<iframe>` snippets in a simple configuration file, and the site will display them all.

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
 3. Configure embeds:
    - Open `data/embeds.js`.
    - Add your embed URLs or full `<iframe>` snippets to the `embeds` array.
 4. Run locally:
    ```bash
    npm run dev
    ```
    Open http://localhost:3000 in your browser.

 ## Deploying to Vercel

 1. Push this repository to GitHub.
 2. In the Vercel dashboard, click **New Project** and import your repo.
 3. Deploy. Whenever you update `data/embeds.js` and push, Vercel will rebuild with your changes.

 ## Example

 In `data/embeds.js`:
```js
const embeds = [
  // Using embed URL:
  'https://huggingface.co/spaces/jactur/YourSpace/embed',
  // Full iframe snippet:
  '<iframe src="https://huggingface.co/spaces/jactur/AnotherSpace/embed" allow="accelerometer; gyroscope; autoplay; encrypted-media; clipboard-write; web-share; fullscreen; microphone; camera"></iframe>',
];
export default embeds;
```