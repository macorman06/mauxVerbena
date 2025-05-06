# verbenaMaux 🎉

**Verbena Maux** is a full-screen, responsive, single-page web application built with **React**, **TailwindCSS**, and **PrimeReact**, designed to manage a real-world **bingo game** for live events. It is optimized for large displays (e.g. projectors or TVs) and allows easy interaction with a physical bingo draw.

## 🚀 Features

- SPA navigation (no reloads)
- Display and track 3 independent Bingo sessions
- Manually mark/unmark numbers by clicking on them
- Show last called number in a central ball
- Toggle “LÍNEA” state to indicate line completion
- Show prize image for each bingo session
- LocalStorage persistence: state survives page reloads
- Fully responsive layout with no scroll
- Raffle section with input to display winning number
- Sponsor carousel and event menu image gallery
- Clean and bold layout for visibility from distance

## 🧱 Tech Stack

- **React 18**
- **Tailwind CSS**
- **PrimeReact**
- **Framer Motion**
- **TypeScript**
- **Vite**

## 🧑‍💻 Development

### Clone the repo

```bash
git clone https://github.com/yourusername/verbenaMaux.git
cd verbenaMaux
```

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

## 📁 Project Structure

```
/public
  /assets
    /logos
    /menu
    /premios
    /patrocinadores
    /rifa
/src
  /components
  /pages
  /assets
```

## 📦 Deployment

This project is designed for deployment on **Cloudflare Pages**. Push your changes to GitHub and link the repo to Cloudflare. Use the default Vite build settings:

```
npm run build
```

## 🖼 Screen Layout

- Left: Bingo numbers (1–50)
- Center: current session info, LÍNEA button, bingo ball, prize, session switch & reset
- Right: Bingo numbers (51–90)

Everything fits in a single screen without scroll, using responsive breakpoints and scalable units.

## 📄 License

This project is open-source and freely usable for community and educational events.

---

Made with ❤️ for the VERBENA MAUX festival.
