
const Card = ({ 
  heading, body, link, linkText, 
  btnColor, textColor
}) => {
  return (
    <article className="card">
      <h2 style={{ color: `${textColor}`}}>
        {heading}
      </h2>
      <p style={{ color: `${textColor}`}}>
        {body}
      </p>
      <a 
        href={link}
        style={{ backgroundColor : `${btnColor}` }}
      >
        {linkText}
      </a>
    </article>
  )
}

export default Card