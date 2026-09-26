# 💪 B14-A6-FitLog

A modern, responsive workout library and fitness planning application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

FitLog allows users to browse workouts, view detailed exercise information, add exercises to today's plan, save workouts for later, and manage their workout plan from a dedicated dashboard.

---

## 🔗 Project Links


* **Live Demo:** `https://b14-a6-fit-logs.vercel.app/`
* **GitHub Repository:** `https://github.com/developer-shoron/B14-A6-Fit-Log`

---

## ✨ Features

* 🏋️ **Workout Library** — Browse all available workouts from the FitLog API.
* 📋 **Today's Plan** — Add workouts to a daily plan with a maximum of 5 exercises.
* 🔖 **Save for Later** — Save favorite workouts and access them from the Saved tab.
* 🔎 **Search** — Search workouts by name or relevant information.
* ↕️ **Sorting** — Sort workouts by duration, calories, or rating.
* 📊 **Live Metrics** — Track exercises, total minutes, and calories in today's plan.
* ✅ **Mark as Done** — Mark planned workouts as completed.
* ❌ **Remove Workout** — Remove workouts from today's plan.
* 🔔 **Toast Notifications** — Get instant feedback when adding, saving, completing, or removing workouts.
* 💾 **Local Storage** — Plan and saved workouts persist after page reloads.
* 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
* ⚡ **Loading & Error States** — Includes loading UI and a custom 404 page.

---

## 📄 Main Pages

### 🏠 Home / Workout Library

The home page includes:

* Responsive navbar
* Workout library hero section
* Workout cards
* Workout categories
* Equipment information
* Duration, calories, and rating
* Browse workouts CTA
* Responsive workout grid

### 📋 My Plan — `/my-plan`

The My Plan page includes:

* Today's Plan tab
* Saved tab
* Exercise count
* Total workout minutes
* Total calories
* Search functionality
* Sort functionality
* View Details
* Mark as Done
* Remove workout
* Empty state
* Responsive workout cards

### 🏋️ Workout Details — `/workouts/[id]`

Each workout has a dedicated details page containing:

* Workout image
* Workout title
* Description
* Category tags
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions
* Add to Today's Plan
* Save for Later

### 🚫 404 Page

A custom not-found page is included for invalid or unknown routes.

---

## 🧭 Navigation

The navbar contains:

* **WORK OUT** → Home / Workout Library
* **MY PLAN** → Personal workout plan
* **Plan Counter** → Number of workouts currently in Today's Plan
* **Saved Counter** → Number of saved workouts

Both counters link to the My Plan page.

The active navigation item is visually highlighted.

---

## 🔌 API

FitLog uses the provided FitLog API.

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## 🛠️ Technologies Used

| Technology         | Purpose                                      |
| ------------------ | -------------------------------------------- |
| Next.js 16         | React framework and application architecture |
| TypeScript         | Type-safe development                        |
| React              | UI development                               |
| Next.js App Router | Routing and page navigation                  |
| Tailwind CSS       | Styling and responsive design                |
| Lucide React       | Icons                                        |
| React Toastify     | Toast notifications                          |
| Context API        | Plan and Saved state management              |
| LocalStorage       | Persistent client-side data                  |
| Next/Image         | Optimized image rendering                    |

---

## 📱 Responsive Design

FitLog is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The interface adapts with:

* Responsive navigation
* Responsive hero section
* Collapsible workout grids
* Flexible workout cards
* Mobile-friendly action buttons
* Responsive My Plan layout

---

## 🗂️ Project Structure

```text
src/
├── app/
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── my-plan/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   └── not-found.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WorkoutCard.tsx
│   ├── ActionButtons.tsx
│   └── Footer.tsx
│
├── context/
│   └── PlanContext.tsx
│
└── types/
    └── index.ts
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/developer-shoron/B14-A6-Fit-Log.git
```

### 2. Navigate to the project

```bash
cd B14-A6-Fit-Log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 🎯 Assignment Requirements Covered

### Basic Requirements

* ✅ Responsive on mobile, tablet, and desktop
* ✅ Meaningful Git commits
* ✅ Production build support
* ✅ Project documentation with README

### Main Requirements

* ✅ Responsive Navbar
* ✅ Active navigation state
* ✅ Plan and Saved counters
* ✅ Hero / Banner section
* ✅ Workout Library
* ✅ Responsive workout grid
* ✅ Workout Details page
* ✅ Add to Today's Plan
* ✅ Save for Later
* ✅ My Plan page
* ✅ Today's Plan and Saved tabs
* ✅ Metrics summary
* ✅ Loading state
* ✅ Empty state
* ✅ Footer
* ✅ Custom 404 page
* ✅ Toast notifications
* ✅ Responsive layout

### Challenge Requirements

* ✅ Sort by Duration
* ✅ Sort by Calories
* ✅ Sort by Rating
* ✅ Mark as Done
* ✅ Remove workout
* ✅ Search functionality
* ✅ LocalStorage persistence

---

## 📊 My Plan Rules

FitLog supports a maximum of **5 workouts** in Today's Plan.

The My Plan dashboard dynamically calculates:

* Total exercises
* Total workout duration
* Total calories

These values update when workouts are added or removed.

---

## 🔔 User Feedback

Toast notifications are displayed for important actions, including:

* Workout added to today's plan
* Workout saved
* Workout marked as done
* Workout removed
* Other relevant user actions

---

## 🚀 Deployment

The application can be deployed using:

* Vercel
* Netlify
* Cloudflare Pages

### Production Checklist

Before submission:

* [ ] Production build works without errors
* [ ] All routes work after refresh
* [ ] Workout details pages work correctly
* [ ] Plan and Saved functionality works
* [ ] Responsive layout checked
* [ ] Live deployment link added
* [ ] GitHub repository link added

---

## 📸 Screenshots

Add project screenshots here after deployment.

Example:

```text
screenshots/
├── home.png
├── workout-details.png
└── my-plan.png
```

---

## 👨‍💻 Author

**Monjurul Islam Shoron**

* GitHub: `@developer-shoron`
* Project: **B14-A6-FitLog**

---

## 📜 License

This project was created for educational purposes as part of the Programming Hero assignment.
