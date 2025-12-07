# How to Upload Images from Your PC

## Step 1: Add Images to the Project

1. **Copy your image files** from your PC to the project folder:
   - Navigate to: `arkista-web/public/images/`
   - Create subfolders if you want to organize by category:
     - `pencil-drawings/`
     - `charicatures/`
     - `paintings/`

2. **Place your image files** in the appropriate folders (or directly in `images/`)

## Step 2: Update Portfolio Data

1. Open `src/data/portfolioData.js`

2. Replace the image URLs with local paths. For example:

   **Before (external URL):**
   ```javascript
   images: [
     "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
   ]
   ```

   **After (local image):**
   ```javascript
   images: [
     "/images/pencil-drawings/portrait-study-1.jpg",
     "/images/pencil-drawings/portrait-study-2.jpg",
   ]
   ```

## Important Notes

- **Path format**: Always start with `/images/` (the leading slash is important)
- **File location**: Images must be in the `public/images/` folder
- **Supported formats**: JPG, PNG, GIF, WebP, etc.
- **File names**: Use lowercase letters, numbers, and hyphens (avoid spaces)
  - ✅ Good: `portrait-study-1.jpg`
  - ❌ Bad: `Portrait Study 1.jpg`

## Example Structure

```
arkista-web/
├── public/
│   └── images/
│       ├── pencil-drawings/
│       │   ├── portrait-study-1.jpg
│       │   └── portrait-study-2.jpg
│       ├── charicatures/
│       │   └── cityscape-charicature-1.jpg
│       └── paintings/
│           └── natures-palette-1.jpg
└── src/
    └── data/
        └── portfolioData.js
```

## Quick Example

If you have an image file called `my-artwork.jpg` in `public/images/`, you would reference it as:

```javascript
images: [
  "/images/my-artwork.jpg"
]
```

After adding images and updating the paths, restart your dev server (`npm run dev`) to see the changes.


