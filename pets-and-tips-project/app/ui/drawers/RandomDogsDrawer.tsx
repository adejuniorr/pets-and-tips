"use client";

import Image from "next/image";
import { useState } from "react";
import dog from "@/public/images/dog01.jpg";
import { MdOutlineFileDownload, MdStar } from "react-icons/md";

export const RandomDogsDrawer = () => {
  const [randomDog, setRandomDog] = useState("");

  const fetchRandomDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      setRandomDog(data.message.toString());
      //console.log(data.message.toString());
    } catch (error) {
      console.error("Error fetching random dog:\n" + error);
    }
  };

  return (
    <div className="bg-foreground w-[400px] h-[500px] rounded-[24px] shadow-lg overflow-hidden">
      <div className="h-[350px] overflow-hidden">
        <Image
          src={randomDog || dog}
          alt="é um doguinho"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative bottom-[80px] left-[100px] bg-white w-[180px] h-[0px]">
        <span className="flex items-center justify-center gap-4">
          <button className="rounded-[100%] bg-blue-500 w-[50px] h-[50px] flex items-center justify-center text-white">
            <MdOutlineFileDownload />
          </button>
          <button className="rounded-[100%] bg-blue-500 w-[50px] h-[50px] flex items-center justify-center text-white">
            <MdStar />
          </button>
        </span>
      </div>
      <div className="bg-red-500 h-[150px] flex flex-col gap-4 items-center justify-center">
        <p className="text-center">
          Clique no botão abaixo para sortear um doguinho aleatório! =)
        </p>

        <button
          className="bg-white px-6 py-3 rounded-[32px]"
          onClick={fetchRandomDog}
        >
          Sortear Doguinho
        </button>
      </div>
    </div>
  );
};
