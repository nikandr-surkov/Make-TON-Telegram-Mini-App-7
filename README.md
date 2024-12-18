# Make TON Telegram Mini App 7: Customize Telegram Mini App Theme
Welcome to the seventh guide in the **Make TON Telegram Mini App** series! This project demonstrates how to create a Telegram Mini App that showcases theme customization capabilities using Next.js 14, TypeScript, and Tailwind CSS.

## Project Overview
This Telegram Mini App demonstrates:
- Setting up a Next.js 14 project with TypeScript and Tailwind CSS
- Customizing Telegram Mini App appearance using Web App API
- Real-time color customization for header, bottom bar, and background
- TypeScript type definitions for Telegram Web App API
- Basic error handling for non-Telegram environments

## Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A Telegram account
- A Telegram Bot Token
- GitHub account
- Vercel account (for deployment)

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/nikandr-surkov/Make-TON-Telegram-Mini-App-7.git
   cd Make-TON-Telegram-Mini-App-7
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Project Structure
```
Make-TON-Telegram-Mini-App-7/
├── app/
│   ├── layout.tsx      # Root layout with Telegram Web App script
│   ├── page.tsx        # Main page with theme customization
│   └── globals.css     # Global styles and Tailwind
├── types/
│   └── telegram.d.ts   # TypeScript definitions for Telegram Web App
├── package.json
└── README.md
```

## Key Features
- Interactive color pickers for customizing:
  - Header color
  - Bottom bar color
  - Background color
- Real-time preview of color changes
- TypeScript support for Telegram Web App API
- Responsive design with Tailwind CSS
- Environment detection (Telegram vs non-Telegram)

## Deployment and Usage
Since this is a Telegram Mini App, you need to deploy it before testing:
1. Push your code to a GitHub repository
2. Deploy to Vercel:
   - Sign up for a Vercel account if needed
   - Connect your GitHub repository
   - Deploy the project
3. Set up your Telegram Mini App:
   - Go to [@BotFather](https://t.me/BotFather) on Telegram
   - Send `/newapp` or edit an existing bot
   - Use the Vercel URL as your Web App URL
4. Access your Mini App through Telegram on mobile or web

## Customization Parameters
The app demonstrates the following Telegram Mini App customization methods:
```typescript
WebApp.headerColor = "#000000";      // Customize header color
WebApp.bottomBarColor = "#1d2025";   // Customize bottom bar color
WebApp.expand();                     // Take full height
WebApp.enableVerticalSwipes();       // Enable swipe to close
```

## YouTube Channel
For video tutorials and more detailed explanations, visit my YouTube channel:
[Nikandr Surkov](https://www.youtube.com/@NikandrSurkov)

## Next Steps
Stay tuned for the next guide in the **Make TON Telegram Mini App** series, where we'll explore more advanced features and integrations with the Telegram platform!