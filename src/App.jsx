import React from "react";
import Header from "./Component/Header/Header";
import SectionLayout from "./Component/SectionLayout";
import { cards } from "./Utils/Card";
import Cards from "./Component/Cards";
import FullPage from "./Component/FullPage";
import TextScetion from "./Component/TextScetion";
import Footer from "./Component/Footer";
import Zoomin from "./Component/Zoomin";

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
          <div className="video p-8 bg-[#161616] rounded-2xl">
            <iframe
              className="border-none w-full h-[52rem]"
              src="https://www.youtube.com/embed/ER6EO4B7V68?si=HwUgNtM0rzfF20sG"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </SectionLayout>

        <SectionLayout>
          <Zoomin />
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
