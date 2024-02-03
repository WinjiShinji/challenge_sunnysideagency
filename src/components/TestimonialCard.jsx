
const TestimonialCard = ({ src, body, name, title }) => {

  return (
    <section className="testimonial_card">
      <div className="testimonial_img">
        <img 
          src={src} 
          alt={`${name} ${title}`}
          aria-label={`${name} ${title}`}
          height="70"
          width="70"
        />
      </div>
      <p className="test_body">{body}</p>
      <p className="test_name">{name}</p>
      <p className="test_title">{title}</p>
    </section>
  )
}

export default TestimonialCard