# Personal Portfolio Website

A modern, minimalistic personal portfolio website built with React and Vite, featuring the Happy Hues Palette 13 color scheme.

## Features

- **Modern Design**: Clean, minimalistic design with smooth animations and transitions
- **Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Happy Hues Palette 13**: Beautiful color scheme with carefully chosen colors
- **Sections Included**:
  - Hero/Landing section with introduction
  - About section with statistics
  - Work Experience timeline
  - Skills with progress bars
  - Featured projects portfolio
  - Resume download with contact information
  - Footer with social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**src/components/Hero.jsx**
- Replace "Your Name" with your actual name
- Update the subtitle with your title/role
- Modify the description

**src/components/About.jsx**
- Edit the about text
- Update statistics (years of experience, projects, clients)

**src/components/Resume.jsx**
- Replace email: `your.email@example.com`
- Update GitHub URL: `github.com/yourusername`
- Update LinkedIn URL: `linkedin.com/in/yourprofile`

**src/components/Footer.jsx**
- Update social media links
- Replace "Your Name" in the copyright

**index.html**
- Update the page title from "Your Name - Portfolio"

### 2. Work Experience

Edit **src/components/Experience.jsx**:
- Update the `experiences` array with your work history
- Each entry should include: title, company, period, description, and highlights

### 3. Skills

Edit **src/components/Skills.jsx**:
- Modify the `skillCategories` array
- Add/remove skills and adjust proficiency levels (0-100)
- You can add new categories or modify existing ones (Frontend, Backend, Tools)

### 4. Projects

Edit **src/components/Projects.jsx**:
- Update the `projects` array with your actual projects
- Replace placeholder emojis with project images (add images to `src/assets/`)
- Update GitHub and live demo links
- Modify project tags to match your tech stack

### 5. Resume Download

To add your actual resume:
1. Add your resume PDF to the `public` folder (e.g., `public/resume.pdf`)
2. Update **src/components/Resume.jsx**:
```javascript
const handleDownload = () => {
  window.open('/resume.pdf', '_blank');
};
```

### 6. Profile Image

To add your profile photo:
1. Add your image to `src/assets/` (e.g., `profile.jpg`)
2. Update **src/components/Hero.jsx**:
```javascript
import profileImg from './assets/profile.jpg'

// In the hero-image div:
<div className="hero-image">
  <img src={profileImg} alt="Your Name" />
</div>
```

### 7. Color Customization

The color scheme uses Happy Hues Palette 13. To modify colors, edit **src/index.css**:
```css
:root {
  --color-bg: #fffffe;
  --color-bg-secondary: #d8eefe;
  --color-primary: #3da9fc;
  --color-accent: #ef4565;
  --color-text: #2b2c34;
  --color-text-secondary: #90b4ce;
}
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to be deployed.

## Deployment

You can deploy this website to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables
- **Happy Hues Palette 13** - Color scheme

## License

This project is open source and available under the MIT License.

## Credits

- Color palette: [Happy Hues](https://www.happyhues.co/palettes/13)
- Built with React and Vite

---

**Note**: Remember to update all placeholder content with your actual information before deploying!
