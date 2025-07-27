# LumiMerse Website

A modern, minimalist website for LumiMerse - an AI robotics platform that enables users to build, train, and deploy autonomous robots.

## Features

- Clean, Apple-inspired design with generous white space
- Full-screen video hero section (Boston Dynamics style)
- Smooth scrolling and reveal animations
- Responsive design for all devices
- Sticky CTA bar for improved conversions
- Accessible navigation with mobile menu

## Technology Stack

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Google Fonts (Inter)

## Project Structure

lumimerse-website/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles
│   ├── responsive.css  # Media queries
│   └── animations.css  # Animation definitions
├── js/
│   ├── main.js         # Main JavaScript
│   └── smooth-scroll.js # Smooth scrolling
├── assets/
│   ├── videos/         # Video files
│   ├── images/         # Image assets
│   └── icons/          # Favicon and icons
└── README.md


## Setup

1. Clone this repository
2. Add your video file to `assets/videos/rover-demo.mp4`
3. Add placeholder images to the `assets/images/` directory
4. Open `index.html` in a modern web browser

## Customization

## Setup

1. Clone this repository
2. Add your video file to `assets/videos/rover-demo.mp4`
3. Add placeholder images to the `assets/images/` directory
4. Open `index.html` in a modern web browser

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --electric-teal: #00E5FF;  /* Main accent color */
    /* ... other variables */
}
Typography
The site uses the Inter font family. To change, update the Google Fonts link in index.html and the --font-primary variable.
Content
All content is in index.html. Update text, links, and structure as needed.
Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Mobile browsers

Performance Optimization

Lazy loading for images
Optimized animations with will-change
Debounced scroll events
Minify CSS and JS for production

License
© 2024 LumiMerse Ltd. All rights reserved.

### 8. **.gitignore**
Dependencies
node_modules/
Build output
dist/
build/
OS files
.DS_Store
Thumbs.db
Editor files
.vscode/
.idea/
*.swp
*.swo
Logs
*.log
npm-debug.log