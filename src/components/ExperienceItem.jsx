import styles from './ExperienceItem.module.css';

export default function ExperienceItem({ company, logo, dates, points, bgClass }) {
  return (
    <article
      className={styles.experienceItem}
      style={{
        background: bgClass || '#f9f9f9',
        display: 'flex',
        alignItems: 'flex-start',
        padding: '1rem',
      }}
    >
      <img
        src={logo}
        alt={`${company} logo`}
        className={styles.experienceItemLogo}
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'contain',
          marginRight: '1rem',
        }}
      />
      <div className={styles.experienceItemContent}>
        <h3>{company}</h3>
        <small>{dates}</small>
        <ul>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>

  );
} 

