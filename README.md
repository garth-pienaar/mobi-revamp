# Interbet Revamp - Steam-Inspired Sports Betting Platform

A modern, sleek redesign of the Interbet sports betting website, styled after Steam's gaming platform aesthetic.

## Features

- **Steam-Inspired Design**: Dark theme with signature blue gradients and smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Live Betting Display**: Real-time updates for ongoing matches
- **Interactive Cards**: Hover effects and smooth transitions throughout
- **Promotional Section**: Eye-catching offers with dynamic gradients
- **Modern Tech Stack**: Built with React, Vite, and TailwindCSS

## Design Highlights

### Color Palette
- **Primary Dark**: `#171a21` (Steam darker)
- **Secondary Dark**: `#1b2838` (Steam dark)
- **Accent Blue**: `#1a9fff` - `#66c0f4` (Steam blue range)
- **Gradient**: `#06BFFF` → `#2671BD`

### Components
- **Header**: Sticky navigation with search and authentication
- **Hero Section**: Featured live match with promotional card
- **Live Events**: Grid of ongoing matches with real-time odds
- **Betting Cards**: Reusable component for displaying match information
- **Promotions**: Multi-card promotional section with unique gradients
- **Footer**: Comprehensive links and payment methods

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173` to view the site.

### Build
```bash
npm run build
```

## Tech Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **Custom Design System**: Steam-inspired color scheme and components

## Customization

### Adding Images
Replace emoji placeholders with actual sports/team images in:
- `src/components/BettingCard.jsx` - Team logos
- `src/components/Hero.jsx` - Featured event images
- `src/components/Promotions.jsx` - Promotional graphics

### Updating Colors
Modify the color scheme in `tailwind.config.js` under the `steam` theme extension.

### API Integration
Currently uses mock data. Connect to your betting API by:
1. Creating a `src/services/api.js` file
2. Replacing static data in components with API calls
3. Adding state management (Redux/Zustand) if needed

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main navigation
│   ├── Hero.jsx            # Featured section
│   ├── BettingCard.jsx     # Reusable match card
│   ├── LiveEvents.jsx      # Live & upcoming events
│   ├── Promotions.jsx      # Promotional offers
│   └── Footer.jsx          # Site footer
├── App.jsx                 # Main app component
├── index.css               # Global styles + Tailwind
└── main.jsx                # Entry point
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This is a demo/revamp project created for client presentation.
