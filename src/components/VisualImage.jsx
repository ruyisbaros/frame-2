import React from "react";
import { useSelector } from "react-redux";

const VisualImage = ({ val }) => {
  const { fScreen } = useSelector((store) => store.ids);
  return (
    <div
      className={`fixed inset-0  flex items-center transition-opacity justify-center
      ${fScreen === val.id ? "opacity-100" : "opacity-0 pointer-events-none"}
      visual-${val.id}`}
    >
      <div className="max-w-6xl px-4">
        <img src={val.img} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default VisualImage;
