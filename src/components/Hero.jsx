import { useContext } from 'react'
import ResizeContext from '../context/ResizeContext'
import heroImgSm from '../public/mobile/image-header.jpg'
import heroImgLg from '../public/desktop/image-header.jpg'

const Hero = () => {
  const { viewportWidth } = useContext(ResizeContext)
  return (
    <div className="hero">
      <div className={viewportWidth < 1024 ? "" : "hero_lg"}>
        <h1>
          We are {viewportWidth < 1024 && <br />}creatives
        </h1>
        <i>
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
        </i>
      </div>
      <img 
        src={viewportWidth < 1024 ? heroImgSm : heroImgLg} 
        alt="An orange slice on sky-blue background" 
        aria-label='An orange slice on sky-blue background'
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default Hero