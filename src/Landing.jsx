// Components
import Hero from "./components/Hero"
import Card from "./components/Card"
import Testimonials from "./components/Testimonials"
// Images Mobile
import FirstImgSm from "./public/mobile/image-transform.jpg"
import SecondImgSm from "./public/mobile/image-stand-out.jpg"
import ThirdImgSm from "./public/mobile/image-graphic-design.jpg"
import FourthImgSm from "./public/mobile/image-photography.jpg"
import FirstBtmImgSm from "./public/mobile/image-gallery-milkbottles.jpg"
import SecondBtmImgSm from "./public/mobile/image-gallery-orange.jpg"
import ThirdBtmImgSm from "./public/mobile/image-gallery-cone.jpg"
import FourthBtmImgSm from "./public/mobile/image-gallery-sugar-cubes.jpg"
// Images Desktop
import FirstImgLg from "./public/desktop/image-transform.jpg"
import SecondImgLg from "./public/desktop/image-stand-out.jpg"
import ThirdImgLg from "./public/desktop/image-graphic-design.jpg"
import FourthImgLg from "./public/desktop/image-photography.jpg"
import FirstBtmImgLg from "./public/desktop/image-gallery-milkbottles.jpg"
import SecondBtmImgLg from "./public/desktop/image-gallery-orange.jpg"
import ThirdBtmImgLg from "./public/desktop/image-gallery-cone.jpg"
import FourthBtmImgLg from "./public/desktop/image-gallery-sugarcubes.jpg"
// Card Data
import cardData from "./cardData.json"
import { useContext } from "react"
import ResizeContext from "./context/ResizeContext"

const Landing = () => {
  const {viewportWidth} = useContext(ResizeContext)
  const cardInfo = cardData.cardData // Cards

  return  (
    <main>
      <Hero />
      <div className={`${viewportWidth < 1024 ? "" : "grid_container"}`}>
        <img
          className="img grid_item_1" 
          src={viewportWidth < 1024 ? FirstImgSm : FirstImgLg} 
          alt="A boiled egg on a yellow background" 
          aria-label="A boiled egg on a yellow background"  
          loading="lazy"
          style={{ verticalAlign: "bottom"}}
        />
        <Card 
          heading={cardInfo[0].heading}
          body={cardInfo[0].body}
          link="/"
          linkText={cardInfo[0].linkText}
          btnColor="hsl(51, 100%, 49%)"
          />
        <img
          className="img" 
          src={viewportWidth < 1024 ? SecondImgSm : SecondImgLg} 
          alt="An opaque wine glass on a light reddish background" 
          aria-label="An opaque wine glass on a light reddish background"
          loading="lazy"
          style={{ verticalAlign: "bottom"}}
          />
          <Card
            heading={cardInfo[1].heading}
            body={cardInfo[1].body}
            link="/"
            linkText={cardInfo[1].linkText}
            btnColor="hsl(7, 99%, 70%)"
            />
          <div className="cardImg">
            <img 
              src={viewportWidth < 1024 ? ThirdImgSm : ThirdImgLg} 
              alt="Two bright red cherries on a lightly textured pale green background" 
              aria-label="Two bright red cherries on a lightly textured pale green background"
              height="100%"
              width="100%"
            />
          <Card
            heading={cardInfo[2].heading}
            body={cardInfo[2].body}
            textColor="hsl(167, 40%, 24%)"
            />
        </div>
        <div className="cardImg">
          <img 
          src={viewportWidth < 1024 ? FourthImgSm : FourthImgLg} 
          alt="A bright orange on a cool blue background" 
          aria-label="A bright orange on a cool blue background"  
          height="100%"
          width="100%"
          />
          <Card
          heading={cardInfo[3].heading}
          body={cardInfo[3].body}
          textColor="hsl(198, 62%, 26%)"
          />
        </div>
      </div>
      <Testimonials />
      <div className="img_bottom">
        <img 
          src={viewportWidth < 1024 ? FirstBtmImgSm : FirstBtmImgLg} 
          alt="Milk bottles in a row with a blue sky with clouds background" 
          aria-label="Milk bottles in a row with a blue sky with clouds background"
          height="100%"
          width="100%"
          />
        <img 
          src={viewportWidth < 1024 ? SecondBtmImgSm : SecondBtmImgLg} 
          alt="Orange sliced in half on a white saucer, which is on a green plate with an orange background" 
          aria-label="Orange sliced in half on a white saucer, which is on a green plate with an orange background"
          height="100%"
          width="100%"
        />
        <img 
          src={viewportWidth < 1024 ? ThirdBtmImgSm : ThirdBtmImgLg} 
          alt="An empty waffle ice-cream cone on a sky blue background" 
          aria-label="An empty waffle ice-cream cone on a sky blue background"
          height="100%"
          width="100%"
        />
        <img 
          src={viewportWidth < 1024 ? FourthBtmImgSm : FourthBtmImgLg} 
          alt="A wall of white sugar cubes stacked on-top of each other on a light red background" 
          aria-label="A wall of white sugar cubes stacked on-top of each other on a light red background"  
          height="100%"
          width="100%"
        />
      </div>
      
    </main>
  )
}

export default Landing