import Image from "next/image";
import React from "react";
import dog from "@/public/images/dog01.jpg";
import { MdOutlineFileDownload, MdStar } from "react-icons/md";

export const RandomDogsDrawer = () => {
  return (
    <div className="bg-foreground w-[400px] h-[500px] rounded-[24px] shadow-lg overflow-hidden">
      <div className="bg-blue-500 h-[350px] overflow-hidden">
        <Image src={dog} alt="é um doguinho" width={400} />
        <div className="flex items-center justify-center gap-4 rounded-[8px] relative bottom-[130px] left-[100px] bg-white w-[200px] h-[80px]">
          <button className="rounded-[100%] bg-blue-500 w-[50px] h-[50px] flex items-center justify-center text-white">
            <MdOutlineFileDownload />
          </button>
          <button className="rounded-[100%] bg-blue-500 w-[50px] h-[50px] flex items-center justify-center text-white">
            <MdStar />
          </button>
        </div>
      </div>
      <div className="bg-red-500 h-[150px] flex flex-col gap-4 items-center justify-center">
        <p className="text-center">
          Clique no botão abaixo para sortear um doguinho aleatório! =)
        </p>

        <button className="bg-white px-6 py-3 rounded-[32px]">
          Sortear Doguinho
        </button>
      </div>
    </div>
  );
};
