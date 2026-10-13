# ConstructionProject
# XTRA Construction Homepage Recreation

## 1. Project Overview

This project recreates the homepage of the XTRA Construction 2 reference website using HTML, CSS, and JavaScript.

The goal is to reproduce the reference website's layout, visual design, sections, interactions, and responsive behavior across desktop, tablet, and mobile devices.

**Reference website:** https://xtratheme.com/elementor/construction-2/

### Features

- Responsive navigation bar with a mobile menu
- Hero section with slider controls
- Feature and company introduction sections
- Construction services section
- Call-to-action banner
- Project workflow section
- Filterable projects gallery
- Testimonial carousel
- Partner logos section
- Contact and quote request form with client-side validation
- Footer with navigation links
- Responsive layouts for different screen sizes

## 2. Technologies Used

- **HTML5:** Page structure and semantic elements
- **CSS3:** Styling, layout, animations, and responsive design
- **JavaScript (ES6+):** Interactive components, navigation, gallery filtering, slider behavior, and form validation
- **Google Fonts / web fonts:** Typography, where available
- **Unsplash:** External photography used for visual presentation

## 3. Installation Instructions

### Prerequisites

- A modern web browser, such as Google Chrome, Microsoft Edge, or Firefox
- Visual Studio Code (recommended)
- Visual Studio Code Live Server extension (optional)

### Steps

1. Download or extract the project ZIP file.
2. Open the extracted project folder in Visual Studio Code.
3. Verify that the following files are in the same directory:

   ```text
   construction-homepage/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

4. Open `index.html` directly in a browser, or use Live Server for local development.

**Note:** This is a static HTML, CSS, and JavaScript project. Node.js, npm, and `npm install` are not required.

## 4. Development Command

### Option 1: Open in the default browser

From PowerShell, navigate to the project directory and run:

```powershell
Start-Process .\index.html
```

### Option 2: Use Visual Studio Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**, or click **Go Live**.

The website will open in your browser using a local development URL, usually similar to:

```text
http://127.0.0.1:5500/
```

Live Server automatically refreshes the browser when supported files are saved.

## 5. Build Command

There is no build command for the current implementation because it uses plain HTML, CSS, and JavaScript without a build tool.

**Build command:** Not applicable.

The files are served directly by a browser or static web server. No compilation or bundling is required.

## 6. Deployment Instructions

This project can be deployed to any static web hosting platform.

### Option 1: GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository.
3. Open the repository's **Settings**.
4. Navigate to **Pages**.
5. Select the deployment source and the branch containing the project files.
6. Save the configuration.
7. Open the published URL provided by GitHub Pages.

## 7. Dependencies

### Required dependencies

There are no external JavaScript packages or npm dependencies required to run the current project.

| Dependency | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layouts |
| Vanilla JavaScript | Interactive behavior |
| Web browser | Rendering and execution |

### External resources

- Unsplash image URLs provide photography.
- Web fonts may be loaded from external font services, depending on the implementation.

An internet connection may be required to load external images and fonts. Availability and loading performance depend on the external providers.

## 8. Assumptions

- The supplied reference website is the visual reference for the homepage recreation.
- The scope covers the homepage and its reusable visual sections, not every page of the original website.
- The current implementation is a static website rather than a React application.
- External image URLs are acceptable for the recreation.
- Interactive elements should demonstrate their intended front-end behavior.
- The quote request form is intended to demonstrate input handling and client-side validation; no backend service or email integration is configured.
- Deployment is expected to use static hosting.
- The original website's proprietary assets, backend systems, and internal implementation are not included.

## 9. Known Limitations

- **Visual differences:** The recreation may not match the original website pixel-for-pixel. Typography, spacing, animations, icons, and image cropping may differ.
- **External images:** Images loaded from third-party URLs may change, fail to load, or be unavailable.
- **No backend:** The quote request form does not submit information to a server, send emails, or save submissions to a database.
- **Demo interactions:** Interactive elements are front-end demonstrations and are not connected to the original website's services.
- **No React setup:** The current implementation does not use React components, JSX, Vite, or a React build pipeline.
- **No automated tests:** Unit tests, integration tests, and end-to-end tests are not configured.
- **Accessibility:** Accessibility behavior has not been independently audited against WCAG standards.
- **Browser differences:** Rendering and animation behavior may vary slightly across browsers and devices.
- **Performance optimization:** Image optimization, caching policies, and production performance testing have not been comprehensively configured.
- **No authentication or database:** The project does not include user accounts, server-side processing, or persistent application data.

## 10. Future Improvements

- Convert the static implementation into a reusable React application.
- Add a Vite-based development and production build workflow.
- Replace external image URLs with optimized, locally managed assets where appropriate.
- Integrate a backend for processing quote requests.
- Add automated UI and responsiveness tests.
- Improve keyboard navigation and accessibility.
- Optimize loading performance and add appropriate SEO metadata.
- Compare the finished page against the reference at multiple screen sizes and refine visual differences.

