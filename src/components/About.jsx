export default function About({ cards }) {
  return (
    <section className="section" id="about">
      <div className="section__header section__header--stacked">
        <p className="section__eyebrow">About / Hobby</p>
        <h2 className="section__title">Stepping away, but still in the flow...</h2>
        <p className="section__lead section__lead--wide">
          My work has centered on React interfaces, APIs, reusable systems, and full-stack builds. Even outside project work, I naturally drift toward thoughtful UI, sharp logic, and a mix of strategy and rhythm that keeps things interesting.
        </p>
      </div>

      <div className="about__grid">
        {cards.map((card, index) => (
          <article className="about__card" key={card.title}>
            <span className="about__index" aria-hidden="true">
              0{index + 1}
            </span>
            <h3 className="about__title">{card.title}</h3>
            <p className="about__description">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
