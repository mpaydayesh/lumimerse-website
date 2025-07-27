# 🤖 LumiMerse Website

> A modern, responsive website for LumiMerse - Advanced AI Robotics Solutions

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://mpaydayesh.github.io/lumimerse-website)
[![GitHub](https://img.shields.io/badge/github-repository-blue)](https://github.com/mpaydayesh/lumimerse-website)

## ✨ Features

- 🎥 **Hero Video Background** - Immersive full-screen video with fallback support
- 🎨 **Modern Design** - Clean, professional UI with electric teal accents
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - CSS animations with scroll-triggered reveals
- 🧭 **Interactive Navigation** - Smooth scrolling with active section highlighting
- 🖼️ **Custom SVG Graphics** - Professional product illustrations
- 🚀 **Performance Optimized** - Lazy loading and optimized assets

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Variables, Flexbox, CSS Grid
- **Typography**: Google Fonts (Inter)
- **Graphics**: Custom SVG illustrations
- **Performance**: Lazy loading, optimized animations

## 📁 Project Structure

```
lumimerse-website/
├── 📄 index.html              # Main HTML file
├── 🎨 css/
│   ├── style.css              # Main stylesheet
│   ├── responsive.css         # Media queries
│   └── animations.css         # Animation definitions
├── ⚡ js/
│   ├── main.js                # Core JavaScript
│   └── smooth-scroll.js       # Smooth scrolling functionality
├── 🖼️ assets/
│   ├── videos/                # Video assets
│   ├── images/                # SVG illustrations & images
│   └── icons/                 # Favicon and icons
├── 📚 README.md               # Project documentation
├── 🔒 .gitignore              # Git ignore rules
└── 📦 package-lock.json       # Dependencies lock file
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/mpaydayesh/lumimerse-website.git
   cd lumimerse-website
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --electric-teal: #00E5FF;     /* Primary accent color */
    --pure-white: #FFFFFF;        /* Background color */
    --black: #000000;             /* Primary text */
    --dark-gray: #333333;         /* Secondary text */
    --light-gray: #F8F9FA;        /* Section backgrounds */
}
```

### Typography
The site uses the **Inter** font family. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify the `--font-primary` variable in CSS

### Content
All content is in `index.html`. Key sections to customize:
- Hero section text and CTA
- Platform features and benefits
- Project showcase items
- Pricing plans
- Contact information

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest) 
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Features

- **Lazy Loading** - Images load as they enter viewport
- **Optimized Animations** - Uses `will-change` for smooth performance
- **Debounced Events** - Scroll events are optimized
- **Minified Assets** - CSS and JS ready for production
- **SVG Graphics** - Scalable vector images for crisp display

## 🚀 Deployment

### GitHub Pages
1. Go to repository Settings
2. Navigate to Pages section
3. Select source branch (main)
4. Your site will be live at `https://mpaydayesh.github.io/lumimerse-website`

### Netlify
1. Connect your GitHub repository
2. Deploy automatically on push
3. Custom domain support available

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 LumiMerse Ltd. All rights reserved.

---

<div align="center">
  <strong>Built with ❤️ for the future of AI robotics</strong>
</div>