import React from "react";
import HeroSection from "../Componet/HeroSection/HeroSection";
import Navbar from "../Componet/NavBar/NavBar";
import Center from "../Componet/Center/Center";
import Image from "../Componet/Image/Image";
import Mountain from "../Componet/Mountain/Mountain";
import Image2 from "../Componet/Image2/Image2";
import LowerPart from "../Componet/LowerPart/LowerPart";
import LowerFooter from "../Componet/LowerFooter/LowerFooter";
import News from "../Componet/News/News";
import Footer from "../Componet/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Center />
      <Image />
      <Mountain />
      <Image2 />
      <LowerPart />
      <LowerFooter />
      <News />
      <Footer />
    </div>
  );
}
