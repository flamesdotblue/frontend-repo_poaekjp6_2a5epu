import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="preview" className="relative">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 text-xs font-semibold">
            <Rocket className="h-3.5 w-3.5" /> Learn • Practice • Excel
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Modern e‑Learning Platform
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-prose">
            Watch curated videos, read notes, and test your knowledge with quizzes — all in one place. Built for students, powered by educators.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#register"
              className="inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              Get Started
            </a>
            <a
              href="#login"
              className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 px-5 py-3 text-sm font-semibold"
            >
              I already have an account
            </a>
          </div>
          <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
            Student • Faculty • Admin roles supported
          </div>
        </div>
        <div className="relative order-1 lg:order-2 h-[340px] sm:h-[420px] md:h-[520px] lg:h-[500px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-gray-950/80" />
        </div>
      </div>
    </section>
  );
}
