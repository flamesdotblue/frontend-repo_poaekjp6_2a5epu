import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-inter">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <FeaturesGrid />
        {/* Policy & About preview sections */}
        <section id="policy" className="py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold">Policy</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">
              By using this platform, you agree to our terms of service and privacy policy. Data is used to improve your learning experience and is never sold to third parties.
            </p>
          </div>
        </section>
        <section id="about" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">
              We are educators and engineers on a mission to make high‑quality education accessible. Learn with interactive videos, concise notes, and practice quizzes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
