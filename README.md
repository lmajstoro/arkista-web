# Art Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and a clean design.

## Features

- **Home Page**: Welcome section with hero and feature highlights
- **Portfolio Page**: Filterable gallery with categories (All, Pencil Drawing, Charicature, Painting)
- **Portfolio Item Detail**: Individual pages for each artwork with image gallery, descriptions, and video support
- **Responsive Design**: Fully responsive with breakpoints at 480px, 768px, 1024px, 1280px, and 1536px
- **Smooth Animations**: Subtle animations using Framer Motion
- **Modern UI**: Clean, minimalist design with Tailwind CSS

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
arkista-web/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── PortfolioFilter.jsx
│   │   ├── PortfolioGrid.jsx
│   │   └── ImageGallery.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   └── PortfolioItem.jsx
│   ├── data/             # Data files
│   │   └── portfolioData.js
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── package.json
```

## Customization

### Adding Portfolio Items

Edit `src/data/portfolioData.js` to add or modify portfolio items. Each item should have:

- `id`: Unique identifier
- `title`: Artwork title
- `category`: One of "Pencil Drawing", "Charicature", or "Painting"
- `images`: Array of image URLs
- `description`: Text description
- `video`: Optional video URL (YouTube embed URL, etc.)

### Styling

The project uses Tailwind CSS. Customize colors, spacing, and other design tokens in `tailwind.config.js`.

### Responsive Breakpoints

The project uses custom breakpoints:
- `sm`: 480px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/arkista-web.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch will trigger a new deployment
   - Preview deployments are created for pull requests

### Build Settings (Auto-detected by Vercel)
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

The `vercel.json` file is included to handle React Router client-side routing correctly.

## License

This project is private and for personal use.
