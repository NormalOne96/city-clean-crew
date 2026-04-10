# 🏙️ City Clean Crew

A Claymation-style mobile kids game for ages 10 and under!

## 🎮 Game Features

- **Character Creator** — Choose boy/girl, customize skin, hair, eye, and uniform colors
- **4 Vehicles** — Garbage Truck 🚛, Recycle Truck ♻️, Repair Van 🔧, Walking 🚶
- **Open World Mini-Map** — Sim City-style scrollable city with roads, buildings, trees, and rivers
- **3 Job Types** — Collect trash → Dump, Collect recycling → Recycling Center, Fix pipes/dams/hydrants → Repair Shop
- **11 Badges** to earn with persistent storage
- **Mission System** — 6 rotating challenges
- **Combo System** — Chain pickups for bonus points!
- **Water Level Meter** — Fix broken pipes to prevent flooding
- **City Clean Meter** — Keep collecting to maintain cleanliness
- **Claymation Art Style** — Thick outlines, rounded clay-like shapes, bouncy animations
- **Mobile-First** — D-pad controls + touch-to-move on canvas, works on phone/tablet

## 🚀 Run Locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## 🚂 Deploy to Railway

### Option 1: GitHub (Recommended)
```bash
git init
git add .
git commit -m "City Clean Crew 🌟"
git remote add origin https://github.com/NormalOne96/city-clean-crew
git push -u origin main
```
Then connect repo in Railway dashboard.

### Option 2: Railway CLI
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## 🗂️ File Structure

```
city-clean-crew/
├── index.html      ← Complete game (single file HTML5)
├── server.js       ← Express server for Railway
├── package.json
├── railway.toml    ← Railway deploy config
└── README.md
```

## 🎯 How to Play

1. **Title Screen** → Tap "Play!"
2. **Create your character** → Pick gender, skin/hair/eye/uniform colors
3. **Drive around** with D-pad or tap where you want to go
4. **Switch vehicles** with the bottom bar
5. **Auto-collect** trash and recycling by driving near them
6. **Press "DO IT!"** to fix nearby broken pipes/hydrants when in Repair mode
7. **Complete missions** for bonus points and stars
8. **Earn badges** for milestones!
