# DigiTools

DigiTools is a modern web application that brings together premium AI tools, creative assets, templates, and productivity software in a single platform. It helps users save time, stay productive, and easily find useful digital resources.

---

## Features

### All-in-One Digital Platform

Browse AI tools, design assets, templates, and software from one organized dashboard.

### Responsive Design

Built with Tailwind CSS and DaisyUI to ensure a modern and fully responsive experience on all devices.

### Toast Notifications

React-Toastify is used to show notifications for actions such as success messages, alerts, and product interactions.

---

## Technologies Used

- React.js
- Tailwind CSS
- DaisyUI
- JavaScript (ES6+)
- React-Toastify
- JSON

---

## Project Structure

```bash
digitools/
├── public/
│   ├── images/
│   │   ├── banner.png
│   │   ├── logo.svg
│   │   └── ...
│   ├── favicon.svg
│   ├── icons.svg
│   └── products.json
├── src/
│   ├── assets/
│   │   └── ui/
│   │       └── DigiTools.fig
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Cart.jsx
│   │   ├── Cta.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Products.jsx
│   │   ├── Stats.jsx
│   │   └── Steps.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

```bash
git clone https://github.com/md-saju-ahmed/digitools.git  
cd digitools  
npm install  
npm run dev
```

---

## Live Preview

```text
https://go-digitools.netlify.app/
```

---

## SVG Icons

```html
<svg class="facebook"><use xlinkHref="/icons.svg#icon-facebook"></use></svg>
<svg class="instagram"><use xlinkHref="/icons.svg#icon-instagram"></use></svg>
<svg class="twitter-x"><use xlinkHref="/icons.svg#icon-twitter-x"></use></svg>

<svg class="user"><use xlinkHref="/icons.svg#icon-user"></use></svg>
<svg class="package"><use xlinkHref="/icons.svg#icon-package"></use></svg>
<svg class="rocket"><use xlinkHref="/icons.svg#icon-rocket"></use></svg>

<svg class="menu"><use xlinkHref="/icons.svg#icon-menu"></use></svg>
<svg class="check"><use xlinkHref="/icons.svg#icon-check"></use></svg>
<svg class="play"><use xlinkHref="/icons.svg#icon-play"></use></svg>
<svg class="shopping-cart"><use xlinkHref="/icons.svg#icon-shopping-cart"></use></svg>
```
