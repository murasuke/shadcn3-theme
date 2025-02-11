import { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext, themes } from '@/components/ThemeProvider';

// テーマ変更UI
export default function ThemeSwitcher() {
  // Context経由で現在のThemeと、変更関数を受け取る
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { theme, setTheme } = context;

  return (
    <div className="flex flex-wrap space-x-2">
      {/* ダークモード/ライトモード切り替えボタン */}
      {theme.dark_mode ? (
        <Sun onClick={() => setTheme({ ...theme, dark_mode: false })} />
      ) : (
        <Moon onClick={() => setTheme({ ...theme, dark_mode: true })} />
      )}
      {/* カラーテーマ名の配列を元に切り替えボタンを作成する */}
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme({ ...theme, color: t })}
          className={`px-3 rounded ${
            theme.color === t
              ? 'bg-gray-700 text-white dark:bg-gray-600'
              : 'bg-gray-300 dark:text-gray-600'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
