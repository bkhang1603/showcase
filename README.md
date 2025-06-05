# T2V Technology Showcase Website

A modern, interactive showcase website for T2V's technology solutions, featuring 3D visualizations, animations, and comprehensive service presentations.

## 🚀 Features

### ✨ Interactive 3D Character Showcase

-   **3D Character Display**: Interactive characters representing Gaming, AR/VR, and IoT solutions
-   **Real-time Animations**: Floating characters with dynamic lighting and particle effects
-   **User Interaction**: OrbitControls for camera manipulation (drag to rotate, scroll to zoom)
-   **Loading States**: Beautiful animated loading fallbacks
-   **Tokyo-inspired Design**: Cyberpunk aesthetic with gradient backgrounds

### 🎮 Technology Solutions

-   **Gaming**: PC, Mobile, and Web gaming solutions
-   **AR/VR**: Immersive metaverse and spatial computing experiences
-   **IoT**: Smart connectivity and automation systems
-   **Simulation**: Advanced simulation and digital twin technologies

### 🎨 Modern UI/UX

-   **Responsive Design**: Mobile-first approach with seamless desktop scaling
-   **Framer Motion**: Smooth page transitions and scroll animations
-   **Tailwind CSS**: Modern styling with custom gradients
-   **TypeScript**: Type-safe development experience

## 🛠️ Tech Stack

-   **Framework**: Next.js 15.3.2 with App Router
-   **3D Graphics**: Three.js with React Three Fiber
-   **Animations**: Framer Motion
-   **Styling**: Tailwind CSS
-   **Language**: TypeScript
-   **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Clone the repository
git clone [repository-url]
cd showcase

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎯 Project Structure

```
showcase/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/
│   │   ├── home/              # Homepage components
│   │   │   ├── CharacterShowcase.tsx  # 3D character section
│   │   │   ├── HeroSection.tsx
│   │   │   └── ...
│   │   └── ui/                # Reusable UI components
│   └── assets/                # Static assets
├── public/
│   ├── models/                # 3D model files (.glb)
│   ├── images/                # Image assets
│   └── icons/                 # SVG icons
└── docs/                      # Documentation
    └── 3D_CHARACTER_GUIDE.md  # 3D implementation guide
```

## 🎮 3D Character Showcase

The CharacterShowcase component features:

-   **Interactive 3D Scene**: Built with React Three Fiber
-   **Three Characters**: Gaming Hero, AR/VR Champion, IoT Guardian
-   **Dynamic Animations**: Floating, rotating, and pulsing effects
-   **Lighting System**: Ambient, directional, and colored point lights
-   **Particle Effects**: Floating particle background
-   **Ground Plane**: Subtle reflective surface

### Customization

To replace placeholder characters with actual 3D models, see [3D Character Guide](./docs/3D_CHARACTER_GUIDE.md).

## 🌟 Key Components

### CharacterShowcase.tsx

-   3D character display with Three.js
-   Interactive camera controls
-   Loading states and error handling
-   Character information cards

### HeroSection.tsx

-   Hero banner with call-to-action
-   Animated background effects
-   Responsive typography

### ServicesSection.tsx

-   Service category showcases
-   Interactive hover effects
-   Feature highlights

## 💰 Pricing & Packages

### Frontend Development Package: 9,000,000 VND

**Included Services:**

-   ✅ Complete responsive website development
-   ✅ 3D character showcase implementation
-   ✅ Interactive UI/UX with animations
-   ✅ Modern Tokyo-inspired design system
-   ✅ Mobile optimization
-   ✅ Performance optimization
-   ✅ SEO setup and meta tags
-   ✅ Deployment configuration
-   ✅ Documentation and handover
-   ✅ 1 month technical support

**Timeline:** 2-3 weeks

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 📱 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

**Note**: 3D features require WebGL support.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is proprietary and belongs to T2V Technology Solutions.

## 📞 Support

For technical support or inquiries:

-   Email: contact@t2vtechnology.com
-   Phone: +84 (0) XXX XXX XXX
-   Website: https://t2vtechnology.com

---

**Built with ❤️ by T2V Technology Team**
