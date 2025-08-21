# 🚀 Voidmire Portfolio Setup Guide

## Quick Start (3 steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to `http://localhost:5000`

## 🎯 What You'll See

- **Loading Screen**: "Entering the Voidmire..." with animated spinner
- **Hero Section**: Large "Voidmire" title with gradient effects
- **Interactive Elements**: 
  - Custom glowing cursor (desktop only)
  - Animated particles in background
  - Smooth scroll navigation
- **Sections**: About, Projects, Skills, Experience, Contact
- **Easter Egg**: Try the Konami Code (↑↑↓↓←→←→BA)

## 🛠️ Customization Guide

### Change Colors
Edit `client/src/index.css`:
```css
:root {
  --neon-purple: hsl(262.1, 83.3%, 57.8%);  /* Change this */
  --neon-cyan: hsl(186.2, 95.3%, 42.4%);    /* And this */
  --neon-green: hsl(142.1, 76.2%, 36.3%);   /* And this */
}
```

### Update Content
- **Projects**: `client/src/components/projects-section.tsx`
- **Skills**: `client/src/components/skills-section.tsx`
- **Experience**: `client/src/components/experience-section.tsx`
- **About Info**: `client/src/components/about-section.tsx`

### Add New Sections
1. Create component in `client/src/components/`
2. Import in `client/src/pages/home.tsx`
3. Add navigation link in `client/src/components/navigation.tsx`

## 📁 File Structure
```
voidmire-portfolio/
├── client/src/
│   ├── components/     # UI components
│   ├── pages/         # Page components  
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities
│   └── index.css      # Styles & themes
├── server/            # Backend API
├── shared/            # Shared types
└── package.json       # Dependencies
```

## 🚨 Troubleshooting

### Common Issues:
1. **Port 5000 in use**: Change port in `server/index.ts`
2. **Font Awesome icons missing**: Add your FontAwesome kit to `client/index.html`
3. **Database errors**: Configure PostgreSQL connection or use memory storage

### Production Build:
```bash
npm run build
npm start
```

## 🎮 Features Included

- ✅ Dark cyberpunk theme
- ✅ Responsive design
- ✅ Animated backgrounds
- ✅ Interactive cursor
- ✅ Project modals
- ✅ Contact form
- ✅ Konami code easter egg
- ✅ Smooth animations
- ✅ Mobile-friendly

Enjoy your new portfolio! 🌟