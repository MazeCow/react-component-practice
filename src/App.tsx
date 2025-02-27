import { useState } from "react";
import Carousel from "./components/Carousel";
import Heading from "./components/Heading";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ImageSet } from "./components/Carousel";

function App() {
  const natureImgs: ImageSet = {
    key: "nature",
    imgs: [
      "./assets/images/nature/1.jpg",
      "./assets/images/nature/2.jpg",
      "./assets/images/nature/3.jpg",
      "./assets/images/nature/4.jpg",
      "./assets/images/nature/5.jpg",
    ],
    alts: ["1", "2", "3"],
  };
  const cityImgs: ImageSet = {
    key: "city",
    imgs: [
      "/assets/images/city/1.jpg",
      "/assets/images/city/2.jpg",
      "/assets/images/city/3.jpg",
      "/assets/images/city/4.jpg",
      "/assets/images/city/5.jpg",
    ],
    alts: ["1", "2", "3"],
  };

  const [selectedImageSet, setSelectedImageSet] =
    useState<ImageSet>(natureImgs);

  const [galleryType, setGalleryType] = useState<string>("Nature");

  const updateGalleryType = (type: string) => {
    if (type == "nature") {
      setGalleryType("Nature");
      setSelectedImageSet(natureImgs);
    } else if (type == "city") {
      setGalleryType("City");
      setSelectedImageSet(cityImgs);
    }
  };

  return (
    <>
      <Heading text={`${galleryType} Gallery`}></Heading>
      <Carousel
        imgs={selectedImageSet.imgs}
        alts={selectedImageSet.alts}
      ></Carousel>
      <ThemeSwitcher
        clickHandler={updateGalleryType}
        galleryType={selectedImageSet.key!}
      ></ThemeSwitcher>
    </>
  );
}

export default App;
