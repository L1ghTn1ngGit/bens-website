# Benjamin's Tutoring Services Website

A modern, responsive website built with React and Tailwind CSS.

## 📁 Project Structure

```
BenWebsite/
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
│
├── public/
│   └── assets/
│       └── images/         # Put your images here
│
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main App component
│   │
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── Navbar.jsx     # Navigation bar
│   │   │   ├── Footer.jsx     # Page footer
│   │   │   └── index.js       # Export file
│   │   │
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.jsx       # Hero/landing section
│   │   │   ├── About.jsx      # About me section
│   │   │   ├── Services.jsx   # Services section
│   │   │   ├── Gallery.jsx    # Photo gallery
│   │   │   ├── Contact.jsx    # Contact section
│   │   │   └── index.js       # Export file
│   │   │
│   │   └── ui/            # Reusable UI components
│   │       ├── Button.jsx     # Button component
│   │       ├── Card.jsx       # Card component
│   │       ├── SectionHeading.jsx  # Section title
│   │       └── index.js       # Export file
│   │
│   └── styles/
│       └── index.css      # Main CSS file with Tailwind
│
└── Media/                 # Original media files from client
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Images
Copy your images to `public/assets/images/` with these names:
- `profile-1.jpg` - Main profile photo for hero section
- `about-1.jpg`, `about-2.jpg`, `about-3.jpg` - About section images
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery images

### 3. Start Development Server
```bash
npm run dev
```
The site will open at http://localhost:3000

### 4. Build for Production
```bash
npm run build
```
This creates a `dist` folder ready for deployment.

## 🎨 Color Scheme

The website uses a blue-green-purple "ink wash" color palette:
- **Primary**: Blue shades (#0ea5e9)
- **Secondary**: Green shades (#22c55e)  
- **Accent**: Purple shades (#a855f7)

Colors can be customized in `tailwind.config.js`.

## 📝 Customization

### Changing Content
- **Hero text**: Edit `src/components/sections/Hero.jsx`
- **About info**: Edit `src/components/sections/About.jsx`
- **Services**: Edit the services array in `src/components/sections/Services.jsx`
- **Contact info**: Edit `src/components/sections/Contact.jsx`

### Changing Styles
- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`

### Adding New Sections
1. Create a new file in `src/components/sections/`
2. Export it from `src/components/sections/index.js`
3. Import and add it to `src/App.jsx`

## 🔗 Important Links

- **Contact Form**: https://forms.gle/njc1mkTmSNtNuCa99
- **LinkedIn**: https://www.linkedin.com/in/benjamin-dron-1907a53a0
- **Email**: bendronedu@gmail.com
- **Phone**: (929) 669-5022

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Modern, sleek UI (square corners)
- ✅ Interactive gallery with lightbox
- ✅ Mobile-friendly navigation
- ✅ Optimized for performance
- ✅ Easy to customize

## 🛠 Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Icons** - Icons

## 📞 Support

For any questions about the website, contact the developer.
