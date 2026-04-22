import { useEffect, useState } from 'react';

const avatarPath = '/assets/images/avatar.png';
const resumePath = '/assets/resume/resume.pdf';

function getTypeDelay(text, currentPhrase, isDeleting) {
  if (isDeleting) {
    return 35 + Math.floor(Math.random() * 45);
  }

  const nextCharacter = currentPhrase[text.length];
  const punctuationPause = /[.,]/.test(nextCharacter || '') ? 110 : 0;
  return 70 + Math.floor(Math.random() * 70) + punctuationPause;
}

export default function Hero({ intro, phrases, techPills }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [avatarBroken, setAvatarBroken] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({
    '--rotate-x': '0deg',
    '--rotate-y': '0deg',
  });

  useEffect(() => {
    const glitchTimer = window.setTimeout(() => {
      setIsGlitching(false);
    }, 1600);

    return () => window.clearTimeout(glitchTimer);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const reachedEnd = typedText === currentPhrase;
    const reachedStart = typedText.length === 0;

    let timeoutDelay = getTypeDelay(typedText, currentPhrase, isDeleting);

    if (!isDeleting && reachedEnd) {
      timeoutDelay = 1350;
    }

    if (isDeleting && reachedStart) {
      timeoutDelay = 320;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && reachedEnd) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && reachedStart) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
        return;
      }

      const nextLength = typedText.length + (isDeleting ? -1 : 1);
      setTypedText(currentPhrase.slice(0, nextLength));
    }, timeoutDelay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, phraseIndex, phrases, typedText]);

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const rotateY = ((offsetX - centerX) / centerX) * 5;
    const rotateX = ((centerY - offsetY) / centerY) * 5;

    setTiltStyle({
      '--rotate-x': `${rotateX.toFixed(2)}deg`,
      '--rotate-y': `${rotateY.toFixed(2)}deg`,
    });
  }

  function handleMouseLeave() {
    setTiltStyle({
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
    });
  }

  return (
    <section className="section hero" id="home">
      <div className="hero__copy">
        <p className="section__eyebrow">Hi, I&apos;m Amit Pathak and I do</p>

        {/* Title: smaller font so it fits in 1-2 lines comfortably */}
        <h1 className="hero__title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.15, whiteSpace: 'nowrap' }}>
          Build . Test . Deploy . Scale  
        </h1>

        <div className="hero__typing" aria-live="polite">
          <span className="hero__typing-label">I build</span>
          <span className="hero__typing-text">{typedText}</span>
          <span className="hero__caret" aria-hidden="true" />
        </div>

        <p className="hero__summary">{intro}</p>

        <div className="hero__pills" aria-label="Core technologies">
          {techPills.map((pill) => (
            <span className="pill" key={pill}>
              {pill}
            </span>
          ))}
        </div>

        <div className="hero__actions">
          <a className="button button--primary" href="#contact">
            Let&apos;s Connect
          </a>
          <a className="button button--ghost" href={resumePath} download>
            Download Resume
          </a>
        </div>
      </div>

      {/* Avatar pushed to the far right with marginLeft: auto */}
      <div className="hero__visual" style={{ marginLeft: 'auto' }}>
        <div className="hero__frame">
          

          <div
            className={`hero__avatar-shell `}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
          >
            <div className="hero__avatar-grid" aria-hidden="true" />

            {avatarBroken ? (
              <div className="hero__avatar-fallback" aria-label="Avatar fallback">
                AP
              </div>
            ) : (
              <img
                className="hero__avatar"
                src={avatarPath}
                alt="Cartoon avatar of Amit Pathak"
                onError={() => setAvatarBroken(true)}
              />
            )}

            {/* <div className="hero__badge">React x product thinking</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}