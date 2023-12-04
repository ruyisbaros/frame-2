import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keepImg, setScreen } from "../redux/CardSlicer";

const Card = ({ image, id: ID, setVisualOpen }) => {
  const dispatch = useDispatch();
  const { id, fScreen } = useSelector((store) => store.ids);
  console.log(ID);

  const handleImage = () => {
    setVisualOpen(true);
    dispatch(keepImg(image));
    dispatch(setScreen(ID));
  };
  return (
    <div
      className={` absolute inset-0 w-full h-full  bg-gradient-to-br rounded-2xl flex items-center justify-center transition-opacity duration-75 from-[#f7f0ff] to-[#a78afe]
      ${id === ID ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="w-[90%] h-[90%] rounded-2xl">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-2xl  object-cover transition-all shadow-lg"
        />
      </div>
      <button
        className="absolute z-10 bottom-10 right-10 rounded-xl px-4 bg-[#222] text-white transition-colors hover:bg-black"
        onClick={handleImage}
      >
        Show More
      </button>
    </div>
  );
};

export default Card;
