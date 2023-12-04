import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import { features, images } from "./constants/values";
import Title from "./components/Title";
import Card from "./components/Card";
import SectionThree from "./components/sectionThree";
import VisualImage from "./components/VisualImage";
import { stagger, useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setRScreen, setScreen } from "./redux/CardSlicer";

const App = () => {
  const dispatch = useDispatch();
  const { id, fScreen, rScreen } = useSelector((store) => store.ids);
  const [visualOpen, setVisualOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (fScreen) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.1, delay: stagger(0.08) },
        ],
        [`.visual-${fScreen}`, { opacity: 1, scale: 1, pointerEvents: "auto" }],
        [
          `.img-${fScreen}`,
          {
            x: "-200px",
            opacity: 0,
            pointerEvents: "auto",
          },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.08) },
        ],
        [
          `.visual-${rScreen}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
        ],
        [
          `.img-${rScreen}`,
          {
            opacity: 1,
            scale: 1,
            x: "0px",

            pointerEvents: "auto",
          },
        ],
      ]);
    }
  }, [fScreen, animate, rScreen]);
  const handleBack = () => {
    dispatch(setScreen(null));
    dispatch(setRScreen(fScreen));
  };
  return (
    <div className="w-[100vw] min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <Banner />
        <div ref={scope}>
          {features.map((val) => (
            <VisualImage key={val.id} val={val} />
          ))}
          <button
            onClick={handleBack}
            className="fixed bottom-6 left-1/2 z-20 -translate-x-1/2"
          >
            Back
          </button>
          <div className="flex items-start w-full gap-20">
            <div className="w-full py-[50vh]">
              <ul>
                {features.map((val) => (
                  <li key={val.id}>
                    <Title val={val} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-screen w-full sticky top-0 flex items-center">
              <div
                className={`img-${id} relative w-full aspect-square bg-gray-100 rounded-2xl`}
              >
                {features.map((img) => (
                  <Card
                    key={img.id}
                    image={img.img}
                    id={img.id}
                    setVisualOpen={setVisualOpen}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <SectionThree />
      </div>
    </div>
  );
};

export default App;
