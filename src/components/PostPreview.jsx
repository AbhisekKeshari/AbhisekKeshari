export default function PostPreview({ title, date, summary }) {
  return (
    <article style={{ marginBottom: '2rem' }}>
      <h3>{title}</h3>
      <small>{new Date(date).toLocaleDateString()}</small>
      <p>{summary}</p>
    </article>
  )
}
