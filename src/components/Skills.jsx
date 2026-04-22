import { useState } from 'react';

function SkillCard({ skill }) {
  const [imageBroken, setImageBroken] = useState(false);
  const fallbackText = skill.name.length > 2 ? skill.name.slice(0, 2) : skill.name;

  return (
    <article className="skill-card">
      {imageBroken ? (
        <div className="skill-card__fallback" aria-hidden="true">
          {fallbackText}
        </div>
      ) : (
        <img
          className="skill-card__icon"
          src={skill.image}
          alt={`${skill.name} icon`}
          onError={() => setImageBroken(true)}
        />
      )}

      <div>
        <p className="skill-card__tag">{skill.tag}</p>
        <h3 className="skill-card__name">{skill.name}</h3>
      </div>
    </article>
  );
}

export default function Skills({ skills ,skills1}) {
  return (
    <section className="section" id="skills">
      <div className="section__header">
        <div>
          <p className="section__eyebrow">Skills</p>
          <h2 className="section__title">Core SKILLS I rely on the most.</h2>
        </div>
        <p className="section__lead">
          Slow, clean, and always moving. Just how a good skills strip should feel.
        </p>
      </div>

      <div className="skills__marquee">
        <div className="skills__track">
          {[0, 1].map((groupIndex) => (
            <div
              className="skills__group"
              key={groupIndex}
              aria-hidden={groupIndex === 1}
            >
              {skills.map((skill) => (
                <SkillCard key={`${groupIndex}-${skill.name}`} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="skills__marquee">
        <div className="skills__track_reverse">
          {[0, 1].map((groupIndex) => (
            <div
              className="skills__group"
              key={groupIndex}
              aria-hidden={groupIndex === 1}
            >
              {skills1.map((skill) => (
                <SkillCard key={`${groupIndex}-${skill.name}`} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

