# How to Customize Your Restaurant Website

This document explains where to find and update all the dummy data in your website so you can replace it with your own restaurant's information.

## 1. Hero Showcase Images
The large background images that slide in the hero section at the top of the site can be changed here:
- **File path**: `frontend/src/data/showcase.js`
- **What to do**: Open the file and replace the `heroShowcaseImages` array with URLs to your own high-quality food or restaurant images. You can add as many as you want!

## 2. Hero Text & Headings
The main title ("WHERE EVERY MEAL IS A MEMORY") on the home page:
- **File path**: `frontend/src/components/Hero.jsx`
- **What to do**: Look for the `<h1>` tag around line 40. You can change "WHERE EVERY MEAL" and "IS A MEMORY" to your own slogan.

## 3. Culinary Gallery
The images, titles, and descriptions in the beautiful gallery section:
- **File path**: `frontend/src/data/gallery.js`
- **What to do**: Open this file to find the `galleryData` array. You can replace the `title`, `description`, and `image` properties with your own signature dishes.

## 4. Our Culinary Philosophy
The section with the chef's picture, story, and signature:
- **File path**: `frontend/src/components/Philosophy.jsx`
- **What to do**: 
  - Change the chef image URL inside the `<img>` tag.
  - Update the heading ("Tradition meets modern elegance.") and the paragraph text with your own restaurant's story.
  - Update the chef's signature image URL near the bottom of the component.

## 5. Restaurant Name (Navbar)
The text logo at the very top left of the site ("THE LATTICE BISTRO"):
- **File path**: `frontend/src/components/Navbar.jsx`
- **What to do**: Search for "THE LATTICE BISTRO" and replace it with the name of your restaurant.

## 6. The Menu
The menu items are currently set to fetch from your Node.js backend.
- **Backend file**: Check your backend database or backend routes (`backend/routes` or `backend/controllers`) to update the real menu items.
- **Frontend Fallback**: If the backend is off, the menu falls back to dummy data. You can find this fallback data inside `frontend/src/components/MenuGrid.jsx` inside the `useFallback()` function.

## 7. Contact Info & Footer
The address, phone number, email, and social links at the bottom of the page:
- **File path**: `frontend/src/components/Footer.jsx`
- **What to do**: Open this file and locate the hardcoded address, email, and phone number to replace them with your actual business details.

---
**Tip**: When you make changes to any `.js` or `.jsx` file, your local development server (`npm run dev`) will automatically refresh the page so you can see your changes instantly!
