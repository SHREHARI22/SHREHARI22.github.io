import { Experience } from './models';

export const EXPERIENCE: Experience = {
  company: 'Narayana Health (Medha Analytics) — Advanced Analytics & AI',
  location: 'Bangalore, India',
  roles: [
    { title: 'Software Engineer', period: 'May 2025 – Present' },
    { title: 'Associate Software Engineer', period: 'Jul 2023 – May 2025' },
  ],
};

export const ADDITIONAL_WORK = [
  {
    heading: 'Reusable Internal Libraries & Tools',
    bullets: [
      'Built and published two additional Angular libraries: an SSO authentication library (route guard, HTTP interceptor, token lifecycle) supporting Angular 14–19, and a user-feedback library (prefill, field-locking, screenshot capture) adopted across multiple front-end applications.',
      'Built a standalone visual layout-authoring tool (drag/resize grid editor) exporting the JSON layout config consumed by the dashboard rendering engine.',
    ],
  },
  {
    heading: 'AI-Assisted Development & Productivity Optimization',
    bullets: [
      'Used Claude Code as a day-to-day development tool across the stack — feature scaffolding, multi-repo code exploration, debugging, and refactoring across the Angular/FastAPI/Python codebases.',
      'Applied AI-assisted code review and test-writing to speed up delivery on the RBAC engine and dashboard platform while maintaining code quality.',
    ],
  },
];
