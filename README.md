# 🚀 Chinni Krishna Kongala - Professional Portfolio

A modern, professional portfolio website showcasing 4+ years of expertise in software development, data engineering, AI/ML, and Cloud-Native DevSecOps. Built with Next.js 14, featuring a stunning dark/light mode, responsive design, and deployed automatically via GitHub Actions.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://chinnikrishna.github.io)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

---

## 🎯 About This Portfolio

This portfolio is more than just a website—it's a comprehensive showcase of my professional journey as a Software Engineer specializing in:

- 🔧 **Distributed Systems & Microservices** - Building scalable, production-ready architectures
- 🤖 **AI/ML Solutions** - RAG, GenAI, LangChain, and Agentic AI development
- ☁️ **Cloud-Native DevSecOps** - Kubernetes, CI/CD, Infrastructure as Code
- 📊 **Data Engineering** - Big data processing, governance, and quality management
- 🔒 **Security & Governance** - Cloud Custodian, WIZ, SAST/DAST implementation

---

## ✨ Features

### 🎨 Design & UX
- **🌓 Dark/Light Mode** - Seamless theme switching with system preference detection
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **⚡ Blazing Fast** - Static site generation with Next.js 14
- **🎭 Smooth Animations** - Custom CSS animations and transitions
- **♿ Accessible** - WCAG compliant, keyboard navigation, screen reader friendly

### 📋 Content Sections
- **Professional Background** - Comprehensive overview of expertise and leadership
- **Experience Timeline** - Interactive vertical timeline with 6 positions (Nike, Tech Field LLC, etc.)
- **Education** - Master's (3.9 GPA) and Bachelor's degrees with achievements
- **Skills & Technologies** - 50+ technologies across 7 categories
- **Key Projects** - RAG systems, microservices, automation platforms
- **Certifications** - 25+ certifications (AWS, Kubernetes, GenAI, Data Governance)
- **About Me** - Personal interests, philosophy, and professional values
- **Call-to-Action** - Engaging section to connect and collaborate

### 🚀 Technical Excellence
- **Static Export** - Pre-rendered for maximum performance
- **SEO Optimized** - Meta tags, semantic HTML, Open Graph support
- **Image Optimization** - Next.js Image component with lazy loading
- **Custom Cursor** - Animated cursor for enhanced UX (desktop)
- **Modern CSS** - Tailwind CSS with custom gradients and effects

---

## 📦 Prerequisites

Before you start, you'll need to install these programs on your computer:

### 1. **Node.js** (Required)
Node.js is a program that lets you run JavaScript code on your computer (instead of just in a web browser).

**How to install:**
- Visit: https://nodejs.org/
- Download the **LTS version** (the one recommended for most users)
- Run the installer and follow the on-screen instructions
- **To verify installation**: Open Terminal (Mac) or Command Prompt (Windows) and type:
  ```bash
  node --version
  ```
  You should see a version number like `v20.x.x`

### 2. **A Code Editor** (Recommended)
While not required to run the project, a code editor is helpful if you want to make changes.

**Recommended: Visual Studio Code (VS Code)**
- Visit: https://code.visualstudio.com/
- Download and install for your operating system
- It's free and beginner-friendly!

### 3. **Git** (Optional, but useful)
Git helps you download and manage the project files.

**How to install:**
- Visit: https://git-scm.com/
- Download and install for your operating system

---

## 📦 Installation & Setup

### Quick Start

```bash
# Clone the repository
git clone https://github.com/chinnikrishna/chinnikrishna.github.io.git
cd chinnikrishna.github.io

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Available Scripts

```bash
npm run dev         # Start development server (localhost:3000)
npm run build       # Build for production (creates /out folder)
npm run start       # Preview production build
npm run lint        # Run ESLint for code quality
```

---

## ▶️ Running the Project

Now let's start the website on your computer!

### Start the Development Server

1. In Terminal/Command Prompt, make sure you're in the project folder
2. Run this command:
   ```bash
   npm run dev
   ```
3. Wait a few seconds - you'll see messages appear
4. Look for a message like: `Ready - started server on 0.0.0.0:3000`

### View the Website

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to this address:
   ```
   http://localhost:3000
   ```
3. **Congratulations! 🎉** You should now see the portfolio website!

### What is "localhost:3000"?
- **localhost** means "this computer" (your own computer)
- **3000** is the "port" or door number where the website is running
- Together, it's like saying "show me the website running on my computer at door 3000"

### Making Changes

If you edit any files in the project:
1. Save your changes
2. The website will **automatically refresh** in your browser
3. You'll see your changes immediately (this is called "hot reload")

### Stopping the Server

When you're done:
1. Go back to Terminal/Command Prompt
2. Press `Ctrl + C` (on both Mac and Windows)
3. This stops the server

---

## 🏗️ Building for Production

When you're ready to publish the website to the internet:

### Step 1: Create a Production Build

A production build is an optimized version of your website that's faster and smaller.

```bash
npm run build
```

This command:
- Optimizes all images
- Minifies code (makes it smaller)
- Removes development tools
- Creates a super-fast version ready for the internet

### Step 2: Test the Production Build

Before publishing, test the optimized version:

```bash
npm run start
```

Then visit `http://localhost:3000` to see how it will look online.

### Step 3: Deploy to the Internet

You can publish your website using services like:

**Vercel** (Recommended - created by Next.js makers)
- Visit: https://vercel.com
- Sign up for a free account
- Click "New Project"
- Connect your GitHub repository
- Click "Deploy"
- Your site will be live in minutes!

**Other Options:**
- **Netlify**: https://netlify.com
- **GitHub Pages**: https://pages.github.com
- **AWS Amplify**: https://aws.amazon.com/amplify/

---

## 🏗️ Project Structure

```
chinnikrishna.github.io/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions CI/CD pipeline
├── src/
│   ├── app/
│   │   ├── page.tsx            # Main portfolio page (all sections)
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── globals.css         # Global styles, dark mode, animations
│   │   └── providers.tsx       # Theme provider wrapper
│   ├── components/
│   │   ├── NavBar.tsx          # Navigation with theme toggle
│   │   └── CustomCursor.tsx    # Animated custom cursor
│   └── images/
│       ├── me.jpg              # Profile photo
│       └── logo.jpeg           # Logo
├── public/
│   └── img/
│       └── logo.jpeg           # Public logo
├── next.config.js              # Next.js config (static export)
├── tailwind.config.js          # Tailwind custom colors & animations
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## 🔧 Troubleshooting

### Problem: "npm: command not found"
**Solution**: Node.js is not installed or not in your system PATH
- Reinstall Node.js from https://nodejs.org/
- Restart your Terminal/Command Prompt
- Try again

### Problem: "Port 3000 is already in use"
**Solution**: Something else is using port 3000
- Try a different port:
  ```bash
  npm run dev -- -p 3001
  ```
- Then visit `http://localhost:3001`

### Problem: Website looks broken or missing styles
**Solution**: Dependencies might not be installed correctly
1. Delete the `node_modules` folder
2. Delete `package-lock.json` file
3. Run `npm install` again
4. Run `npm run dev` again

### Problem: Changes aren't showing up
**Solution**: 
1. Make sure you saved the file (File → Save or `Ctrl/Cmd + S`)
2. Check the Terminal for error messages
3. Try refreshing the browser with `Ctrl/Cmd + Shift + R` (hard refresh)
4. Restart the development server

### Still Having Issues?
- Check the Terminal/Command Prompt for error messages
- Make sure you're in the correct folder (`chinnikrishna.github.io`)
- Ensure all files were downloaded correctly
- Try restarting your computer

---

## 💻 Technologies Used

### Core Framework
- **Next.js 14.1.1** - React framework with static export
- **React 18** - UI library with hooks
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **next-themes 0.4** - Dark mode with system detection
- **react-bootstrap-icons 1.11** - Beautiful icons

### Development Tools
- **ESLint** - Code quality and consistency
- **sharp 0.33** - Image optimization
- **react-animated-cursor 2.11** - Custom cursor component

### CI/CD & Deployment
- **GitHub Actions** - Automated build and deployment
- **GitHub Pages** - Free hosting for static sites

---

## 🎨 Customization Guide

### Update Personal Information

**Edit `src/app/page.tsx`:**

```tsx
// Update name and contact info
<h1>Your Name</h1>
<p>your.email@example.com</p>
<p>(+1) xxx-xxx-xxxx</p>

// Update professional background
<p>Your professional summary...</p>

// Update experience, education, skills, projects
```

### Change Colors & Theme

**Edit `tailwind.config.js`:**

```js
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest
    // ... customize your brand colors
    900: '#0c4a6e',  // Darkest
  }
}
```

### Modify Dark Mode Styles

**Edit `src/app/globals.css`:**

```css
/* Light mode */
:root {
  --background: 255 255 255;
}

/* Dark mode */
.dark {
  --background: 17 24 39;
}
```

---

## 🚀 Deployment

### GitHub Pages (Automatic)

This portfolio is configured for **automatic deployment** to GitHub Pages:

1. **Push to `main` branch**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Actions** automatically:
   - Builds the Next.js project
   - Exports static files to `/out`
   - Deploys to `https://chinnikrishna.github.io`

3. **Enable GitHub Pages** (one-time setup):
   - Go to repository Settings → Pages
   - Source: **GitHub Actions**

### Alternative Deployment Options

**Vercel** (Recommended for Next.js):
```bash
npm i -g vercel
vercel --prod
```

**Netlify**:
```bash
npm run build
# Drag /out folder to Netlify
```

**AWS Amplify, Azure, GCP** - All support static site hosting

---

## 🎓 Key Sections Explained

### Professional Background
Showcases expertise across:
- Software Development, Data Engineering, AI/ML
- Cloud-Native DevSecOps with automation focus
- Distributed Systems and Microservices architecture
- Production-ready CI/CD and Kubernetes platforms

### Experience Timeline
- Nike - Software Engineer II (Governance)
- Tech Field LLC - Software Developer & DevOps Engineer
- Intelligenie Software - Software Developer Intern
- UALR - Graduate Research Assistant
- Infor - Software Engineer Associate
- Pantech Solutions - AI Intern

### Skills Coverage
- Languages: Python, Go, Java, JavaScript, TypeScript
- Cloud: AWS (Lambda, EKS, S3, CloudFormation, Glue)
- DevOps: Docker, Kubernetes, Jenkins, ArgoCD, Terraform
- AI/ML: RAG, LangChain, LangGraph, Ollama, GenAI
- Data: PySpark, PostgreSQL, MongoDB, DynamoDB

---

## 📈 Performance Optimizations

- ✅ Static Site Generation (SSG) for instant loading
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minified CSS and JavaScript
- ✅ Optimized fonts with `next/font`
- ✅ Lighthouse score: 95+ (Performance, Accessibility, SEO)

---

## 🤝 Contributing

This is a personal portfolio, but feedback is welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📝 License

© 2025 Chinni Krishna Kongala. All rights reserved.

This portfolio is for personal use. You're welcome to use it as inspiration for your own portfolio, but please don't copy it directly.

---

## 🌐 Connect With Me

- 📧 Email: chinnikrishna2023@gmail.com
- 💼 LinkedIn: [Connect on LinkedIn](https://linkedin.com/in/chinnikrishna)
- 💻 GitHub: [@chinnikrishna](https://github.com/chinnikrishna)
- 🌍 Portfolio: [https://chinnikrishna.github.io](https://chinnikrishna.github.io)

---

## 🙏 Acknowledgments

Built with passion using:
- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [GitHub Pages](https://pages.github.com/) - Free hosting

---

**Built with ❤️, a ton of patience, AI prompting, and the eternal hope that it compiles! 🚀**

*If you've scrolled all the way down here, I must've caught your attention! Let's connect and build something the tech world will be proud of. 💡✨*
