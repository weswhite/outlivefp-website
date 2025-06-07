# Outlive Financial Planning Website

A modern, responsive financial services website built with Next.js, React, and Tailwind CSS, featuring server-side rendering and professional design similar to Outlive Financial Planning.

## Features

- **Server-Side Rendering (SSR)** with Next.js 14
- **Responsive Design** with Tailwind CSS
- **Professional Financial Services Layout**
- **Interactive Components** (collapsible services, navigation)
- **SEO Optimized** with proper meta tags
- **Modern UI/UX** with smooth animations and transitions
- **Contact Forms** and call-to-action sections
- **Blog Section** for financial insights
- **Testimonials and Social Proof**

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: Next.js built-in routing with react-router-dom support

## Project Structure

```
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navigation.tsx   # Main navigation component
│   │   ├── Hero.tsx         # Hero section
│   │   ├── AboutSection.tsx # About company section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── BlogSection.tsx  # Blog posts display
│   │   ├── Footer.tsx       # Site footer
│   │   └── ...
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Key Components

### Navigation

- Responsive navigation with mobile menu
- Fixed header with smooth scrolling
- Professional branding

### Hero Section

- Compelling headline and value proposition
- Clear call-to-action buttons
- Professional gradient background

### Services Section

- Interactive collapsible service descriptions
- Comprehensive financial planning areas
- Clear pricing information

### About Section

- Company mission and values
- Client testimonials and social proof
- Professional credibility indicators

## Pages

1. **Homepage** (`/`) - Complete landing page with all sections
2. **About** (`/about`) - Detailed company information
3. **Services** (`/services`) - Service offerings and pricing
4. **Additional routes** can be added for blog, contact, etc.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your brand colors
  }
}
```

### Content

- Modify component content in `/app/components/`
- Update page content in respective page files
- Add new pages by creating new directories in `/app/`

### Styling

- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom CSS utilities in Tailwind config

## SEO Features

- Server-side rendering for better SEO
- Proper meta tags on each page
- Semantic HTML structure
- Fast loading with optimized images
- Mobile-responsive design

## Performance Features

- Next.js automatic code splitting
- Optimized images with Next.js Image component
- CSS optimization with Tailwind
- Server-side rendering for faster initial loads

## Deployment

This project can be deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with Node.js support

For Vercel deployment:

```bash
npm install -g vercel
vercel
```

## License

This project is for educational/demonstration purposes. Modify as needed for your specific use case.

## Support

For questions or issues, please refer to the Next.js and React documentation, or create an issue in the project repository.
