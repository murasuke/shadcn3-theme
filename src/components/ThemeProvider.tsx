import { createContext, useEffect, useState } from 'react';

// カラーテーマ
export const themes = ['mono', 'blue'] as const;

// テーマ定義
type Theme = {
  dark_mode: boolean; // ダークモード
  color: (typeof themes)[number]; // カラーテーマ名
};

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Contextを作成
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

/**
 * テーマ切り替えのためのProvider
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // ブラウザに保存したテーマを復元
    const defaultTheme: Theme = { dark_mode: false, color: 'mono' };
    const item = localStorage.getItem('shadcn-theme');
    return item ? JSON.parse(item) : defaultTheme;
  });

  useEffect(() => {
    // <html>のclassに'dark'をセットすることでダークモードのスタイルが適用される
    // (tailwind.config.js で「darkMode: ['class']」を指定しておく)
    document.documentElement.classList.remove('dark');
    if (theme.dark_mode) {
      document.documentElement.classList.add('dark');
    }

    // テーマカラーの選択
    // <html>要素に「data-theme="<テーマカラー名>"」を追加する
    // (index.cssのセレクタも合わせて変更すること)
    document.documentElement.setAttribute('data-theme', theme.color);

    // テーマをブラウザに保存
    localStorage.setItem('shadcn-theme', JSON.stringify(theme));
  }, [theme]);

  // Provider配下のコンポーネントでは、Context経由で現在選択中のテーマ(theme)と、その変更関数(setTheme())を受け取ることができる
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
