# Yoga Bliss — Pose Assets Convention

This folder contains local image assets for Yoga Bliss pose visuals.

## Recommended Specifications

- **Format**: SVG or WebP / PNG (optimized)
- **Dimensions**: Minimum 600×600 px (1:1 square aspect ratio recommended)
- **Palette**: Transparent or neutral warm cream (`#fdfbf7`) background
- **Naming Pattern**: All filenames should match pose IDs in kebab-case:
  - `mountain.svg` or `mountain.webp`
  - `childs-pose.svg` or `childs-pose.webp`
  - `cat.svg` or `cat.webp`
  - `cow.svg` or `cow.webp`
  - `cobra.svg` or `cobra.webp`
  - `downward-facing-dog.svg` or `downward-facing-dog.webp`
  - `tree.svg` or `tree.webp`
  - `chair.svg` or `chair.webp`
  - `warrior-i.svg` or `warrior-i.webp`
  - `warrior-ii.svg` or `warrior-ii.webp`

## Fallback Contract

If actual raster or vector files are not placed in this folder, the application utilizes the built-in `PoseIllustration` component, rendering graceful vector geometry directly in the DOM. Development, testing, and production builds continue seamlessly without broken images.

## Licensing

Ensure all images placed in this directory are either custom-created, appropriately licensed under Creative Commons Zero (CC0), or licensed for commercial distribution.
