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



// import React, { useEffect, useState } from 'react';

// const TextTypingEffect = () => {
//   const [typedText, setTypedText] = useState('');
//   const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti, asperiores facilis.";

//   useEffect(() => {
//     let i = 0;
//     const timer = setInterval(() => {
//       setTypedText((prevTypedText) => prevTypedText + text[i]);
//       i++;
//       if (i === text.length) {
//         clearInterval(timer);
//       }
//     }, 50);
//     return () => clearInterval(timer); // cleanup on unmount
//   }, []);

//   return <div>{typedText}</div>;
// };

// export default TextTypingEffect;