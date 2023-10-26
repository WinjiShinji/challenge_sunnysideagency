import { createContext, useEffect, useState } from "react";



const ResizeContext = createContext({})

export const DataProvider = ({children}) => {
  const [showNav, setShowNav] = useState(false)
  const [viewportWidth, setViewportWidth] = useState()

  // Window Resize
  useEffect(() => {
    window.addEventListener('resize', () => setViewportWidth(window.innerWidth))
    return () => window.removeEventListener('resize' , setViewportWidth(window.innerWidth))    
  },[])

  return (
    <ResizeContext.Provider value={{
      showNav, setShowNav, viewportWidth
    }}>
      {children}
    </ResizeContext.Provider>
  )
}

export default ResizeContext