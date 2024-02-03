// Images
import imgTest1 from '../public/image-emily.jpg'
import imgTest2 from '../public/image-thomas.jpg'
import imgTest3 from '../public/image-jennie.jpg'
// Card Data
import cardData from '../cardData.json'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const cardTest = cardData.testData // Testimonials
  return (
    <article className="testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonials_container">
        <TestimonialCard 
          src={imgTest1}
          body={cardTest[0].body}
          name={cardTest[0].name}
          title={cardTest[0].title}
          />
        <TestimonialCard 
          src={imgTest2}
          body={cardTest[1].body}
          name={cardTest[1].name}
          title={cardTest[1].title}
          />
        <TestimonialCard 
          src={imgTest3}
          body={cardTest[2].body}
          name={cardTest[2].name}
          title={cardTest[2].title}
          />
      </div>
    </article>
  )
}

export default Testimonials