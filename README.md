# Personal Website

A terminal-themed portfolio website showcasing my work as a Computer Science student and Cybersecurity Researcher.

## About

This is my personal portfolio website featuring:

- **Terminal-inspired UI** with macOS aesthetic
- **Comprehensive Resume** with professional experience and achievements
- **Project Showcase** highlighting hackathon wins and open-source contributions
- **Interactive Sections** for blog, certificates, and gallery
- **Contact Form** for networking and collaboration opportunities

## Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom terminal theme
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Bun (or npm/pnpm/yarn)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Pranavh-2004/Personal-website.git

# Navigate to project directory
cd Personal-website

# Install dependencies
bun install
# or: npm install

# Start development server
bun run dev
# or: npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
bun run build
# or: npm run build

# Preview production build
bun run preview
# or: npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Home, Resume, Projects, etc.)
│   ├── ui/                # Reusable UI components
│   ├── Navigation.tsx     # Main navigation bar
│   └── TerminalWindow.tsx # Terminal-themed wrapper
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── pages/                 # Route pages
```

## Features

- 🖥️ **Terminal Theme**: Authentic command-line aesthetic
- 🎨 **Dark Mode**: Default dark theme with light mode support
- 📱 **Responsive Design**: Optimized for all screen sizes
- ⚡ **Fast Performance**: Built with Vite for lightning-fast HMR
- ♿ **Accessible**: Follows WCAG guidelines
- 🎯 **SEO Optimized**: Meta tags and semantic HTML

## Contact

**Pranav Hemanth**

- Email: pranav2004@gmail.com
- GitHub: [@Pranavh-2004](https://github.com/Pranavh-2004)
- LinkedIn: [pranav-hemanth](https://linkedin.com/in/pranav-hemanth)

## License

This project is open source and available under the MIT License.
