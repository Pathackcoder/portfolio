const resumePath = '/assets/resume/resume.pdf';

export default function Contact({ links }) {
  const emailLink = links.find((link) => link.label === 'Email');

  return (
    <section className="section" id="contact">
      <div className="contact-card">
        <div>
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Let&apos;s make something clean and useful.</h2>
          <p className="section__lead section__lead--wide">
            If you have a role, freelance project, or an idea that needs crisp frontend
            execution, I&apos;d be happy to talk.
          </p>

          <div className="contact-card__actions">
            <a className="button button--primary" href={resumePath} download>
              Download Resume
            </a>
            <a className="button button--ghost" href={emailLink?.href || '#'}>
              Email Me
            </a>
          </div>
        </div>

        <div className="contact-card__links">
          {links.map((link) => (
            <a
              className="contact-link"
              href={link.href}
              key={link.label}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noreferrer'}
            >
              <span className="contact-link__label">{link.label}</span>
              <span className="contact-link__value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
