import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Bileşen ilk yüklendiğinde boyutu al
    
    // Temizlik fonksiyonu
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Sadece bir kere çalışır

  return windowSize;
}

export default useWindowSize;