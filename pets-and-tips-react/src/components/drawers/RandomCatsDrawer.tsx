"use client";

import { PetsDrawer } from "./PetsDrawer";

export const RandomCatsDrawer = () => {
  return (
    <PetsDrawer
      initialImage="/images/cat01.jpg"
      fetchUrl="https://api.thecatapi.com/v1/images/search?api_key=live_qkt6a5gMfe6PKehDxRQb0m8vrcYDhigOI2i2ca82FrOrTGQkJ1tx1pbeZd6op18s"
      altText="É um gatinho"
      buttonText="Sortear Gatinho"
      downloadFileName="randomCat.jpg"
    />
  );
};
