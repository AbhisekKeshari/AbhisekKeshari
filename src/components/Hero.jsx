import profileImg from '../assets/profile_img.jpeg'

export default function Hero() {
  return (
    <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <img
        src={profileImg}
        alt="Profile Image"
        className="profile-img"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #ccc',
          display: 'block',
          margin: '0 auto',
          marginBottom: '1rem',
        }}
      />
      <h2>Hi, I’m Abhisek Keshari</h2>
      <p>
        Aspiring Data Scientist blending engineering, stats & ML to build AI solutions that connect people, ideas, and industries.
      </p>
      <div style={{ marginTop: '1rem' }}>
        <a
          href="https://www.linkedin.com/in/abhikeshari12"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '1rem', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/abhisekkeshari"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
