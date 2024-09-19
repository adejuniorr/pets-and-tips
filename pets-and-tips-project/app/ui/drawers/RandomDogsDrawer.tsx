"use client";

import Image from "next/image";
import { useState } from "react";
import dog from "@/public/images/dog01.jpg";
import { MdOutlineFileDownload, MdStar } from "react-icons/md";

export const RandomDogsDrawer = () => {
  const [randomDog, setRandomDog] = useState("");
  const [blobUrl, setBlobUrl] = useState(""); // URL Blob para download das imagens

  const fetchRandomDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      // Fazer uma segunda requisição para obter a imagem como Blob
      const imageResponse = await fetch(data.message);
      const imageBlob = await imageResponse.blob();

      const imageBlobUrl = URL.createObjectURL(imageBlob);
      setBlobUrl(imageBlobUrl);
      setRandomDog(data.message.toString());
    } catch (error) {
      console.error("Error fetching random dog:\n" + error);
    }
  };

  return (
    <div className="bg-foreground w-[400px] h-[500px] rounded-[24px] shadow-xl overflow-hidden">
      <div className="h-[350px] overflow-hidden">
        <Image
          src={randomDog || dog}
          alt="é um doguinho"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative bottom-[80px] left-[100px] bg-white w-[200px] h-[0px]">
        <span className="flex items-center justify-center gap-8">
          <a
            href={blobUrl}
            download="randomDog.jpg"
            className="cursor-pointer rounded-[100%] bg-green-200 shadow-lg text-purple-800 text-[26px] w-[50px] h-[50px] flex items-center justify-center"
          >
            <MdOutlineFileDownload />
          </a>
          <button className="rounded-[100%] bg-green-200 shadow-lg text-purple-800 text-[20px] w-[50px] h-[50px] flex items-center justify-center">
            <MdStar />
          </button>
        </span>
      </div>
      <div className="bg-green-200 px-16 h-[150px] flex flex-col gap-4 items-center justify-center">
        <p className="text-center">
          Clique no botão abaixo para sortear um doguinho aleatório! =)
        </p>

        <button
          className="bg-purple-800 text-white shadow-md px-6 py-3 rounded-[32px]"
          onClick={fetchRandomDog}
        >
          Sortear Doguinho
        </button>
      </div>
    </div>
  );
};
