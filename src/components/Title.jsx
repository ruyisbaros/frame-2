import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { keepId } from "../redux/CardSlicer";

const Title = ({ val }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.ids);
  const target = useRef(null);
  const isInView = useInView(target, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      dispatch(keepId(val.id));
    }
    if (!isInView && id === val.id) {
      dispatch(keepId(""));
    }
  }, [isInView, val.id, dispatch, id]);

  return (
    <p
      ref={target}
      className={`feature-title text-5xl py-16  font-heading transition-colors duration-150 ${
        isInView ? "text-black" : "text-gray-300"
      }`}
    >
      {val.title}
    </p>
  );
};

export default Title;
