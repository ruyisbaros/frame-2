import React, { useRef } from "react";
import { useInView } from "framer-motion";
const Title = ({ val }) => {
  const target = useRef(null);
  const isInView = useInView(target, { margin: "-50% 0px -50% 0px" });

  console.log(isInView);
  return (
    <p
      ref={target}
      className={`text-5xl py-16  font-heading transition-colors duration-150 ${
        isInView ? "text-black" : "text-gray-300"
      }`}
    >
      {val.title}
    </p>
  );
};

export default Title;
