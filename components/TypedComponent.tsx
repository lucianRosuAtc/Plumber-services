import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'am a plumber", 'And an Electrician', 'And much more'],
      typeSpeed: 50,
      backSpeed: 50,
        loop: true,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypedComponent;






