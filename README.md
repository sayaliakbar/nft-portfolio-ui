# Yorfy NFT Portfolio UI

![Yorfy NFT Portfolio](https://github.com/user-attachments/assets/5867e49d-c336-4be8-9229-05fcfee94546)

## 📌 Overview

Yorfy NFT Portfolio UI is a modern, responsive front-end implementation of an NFT collection showcase website. This project is built using React and pure CSS, following a design-first approach based on a Figma mockup. The UI focuses on providing a seamless experience for users interested in exploring NFT collections, roadmaps, and community features.

> **Note:** All interactive buttons in this UI redirect to an error page since this is a frontend-only implementation without backend functionality.

## 🔗 Live Demo

[View Live Demo](https://nftportfoliobysayaliakbar.netlify.app)

## ✨ Features

- **Responsive Design**: Optimized for desktop (1280px), tablet (744px), and mobile (360px) viewports
- **Multiple Page Navigation**: Home, NFT, Roadmap, About Us, Contact Us pages with React Router
- **Modern UI Components**: Buttons, cards, inputs, headers with consistent styling
- **Interactive Elements**: Hover effects, transitions, and responsive layouts
- **Community Section**: Display community members and interaction options
- **NFT Collections**: Showcase different NFT items with details
- **Roadmap Timeline**: Visual representation of project milestones
- **Newsletter Subscription**: Email capture for newsletter updates
- **Contact Form**: User inquiry submission form
- **Error Handling**: Custom 404 page for graceful error handling

## 🛠️ Technologies Used

- **React 19**: For building the component-based UI
- **React Router v7**: For handling navigation between pages
- **Vite**: As the build tool and development environment
- **CSS3**: Pure vanilla CSS for styling without any frameworks
- **ESLint**: For code linting and maintaining code quality
- **Responsive Design**: Media queries for different screen sizes

## 🏗️ Project Structure

```
nft-portfolio-ui/
│
├── src/
│   ├── assets/           # Images, icons, and other static assets
│   ├── components/       # Reusable UI components
│   ├── containers/       # Higher-level components that contain multiple components
│   ├── layouts/          # Layout components like MainLayout
│   ├── pages/            # Page components
│   ├── routes/           # Routing configuration
│   ├── styles/           # Global CSS files
│   └── App.jsx           # Root component
│
├── public/               # Public assets and index.html
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/nft-portfolio-ui.git
   cd nft-portfolio-ui
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Responsive Design

The application is designed to be fully responsive across various device sizes:

- **Desktop**: Optimized for 1280px width and above
- **Tablet**: Optimized for 744px width
- **Mobile**: Optimized for 360px width

The layout adapts to different screen sizes using CSS media queries, flexible grid layouts, and responsive units.

## 🧩 Components

The UI is built with a modular component-based architecture:

- **Button**: Customizable with different sizes, styles, and states
- **NFTCard**: Displays individual NFT items with image and details
- **UserCard**: Shows user information with avatar and status
- **Community**: Displays community members and interaction options
- **Collection**: Groups NFT cards into collections
- **ImageCard**: Image-focused card with descriptive content
- **Header**: Page header with title, subtitle, and background gradients
- **Footer**: Site footer with social links and copyright information

## 🎨 Design System

The design system uses consistent colors and typography:

- **Colors**: Primary blue, dark blue, purple accents, and consistent text colors
- **Typography**: Poppins font family with carefully defined sizes and weights
- **Gradients**: Beautiful gradient backgrounds for visual appeal
- **Spacing**: Consistent padding and margin values throughout the application

## 🚧 Challenges and Solutions

1. **Complex Gradient Backgrounds**: Implemented layered, responsive gradient elements that maintain visual appeal across different screen sizes.

2. **Responsive Card Layouts**: Created flexible card layouts that seamlessly reorganize based on viewport size.

3. **Consistent Component Design**: Established a reusable component system that maintains design integrity across the application.

4. **Performance Optimization**: Ensured smooth transitions and animations without compromising load times.

## 🔮 Future Improvements

- Backend integration for actual NFT data
- Authentication system for users
- Wallet connection functionality
- Dark/Light theme toggle
- Improved accessibility features
- Localization support

## 👏 Acknowledgments

- Design based on [YORFY - NFT Portfolio Website UI Kit](https://www.figma.com/design/2nZgUiruP4TBzKAxCXn6Cb/YORFY---NFT-Portfolio-Website-UI-Kit?node-id=0-1&p=f&t=awr5ZtPCm3Snu3Yq-0) created by Streal Studio
- This project is a faithful front-end implementation of the above Figma design
- Thanks to Streal Studio for their beautiful and comprehensive design work
- This project is purely front-end and doesn't interact with any actual blockchain or NFT data

## 👤 Author

**Ali Akbar**

- GitHub: [@sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [sayaliakbar](https://linkedin.com/in/sayaliakbar)
- Instagram: [@ialiakbarhazara](https://instagram.com/ialiakbarhazara)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by Ali Akbar</sub>
</div>
