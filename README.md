# corraloop 🌀

> **Turn Solo Sweat Into Collective Momentum.**  
> The next-generation sports, fitness, and wellness community network where individual daily movement closes team loops.

---

## 🌟 Overview

**corraloop** is a modern, high-energy web application designed for runners, cyclists, triathletes, and wellness enthusiasts. Centered around the concept of "Closing the Loop," the platform unites solo workouts into shared crew streaks, regional challenges, and collective fitness milestones.

### Key Highlights
- 🏃 **Dynamic Loop Algorithm**: Real-time concentric rings tracking Distance, Cardio/Stamina, and Mind/Recovery.
- 🤝 **Crew & Squad Relays**: Workouts compound into squad energy reserves, unlocking collective rewards and club status.
- 🏆 **Live Global Challenges**: Participate in real-time competitions like City vs. City relays, elevation targets, and sunrise streaks.
- ⚡ **Interactive Ring Simulator**: Test workout durations and observe the live SVG loop close in real-time.
- 🎨 **Modern Athlete Aesthetics**: Custom-tailored brand palette featuring vibrant Coral (`#ff6243`), Emerald Loop Green (`#10b981`), and deep Midnight Navy (`#0b0f17`).

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (custom sports color palette & glow effects)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm / yarn

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/<your-username>/corraloop.git

# Navigate into the project directory
cd corraloop

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## 🔗 Connecting to Your GitHub Repository

If you haven't linked this local directory to your GitHub account yet, follow these quick steps:

1. Create a new repository on [GitHub](https://github.com/new) named `corraloop`.
2. In your terminal inside this project folder, run:

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/corraloop.git
git branch -M main
git push -u origin main
```

---

## 📂 Project Structure

```text
corraloop/
├── public/
│   ├── logo-icon.png           # Corraloop emblem
│   └── logo-full.jpg           # Full wordmark logo
├── src/
│   ├── assets/                 # Brand assets
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header & navigation
│   │   ├── Hero.jsx            # Dynamic hero with active sports metrics
│   │   ├── InteractiveLoopDemo.jsx  # Interactive SVG 3-ring simulator & 4-step workflow
│   │   ├── ChallengesSection.jsx    # Live category-filtered challenge explorer
│   │   ├── CrewCalculator.jsx       # Real-time squad energy impact calculator
│   │   ├── CommunityFeed.jsx        # Real-time athlete activity stream with cheers
│   │   ├── JoinModal.jsx            # Athlete pass generator & quick tracker connect
│   │   └── Footer.jsx          # Brand links, newsletter & GitHub status
│   ├── App.jsx                 # Main layout and view hierarchy
│   ├── index.css               # Tailwind & custom glow utilities
│   └── main.jsx                # React DOM entrypoint
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📄 License
MIT © corraloop
