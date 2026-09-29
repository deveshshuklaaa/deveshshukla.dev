# Devesh Shukla — Developer Portfolio

Personal engineering portfolio website for **Devesh Shukla**, Software & AI/ML Developer.

Live site: [https://deveshshukla.dev](https://deveshshukla.dev)

## Overview

A fast, lightweight, and responsive developer portfolio engineered with a focus on real systems, technical depth, and clean visual hierarchy.

### Featured Projects

- **Haemophilia Exercise Analysis**: Pose-derived kinematic feature extraction, temporal modeling (LSTM), and strict Leave-One-Subject-Out (LOSO) evaluation.
- **StockBill**: Full-stack FMCG inventory and billing software (Django REST Framework, React, PostgreSQL, Docker).
- **PURA AIR**: IoT air-quality monitoring system with ESP32 sensor acquisition, edge AQI computation, and MQTT telemetry.
- **SmartSpray**: AI-assisted agricultural spraying prototype combining YOLO detection, FastAPI, and ESP32 pump control with tri-modal operation.
- **CyberLabX**: Virtual cybersecurity laboratory with dynamic Docker challenge provisioning via dockerode.

## Tech Stack

- **Core**: React 19, Vite
- **Styling**: Vanilla CSS (Custom Design System, Dark Mode, Responsive)
- **Deployment**: GitHub Pages via GitHub Actions
- **Custom Domain**: `deveshshukla.dev`

## Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Continuous Deployment

Deployment is automated via GitHub Actions on push to `main` (`.github/workflows/deploy.yml`).
