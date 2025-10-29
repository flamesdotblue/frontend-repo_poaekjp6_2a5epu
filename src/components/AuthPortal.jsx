import { useState } from 'react';
import { Shield, UserRound, Mail, Lock, GraduationCap, BriefcaseBusiness, Building2, LogIn, UserPlus } from 'lucide-react';

function RolePicker({ value, onChange }) {
  const roles = [
    { key: 'student', label: 'Student', icon: GraduationCap },
    { key: 'faculty', label: 'Faculty', icon: BriefcaseBusiness },
    { key: 'admin', label: 'Admin', icon: Building2 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {roles.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`flex items-center gap-3 rounded-lg border p-3 text-left transition ${
            value === key
              ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:border-blue-500'
              : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <div>
            <div className="font-semibold">{label}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Continue as {label.toLowerCase()}</div>
          </div>
        </button>
      ))}
    </div>
  );
}

function TextInput({ id, label, type = 'text', icon: Icon, value, onChange, placeholder }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-10 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500`}
        />
      </div>
    </div>
  );
}

function Section({ id, title, subtitle, children, cta }) {
  return (
    <section id={id} className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        {subtitle && <p className="-mt-3 mb-6 text-gray-600 dark:text-gray-300">{subtitle}</p>}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          {children}
        </div>
        {cta}
      </div>
    </section>
  );
}

export default function AuthPortal() {
  // Shared state for role and basic fields (purely client-side demo)
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToDashboard = (pickedRole) => {
    const r = pickedRole || role;
    localStorage.setItem('role', r);
    const hash = r === 'student' ? '#student' : r === 'faculty' ? '#faculty' : '#admin';
    window.location.hash = hash;
    // Small timeout to ensure hash navigation completes before scrolling
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return (
    <div>
      {/* Login Section */}
      <Section
        id="login"
        title="Login"
        subtitle="Access your personalized dashboard by logging in and selecting your role."
        cta={
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
            New here? <a href="#register" className="text-blue-600 dark:text-blue-400 font-semibold">Create an account</a>
          </div>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <RolePicker value={role} onChange={setRole} />
          </div>
          <div className="space-y-4">
            <TextInput id="login-email" label="Email" type="email" icon={Mail} value={email} onChange={setEmail} placeholder="you@example.com" />
            <TextInput id="login-password" label="Password" type="password" icon={Lock} value={password} onChange={setPassword} placeholder="••••••••" />
            <button
              onClick={() => goToDashboard()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold shadow-sm"
            >
              <LogIn className="h-4 w-4" /> Continue to Dashboard
            </button>
            <div className="text-xs text-gray-500">This is a demo flow with client-side navigation only.</div>
          </div>
        </div>
      </Section>

      {/* Register Section */}
      <Section
        id="register"
        title="Register"
        subtitle="Create your account and choose your role to get the right tools and content."
        cta={
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
            Already have an account? <a href="#login" className="text-blue-600 dark:text-blue-400 font-semibold">Log in</a>
          </div>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <TextInput id="register-name" label="Full name" icon={UserRound} value={name} onChange={setName} placeholder="Jane Doe" />
            <TextInput id="register-email" label="Email" type="email" icon={Mail} value={email} onChange={setEmail} placeholder="you@example.com" />
            <TextInput id="register-password" label="Password" type="password" icon={Lock} value={password} onChange={setPassword} placeholder="Create a strong password" />
          </div>
          <div className="space-y-4">
            <RolePicker value={role} onChange={setRole} />
            <button
              onClick={() => goToDashboard()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-sm"
            >
              <UserPlus className="h-4 w-4" /> Create account and Continue
            </button>
            <div className="text-xs text-gray-500">No data is sent to a server in this demo.</div>
          </div>
        </div>
      </Section>

      {/* Dashboards */}
      <Section id="student" title="Student Dashboard">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Your Courses</div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              <li>Intro to Programming</li>
              <li>Data Structures</li>
              <li>Web Development Basics</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Upcoming Tasks</div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              <li>Quiz: Functions and Arrays</li>
              <li>Assignment: Build a Todo App</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Quick Actions</div>
            <div className="flex flex-wrap gap-2">
              <a href="#preview" className="px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">Explore Courses</a>
              <a href="#login" className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Switch Account</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faculty" title="Faculty Dashboard">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Manage Classes</div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              <li>Create new course modules</li>
              <li>Upload lecture materials</li>
              <li>Review student submissions</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Announcements</div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              <li>Midterm schedule published</li>
              <li>Office hours updated</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Quick Actions</div>
            <div className="flex flex-wrap gap-2">
              <a href="#preview" className="px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">Create Course</a>
              <a href="#login" className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Switch Account</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="admin" title="Admin Dashboard">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Platform Overview</div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              <li>Users: 1,245</li>
              <li>Active Courses: 78</li>
              <li>Pending Approvals: 6</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Moderation</div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
              <li>Review reports</li>
              <li>Manage roles and permissions</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="font-semibold mb-2">Quick Actions</div>
            <div className="flex flex-wrap gap-2">
              <a href="#preview" className="px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">View Analytics</a>
              <a href="#login" className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Switch Account</a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
