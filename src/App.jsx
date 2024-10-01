import React, { useRef } from "react";
import Header from "./Component/Header/Header";
import SectionLayout from "./Component/SectionLayout";
import { cards } from "./Utils/Card";
import Cards from "./Component/Cards";
import FullPage from "./Component/FullPage";
import TextScetion from "./Component/TextScetion";
import Footer from "./Component/Footer";
import Zoomin from "./Component/Zoomin";
import Horizontal from "./Component/Horizontal";
import { motion, useScroll, useTransform } from "framer-motion";

const App = () => {
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"], // Animation start from bottom
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,

    [0.9, 0.8, 0.6, 0],
    [0, 0.8, 0.8, 1]
  );

  return (
    <div className=" ">
      <Header />
      <div className=" min-h-[100vh] w-full">
        <SectionLayout>
          <Horizontal height="40rem" direction={-1000}>
            <div className="cards absolute right-0 grid grid-cols-5 gap-16">
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
          </Horizontal>
        </SectionLayout>
        <FullPage />
        <SectionLayout>
          <Horizontal height="40rem" direction={1000}>
            <div className="cards right-0 grid grid-cols-5 gap-16">
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
          </Horizontal>
        </SectionLayout>
        <SectionLayout>
          <TextScetion />
        </SectionLayout>
        <SectionLayout>
          <motion.div
            ref={videoRef}
            style={{ opacity: opacity, scale: scale }}
            className="video p-8 bg-[#161616] rounded-2xl"
          >
            <iframe
              className="border-none w-full h-[52rem]"
              src="https://www.youtube.com/embed/ER6EO4B7V68?si=HwUgNtM0rzfF20sG"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
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
