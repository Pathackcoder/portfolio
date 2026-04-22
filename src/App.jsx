import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const typedPhrases = [
  "APIs that handle real load.",
  "Databases designed to scale.",
  "Backend logic that actually holds up.",
  "End-to-end systems, not just features.",
  "From schema to UI, fully connected.",
  "Auth, APIs, and data — done right.",
  "for production, not just demos.",
  
]

const skillItems = [
  {
    name: 'HTML',
    tag: 'Markup',
    image: '/assets/images/html.png',
  },
  {
    name: 'CSS',
    tag: 'Styling',
    image: '/assets/images/css.png',
  },
  {
    name: 'JavaScript',
    tag: 'Logic',
    image: '/assets/images/javascript.png',
  },
  {
    name: 'React.js',
    tag: 'UI',
    image: '/assets/images/react.png',
  },
  {
    name: 'Express.js',
    tag: 'Routing',
    image: '/assets/images/express.png',
  },
  {
    name: 'Node.js',
    tag: 'Runtime',
    image: '/assets/images/node.png',
  },
  {
    name: 'MongoDB',
    tag: 'Storage',
    image: '/assets/images/mongo.png',
  },
  {
    name: 'GitHub',
    tag: 'Versioning',
    image: '/assets/images/github.png',
  },
];
const skillItems1 = [
  {
    name: 'Postman',
    tag: 'Testing',
    image: '/assets/images/postman.png',
  },
  {
    name: 'Docker',
    tag: 'Containerization',
    image: '/assets/images/docker.png',
  },
  {
    name: 'MySQL',
    tag: 'Relational',
    image: '/assets/images/sql.png',
  },
  {
    name: 'TailwindCSS',
    tag: 'Utility',
    image: '/assets/images/tailwind.png',
  },
  {
    name: 'Socket.IO',
    tag: 'Realtime',
    image: '/assets/images/socketio.png',
  },

];

const hobbyCards = [
  {
    title: 'Problem Solving',
    description:
      'I like sharpening logic through DSA-style thinking, debugging edge cases, and finding the cleanest route through messy flows.',
  },
  {
    title: 'Chess',
    description:
      'A game that rewards planning, pattern recognition, and long-term thinking.It naturally improves how I approach problems in development.',
  },
  {
    title: 'Guitar',
    description:
      'Still working through bar chords and fingerstyle, trying to get that smooth heartbeat feel in the rhythm.',
  },
];

const contactLinks = [
  {
    label: 'Email',
    value: 'ap315605@gmail.com',
    href: 'mailto:ap315605@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'amit-pathak-2025-du-mca',
    href: 'https://www.linkedin.com/in/amit-pathak-2025-du-mca',
  },
  {
    label: 'GitHub',
    value: 'Pathackcoder',
    href: 'https://github.com/Pathackcoder',
  },
];

const intro =
  "Ever wondered why some apps feel smooth and others fall apart? I usually end up fixing that difference.";

const techPills = ['React.js','Express.js','Node.js','MongoDB','Socket.IO', 'Redis'];

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="page-glow page-glow--one" />
      <div className="page-glow page-glow--two" />

      <header className="topbar">
        <div className="topbar__inner">
          <a className="brand" href="#home">
            Amit Pathak
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <Hero intro={intro} phrases={typedPhrases} techPills={techPills} />
        <Skills skills={skillItems} skills1 = {skillItems1} />
        <About cards={hobbyCards} />
        <Contact links={contactLinks} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

