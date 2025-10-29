export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">eLearn</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">A modern platform to learn from videos, notes, and quizzes.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Resources</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#policy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Policy</a></li>
            <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">About Us</a></li>
            <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Get started</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#login" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Login</a></li>
            <li><a href="#register" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Register</a></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500 dark:text-gray-500">© {new Date().getFullYear()} eLearn. All rights reserved.</div>
    </footer>
  );
}
