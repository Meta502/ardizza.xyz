import React, { useContext } from "react";

export const scrollContext = React.createContext(0)

export const useScroll = () => {
  return useContext(scrollContext)
}

const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <scrollContext.Provider value={scrollPosition}>
      {children}
    </scrollContext.Provider>
  )
}

export default ScrollProvider
