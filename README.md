# AnnaSetu AI (अन्नसेतु AI)

> **"Don't waste food. Share it."**
> A modern surplus food sharing platform connecting food donors (wedding venues, restaurants, caterers, hostel messes) with verified NGOs and volunteers to eradicate hunger and eliminate food waste across India.

---

## 🌟 Key Features

1. **AI-Powered Donor Portal (`/donate`)**:
   - **Gemini AI Assist ✨**: Type a quick casual note (e.g., *"10 kg biryani and raita from a wedding banquet"*) and Google Gemini automatically extracts clean titles, estimates servings, assigns safe consumption hours, and writes friendly descriptions.
   - **Smart Offline Fallback**: Works seamlessly even without an API key with intelligent heuristic parsing.
   - **Instant Digital QR Passes**: Generates a scannable SVG QR pickup verification pass and pass code for field volunteers.

2. **Browse & Claim Hub (`/browse`)**:
   - **Real-Time Live Countdown Timers**: Per-second live countdowns ticking down to each listing's pickup deadline.
   - **Freshness Badges**: Automatic categorization into `Fresh` (>3 hrs), `Use soon` (1-3 hrs), and `Expiring` (<1 hr).
   - **Two Distinct Tabs**: Seamlessly toggle between **Available Surplus** and **Claimed & In Dispatch**.
   - **Multi-Filter System**: Filter by Dietary (Veg / Non-Veg), Distance (<3km, <5km, <10km), Time Left, and Quantity.
   - **Interactive Geofence Vector Map**: Custom styled dispatch radar map showing pickup hubs without requiring paid map API keys.
   - **NGO Claim Modal**: Prompts for NGO name (with quick-select options like *Robin Hood Army*, *Feeding India*, *Goonj*, *Annam Seva Trust*) and volunteer contact.

3. **Multilingual AI Assistant "Anna" (Floating Chatbot)**:
   - Available on **every page** via a floating chat button.
   - Answers questions regarding **FSSAI food safety rules**, how to donate, how NGOs claim food, and partner relief organizations.
   - **Bilingual & Empathetic**: Automatically replies in **Hindi (हिंदी)**, **Hinglish**, or **English** matching the user's language.

4. **Dynamic Impact Dashboard (`/impact`)**:
   - **Recharts Visualizations**:
     - *Meals Saved Per Week* bar chart.
     - *Food Type Split* (Veg vs. Non-Veg) donut pie chart.
   - **Top Donor Heroes Leaderboard**: Ranked donor table with gold/silver/bronze badges, meal counts, and carbon offsets.
   - **Downloadable Impact Certificate**: Official printable National Certificate of Zero Food Waste Stewardship with custom donor name and `window.print()` support.

5. **Admin Management Console (`/admin`)**:
   - Live summary statistics: Total Listings, Available, Claimed, and Total Meals Volume.
   - Full management table with live countdowns, search, filter, status toggles, and permanent listing removal.
   - Built-in data reset to restore the 8 realistic sample listings anytime.

6. **Design & Accessibility**:
   - Warm, trustworthy Indian palette: warm saffron (`#ea580c`), emerald forest green (`#15803d`), and soft cream (`#FAF7F2`).
   - Complete **Dark Mode** toggle in the navbar with `localStorage` persistence.
   - Fully mobile-responsive layout with mobile drawer navigation.
   - Zero-dependency client-side architecture using browser `localStorage`.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18.0 or newer recommended)
- npm or pnpm

### 1. Installation
Clone or navigate to the project directory and install dependencies:
```bash
npm install
```

### 2. Configure Google Gemini API Key (Optional)
AnnaSetu AI includes a built-in smart mock fallback that allows 100% of the app to function out of the box in demo mode.

To enable live Google Gemini AI generation for the **Donor AI Assist** and **Anna Chatbot**:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/).
2. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
3. Add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture

```
website/
├── index.html                   # HTML template with Google Fonts (Poppins)
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Tailwind theme: saffron, forest, cream colors
├── vite.config.js               # Vite bundler configuration
├── .env.example                 # Environment template for Gemini API key
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # React Router configuration & global chatbot
│   ├── index.css                # Tailwind directives & scrollbar styles
│   ├── context/
│   │   ├── ThemeContext.jsx     # Light / Dark theme toggle & persistence
│   │   └── ToastContext.jsx     # Global toast notification alerts
│   ├── data/
│   │   └── sampleListings.js    # 8 pre-loaded realistic sample food donations
│   ├── utils/
│   │   ├── storage.js           # localStorage read/write, claims & deletions
│   │   ├── geminiAi.js          # Gemini API + mock parser for donor form
│   │   └── chatbotGemini.js     # Multilingual Gemini assistant "Anna"
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Responsive header with dark mode toggle
│   │   │   └── Footer.jsx       # Mission, emergency helpline & platform links
│   │   ├── home/
│   │   │   ├── Hero.jsx         # Hero section with primary CTAs
│   │   │   ├── ImpactCounters.jsx# Animated count-up metrics
│   │   │   └── HowItWorks.jsx   # 3-step redistribution guide
│   │   ├── common/
│   │   │   └── QrCode.jsx       # Pure SVG digital verification pass generator
│   │   ├── browse/
│   │   │   ├── LiveCountdown.jsx# Per-second countdown & freshness badge
│   │   │   ├── PlaceholderMap.jsx# Custom vector geofence radar map
│   │   │   └── ClaimModal.jsx   # NGO claim modal
│   │   ├── chat/
│   │   │   └── AnnaChatbot.jsx  # Floating multilingual AI assistant
│   │   └── impact/
│   │       └── ImpactCertificateModal.jsx # Printable appreciation certificate
│   └── pages/
│       ├── HomePage.jsx         # Landing page with live surplus preview
│       ├── DonatePage.jsx       # Donor form with AI Assist & QR pass
│       ├── BrowsePage.jsx       # Card grid, filters, tabs & claim flow
│       ├── ImpactPage.jsx       # Recharts dashboards & leaderboard
│       └── AdminPage.jsx        # Dispatch oversight table & deletion
```

---

## 🛡️ Food Safety & Regulatory Alignment
AnnaSetu AI incorporates **FSSAI (Food Safety and Standards Authority of India)** guidelines into every donation:
- Hot food must remain above **65°C** in insulated catering carriers.
- Cooked perishables are tagged with recommended consumption limits (typically **3 to 5 hours**).
- Every claim requires identification of the volunteer or relief foundation for accountability.

---

## 📄 License
MIT © AnnaSetu AI - Built to eliminate hunger and save surplus food.
