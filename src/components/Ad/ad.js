import './ad.css'
import React from 'react'

const sources = ["https://m.media-amazon.com/images/I/615lJKVXDpL._AC_UL480_FMwebp_QL65_.jpg",
 "https://m.media-amazon.com/images/I/718X1VDjUkL._AC_UL480_FMwebp_QL65_.jpg",
  "https://m.media-amazon.com/images/I/71eLtutgfQS._AC_UL480_FMwebp_QL65_.jpg"];
const delay = 2500;

const Slideshow = function() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sources.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sources.map((source, index) => (
          <img
            className="slide"
            key={index}
            src={ source }
          ></img>
        ))}
      </div>

      <div className="slideshowDots">
        {sources.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow