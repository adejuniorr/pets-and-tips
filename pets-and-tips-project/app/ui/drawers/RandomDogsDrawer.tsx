"use client";

import { PetsDrawer } from "./PetsDrawer";

export const RandomDogsDrawer = () => {
  return (
    <PetsDrawer
      initialImage="/images/dog01.jpg"
      fetchUrl="https://api.thedogapi.com/v1/images/search?api_key=live_qkt6a5gMfe6PKehDxRQb0m8vrcYDhigOI2i2ca82FrOrTGQkJ1tx1pbeZd6op18s"
      //fetchUrl="https://dog.ceo/api/breeds/image/random"
      altText="É um doguinho"
      buttonText="Sortear Doguinho"
      downloadFileName="randomDog.jpg"
    />
  );
};
