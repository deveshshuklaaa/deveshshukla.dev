# Devesh Shukla — Engineering Index

An editorial portfolio for software, applied machine learning, and embedded systems. Built with React 19, Vite, and plain CSS.

- Production: [deveshshukla.dev](https://deveshshukla.dev)
- [Owner-only V4 review preview](https://devesh-engineering-index-v4-review.dapperopal.chatgpt.site)
- [Figma design and responsive frames](https://www.figma.com/design/huKE3nsyUk8P4zBRyVLBlS?node-id=4-2)
- [Design decisions, asset audit, and QA](docs/design/README.md)

## Selected work

- **Haemophilia Exercise Analysis** — pose kinematics, temporal LSTM modeling, and strict LOSO validation.
- **StockBill** — Django REST Framework, React, PostgreSQL, and transactional inventory and billing.
- **SmartSpray** — YOLO, FastAPI, and ESP32 pump control across AUTO, ASSISTED, and MANUAL modes.
- **CyberLabX** — isolated Docker challenge environments with programmatic container lifecycles.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

Local fonts and their licences live in `public/fonts`. The resume remains at `/devesh-shukla-resume.pdf`.

## Review workflow

The V4 redesign lives on `design/figma-portfolio-redesign` pending owner review. The preview workflow runs lint and build and uploads the static bundle as a GitHub Actions artifact. It cannot deploy the live domain.

Production continues to deploy through the existing GitHub Pages workflow on pushes to `main`. Do not merge the redesign without owner approval.
