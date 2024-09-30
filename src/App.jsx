import React from "react";
import Header from "./Component/Header/Header";
import SectionLayout from "./Component/SectionLayout";
import { cards } from "./Utils/Card";
import Cards from "./Component/Cards";
import FullPage from "./Component/FullPage";
import TextScetion from "./Component/TextScetion";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className=" bdr">
      <Header />
      <div className=" min-h-[100vh] w-full">
        <SectionLayout>
          <div className="cards  grid grid-cols-5 gap-16">
            {cards.map((card, index) => {
              return (
                <Cards
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>
        <FullPage />
        <SectionLayout>
          <div className="cards  grid grid-cols-5 gap-16">
            {cards.map((card, index) => {
              return (
                <Cards
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </SectionLayout>
        <SectionLayout>
          <TextScetion />
        </SectionLayout>
        <SectionLayout>
          <motion.div
            className="video"
            ref={video}
            style={{
              opacity,
              scale,
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/ER6EO4B7V68?si=HwUgNtM0rzfF20sG"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </motion.div>
        </SectionLayout>
        <SectionLayout>
          <TextScetion />
        </SectionLayout>
        <Footer />
      </div>
    </div>
  );
};

export default App;
