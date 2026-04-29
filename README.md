# RenovationPro UI

![RenovationPro](https://img.shields.io/badge/Status-Active-success)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)

RenovationPro is a professional home renovation management platform built with modern web technologies. It connects homeowners with trusted contractors, providing transparent project management from start to finish. This repository contains the frontend user interface and application logic.

## 🌟 Features

- **Public Homepage**: A highly optimized landing page showcasing active projects and the platform's value proposition.
- **Role-based Dashboards**: Dedicated portals for different user types:
  - **Admin Dashboard**: Comprehensive overview of all ongoing projects, contractors, and system metrics.
  - **Client Portal**: Real-time project tracking, budget monitoring, and transparent communication for homeowners.
  - **Worker Portal**: Task management and updates for on-site contractors.
- **Modern UI/UX**: Built with Radix UI primitives and Tailwind CSS for a fully responsive, accessible, and beautiful user experience.
- **Data Visualization**: Integrated with Recharts for clear financial and progress reporting.
- **Robust Forms**: Utilizing React Hook Form and Zod for seamless data validation and input.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/) 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI Components**: [Radix UI](https://www.radix-ui.com/) / [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v22+) and [pnpm](https://pnpm.io/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/renovation-ui-main.git
   cd renovation-ui-main
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
renovation-ui-main/
├── app/                  # Next.js App Router layout, pages, and API routes
│   ├── admin/            # Admin portal routes
│   ├── client/           # Client portal routes
│   ├── worker/           # Worker portal routes
│   ├── globals.css       # Global styles and Tailwind directives
│   └── page.tsx          # Public landing page
├── components/           # Reusable UI components (shadcn/ui, custom)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and shared logic
├── public/               # Static assets (images, fonts, etc.)
└── styles/               # Additional styling configurations
```

## 📜 Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Runs the built production application.
- `pnpm lint`: Lints the codebase using ESLint.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
