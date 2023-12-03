import React from "react";
import Banner from "./components/Banner";
import { features } from "./constants/values";
import Title from "./components/Title";
import Card from "./components/Card";
import SectionThree from "./components/sectionThree";

const App = () => {
  return (
    <div className="w-[100vw] min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <Banner />
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
            <div className="w-full aspect-square bg-gray-100 rounded-2xl">
              <Card />
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
