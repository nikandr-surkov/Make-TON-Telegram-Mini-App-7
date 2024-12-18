'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isTelegram, setIsTelegram] = useState(false);
  const [currentTheme, setCurrentTheme] = useState({
    headerColor: '#000000',
    bottomBarColor: '#1d2025',
    backgroundColor: '#ffffff',
  });

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const initDataString = window.Telegram.WebApp.initData;
      if (initDataString) {
        const urlParams = new URLSearchParams(initDataString);
        try {
          const user = JSON.parse(urlParams.get('user') || '{}');
          if (user.id) {
            const tg = window.Telegram.WebApp;
            tg.ready();
            tg.expand();
            tg.enableVerticalSwipes();

            // Set initial colors
            tg.headerColor = "#000000";
            tg.bottomBarColor = "#1d2025";

            setIsTelegram(true);
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    }
  }, [])

  const updateTheme = (property: string, value: string) => {
    if (window.Telegram?.WebApp) {
      (window.Telegram.WebApp as any)[property] = value;
      setCurrentTheme(prev => ({ ...prev, [property]: value }));
    }
  };

  if (!isTelegram) {
    return (
      <main className="min-h-screen p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <h1 className="font-bold">This app only works in Telegram</h1>
          <p>Please open this application through Telegram Mini Apps.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">
        Customize Telegram Mini App Theme
      </h1>

      <div className="space-y-6">
        <div className="bg-white/10 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Color Customization</h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-2">Header Color</label>
              <input
                type="color"
                value={currentTheme.headerColor}
                onChange={(e) => updateTheme('headerColor', e.target.value)}
                className="w-full h-10 rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Bottom Bar Color</label>
              <input
                type="color"
                value={currentTheme.bottomBarColor}
                onChange={(e) => updateTheme('bottomBarColor', e.target.value)}
                className="w-full h-10 rounded"
              />
            </div>

            <div>
              <label className="block mb-2">Background Color</label>
              <input
                type="color"
                value={currentTheme.backgroundColor}
                onChange={(e) => updateTheme('backgroundColor', e.target.value)}
                className="w-full h-10 rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Current Settings</h2>
          <pre className="bg-black/20 p-4 rounded overflow-x-auto">
            {JSON.stringify(currentTheme, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}