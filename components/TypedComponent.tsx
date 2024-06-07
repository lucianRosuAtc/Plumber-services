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
//   const [textIndex, setTextIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const texts = [" I'am a plumber", ' And an Electrician', ' And much more'];

//   useEffect(() => {
//     let i = typedText.length;
//     const timer = setInterval(() => {
//       if (isDeleting) {
//         setTypedText((prevTypedText) => prevTypedText.slice(0, -1));
//         i--;
//         if (i === 0) {
//           setIsDeleting(false);
//           setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length);
//         }
//       } else {
//         setTypedText((prevTypedText) => prevTypedText + (texts[textIndex][i] || ''));
//         if (i < texts[textIndex].length) {
//           i++;
//         }
//         if (i === texts[textIndex].length) {
//           setIsDeleting(true);
//         }
//       }
//     }, 200);
//     return () => clearInterval(timer); // cleanup on unmount
//   }, [textIndex, isDeleting]);

//   return <div className='h-6 ml-6'>{typedText}</div>;
// };

// export default TextTypingEffect;