import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a plumber with over a decade of experience.", "Over 100 happy customers."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: false,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypedComponent;






