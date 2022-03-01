import { useState } from "react";
import PropTypes from "prop-types";


function Carousel({images}) {
  const [idx, setIdx] = useState(0);

  const next = () => {
    console.log(idx);
    setIdx((idx==images.length-1 ? 0 : (idx + 1)));
  };
  const previous = () => {
    console.log(idx);
    setIdx((idx==0 ? images.length-1 : (idx - 1)));
  };

  return (
    <div className="mx-auto flex flex-row items-center">
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={previous}
      >
        {"<"}
      </button>
      <img
        className="mx-auto rounded-lg"
        alt=""
        style={{
          width: images[idx][1],
          height: images[idx][2],
        }}
        src={images[idx][0]}
      />
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={next}
      >
        {">"}
      </button>
    </div>
  );
}

export default Carousel;

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};