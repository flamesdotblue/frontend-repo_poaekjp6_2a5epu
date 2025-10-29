import { BookOpen, Code, Wrench, Shield, Layers } from 'lucide-react';

const features = [
  {
    title: 'Courses',
    desc: 'Structured learning paths across Web Dev, Cyber Security, AI Basics and more.',
    icon: BookOpen,
  },
  {
    title: 'Programming Languages',
    desc: 'Hands‑on lessons for Python, C++, JavaScript and beyond.',
    icon: Code,
  },
  {
    title: 'Tech Information',
    desc: 'Bite‑sized videos on how the internet works, frontend vs backend, and more.',
    icon: Layers,
  },
  {
    title: 'Tools',
    desc: 'Learn Git, GitHub, and modern AI tools used by professionals.',
    icon: Wrench,
  },
  {
    title: 'Secure Access',
    desc: 'Role‑based access for Students, Faculty, and Admins with moderation controls.',
    icon: Shield,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Everything you need to learn</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">A focused set of features designed to take you from beginner to job‑ready.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-2 text-blue-600 dark:text-blue-300">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
