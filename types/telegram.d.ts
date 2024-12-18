declare global {
    interface Window {
        Telegram: {
            WebApp: {
                ready(): void;
                expand(): void;
                enableVerticalSwipes(): void;
                initData: string;
                MainButton: {
                    show(): void;
                    hide(): void;
                    setText(text: string): void;
                    onClick(fn: () => void): void;
                };
                headerColor: string;
                backgroundColor: string;
                bottomBarColor: string;
                themeParams: {
                    bg_color: string;
                    text_color: string;
                    hint_color: string;
                    button_color: string;
                    button_text_color: string;
                };
            };
        };
    }
}

export { };