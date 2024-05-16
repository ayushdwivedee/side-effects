import React, { useEffect } from 'react';

const ScrollComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
     
      console.log('Document is scrolling');
    };

 
    document.addEventListener('scroll', handleScroll);

    
    return () => {
       
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return <div>Scroll Component</div>;
};

export default ScrollComponent;
