# 🎮 Voidmire Portfolio

A modern, immersive personal portfolio website for game developer Shalendra, featuring a dark cyberpunk aesthetic with interactive elements.

## ✨ Features

- **Dark Gaming Aesthetic**: Cyberpunk-inspired design with neon purple/cyan accents
- **Interactive Elements**: 
  - Custom glowing cursor effect
  - Animated particle background
  - Smooth scroll animations
  - Project modal details
- **Responsive Sections**:
  - Hero section with gradient text
  - About me with profile image
  - Projects showcase with tech stacks
  - Skills with animated progress bars
  - Experience timeline
  - Contact form with backend integration
- **Easter Eggs**: Konami code activation with special effects
- **Performance Optimized**: Built with React, TypeScript, and Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:5000`

### Production Build

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS with custom styling
- Framer Motion for animations
- Wouter for routing
- Radix UI for components
- TanStack Query for state management

**Backend:**
- Node.js with Express
- PostgreSQL with Drizzle ORM
- Zod for validation

## 📁 Project Structure

```
voidmire-portfolio/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities
├── server/                 # Backend Express app
├── shared/                 # Shared schemas and types
└── configuration files
```

## 🎨 Customization

### Colors & Theme
Edit `client/src/index.css` to modify the color palette:
```css
:root {
  --neon-purple: hsl(262.1, 83.3%, 57.8%);
  --neon-cyan: hsl(186.2, 95.3%, 42.4%);
  --neon-green: hsl(142.1, 76.2%, 36.3%);
}
```

### Content Updates
- **Projects**: Edit `client/src/components/projects-section.tsx`
- **Skills**: Update `client/src/components/skills-section.tsx`
- **Experience**: Modify `client/src/components/experience-section.tsx`
- **About**: Change `client/src/components/about-section.tsx`

### Contact Form
The contact form integrates with a PostgreSQL database. Configure your database connection in the environment variables.

## 🎮 Easter Eggs

Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and create your own version!

---

**Built with ❤️ by Shalendra | Voidmire - Forging Worlds, Crafting Experiences**