# COOLCARE HVAC Landing Page

This is a production-ready, fully responsive static website for a premium HVAC service and sales company. It has been built precisely according to the *Arctic Precision* design system using only HTML5, CSS3, and Vanilla JavaScript.

## Features
- **Pristine Functional Minimalism**: Atmospheric Glacial Glassmorphism with an ice/marine navy color palette.
- **Zero Frameworks**: No React, Vue, or Next.js.
- **No Tailwind CDN**: Tailwind CSS was compiled into a static `style.css` file for optimized, direct loading.
- **Responsive Design**: Fluid and fully mobile-friendly down to 360px and up to ultra-wide desktop.
- **Interactive JavaScript**:
  - Native mobile navigation drawer with smooth animation
  - AC product categorization and real-time filtering
  - Spare part search and compatibility checker (Demo)
  - Functional FAQ accordion
  - Booking success toast feedback
- **Local Assets**: All external assets have been downloaded into `/assets/images/` to prevent broken links.

## Project Structure
```
/
├── index.html       # Main application HTML
├── css/
│   └── style.css    # Compiled, standalone stylesheet
├── js/
│   └── main.js      # Vanilla JavaScript for interactions & config
├── assets/
│   ├── images/      # Local image assets
│   └── icons/       # Local icon assets (if any)
└── README.md        # This file
```

## Local Development
Since this is a fully static website, you do not need any build tools to view it.
1. Simply open `index.html` in your web browser.
2. For testing functionality (like routing/API paths if added later), run a basic local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node (npx)
   npx serve .
   ```

## Vercel Deployment
This project is configured to deploy instantly on Vercel out-of-the-box, without any build scripts.

1. **Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```
   Accept the default settings. Vercel will automatically detect the static project and deploy it.

2. **Vercel Dashboard / GitHub**:
   - Push this folder to a GitHub repository.
   - Go to [Vercel](https://vercel.com/new).
   - Import your repository.
   - Set "Framework Preset" to **Other**.
   - Leave the Build Command and Output Directory blank.
   - Click **Deploy**.

## Configuration
Important business details (experience, customer counts, contact information) can be edited in the `BUSINESS_CONFIG` object located at the top of `js/main.js`.
