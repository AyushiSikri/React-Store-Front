# MyStore

A responsive e-commerce storefront built with React. The application allows users to browse products, explore categories, search for items, and view detailed product information using the DummyJSON Products API.

## Features

* Responsive homepage
* Featured products section
* Browse products by category
* Product detail page
* Search products
* Loading skeletons
* Error handling with retry option
* Lazy-loaded images for better performance
* Optimized rendering using `React.memo` and `useMemo`
* Clean and reusable component-based architecture

## Tech Stack

* React
* React Router
* JavaScript (ES6+)
* CSS
* DummyJSON Products API

## Project Structure

```text
src/
│── assets/
│── components/
│── pages/
│── services/
│── App.jsx
│── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AyushiSikri/React-Store-Front.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local development URL displayed in your terminal to view the application.

## Build for Production

```bash
npm run build
```

## API

This project uses the DummyJSON Products API to fetch:

* Products
* Product details
* Categories
* Category-wise products
* Search results

## Performance Optimizations

* Lazy-loaded product images
* Skeleton loaders for a smoother loading experience
* Graceful error handling with retry functionality
* `React.memo` to prevent unnecessary component re-renders
* `useMemo` to memoize derived data and avoid repeated calculations

## Author

**Ayushi Sikri**
