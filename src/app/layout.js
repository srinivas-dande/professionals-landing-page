import './globals.css';

export const metadata = {
  title: 'AI & Machine Learning Program for Working Professionals | Dandes Academy',
  description:
    'Upskill in AI & ML without quitting your job. A structured 12-month program for working professionals to build real-world AI projects, transition into high-growth roles, and unlock higher-paying opportunities.',
  keywords: [
    'AI ML course for working professionals',
    'machine learning upskilling program',
    'AI career transition for software engineers',
    'AI ML program India',
    'upskill in AI while working',
    'machine learning for experienced professionals',
    'AI course for tech leads',
    'MLOps training professionals',
    'AI career switch program',
    'Dandes Academy professionals',
    'deep learning course working professionals',
    'AI ML program for engineers India',
    'career transition to AI ML',
    'machine learning certification professionals 2026',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}