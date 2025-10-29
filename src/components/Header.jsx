import { useState } from 'react';
import { Menu, X, Sun, Moon, Shield, UserRound } from 'lucide-react';

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="inline-flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Policy', href: '#policy' },
    { label: 'About Us', href: '#about' },
    { label: 'Preview', href: '#preview' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/60 bg-white/80 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
            <Shield className="h-6 w-6" />
            <span className="text-lg">eLearn</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <UserRound className="h-4 w-4" /> Login
            </a>
            <a
              href="#register"
              className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm font-semibold shadow-sm"
            >
              Register
            </a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#login"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                <UserRound className="h-4 w-4" /> Login
              </a>
              <a
                href="#register"
                className="flex-1 inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm font-semibold shadow-sm"
                onClick={() => setOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
