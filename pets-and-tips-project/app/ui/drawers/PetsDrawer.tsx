"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineFileDownload, MdStar } from "react-icons/md";
import { PrimaryButton } from "../PrimaryButton";
import { IconButton } from "../IconButton";

interface PetsDrawerProps {
  initialImage: string;
  fetchUrl: string;
  altText: string;
  buttonText: string;
  downloadFileName: string;
}

export const PetsDrawer = ({
  initialImage,
  fetchUrl,
  altText,
  buttonText,
  downloadFileName,
}: PetsDrawerProps) => {
  const [imgUrl, setImgUrl] = useState<string>(initialImage);
  const [isLoadingImg, setIsLoadingImg] = useState<boolean>(false);

  const fetchRandomPet = async () => {
    setIsLoadingImg(true);

    try {
      const response = await fetch(fetchUrl);
      const [data] = await response.json();

      setImgUrl(data.url);

      setIsLoadingImg(false);
    } catch (error) {
      setIsLoadingImg(false);
      console.error("Error fetching random pet:\n" + error);
    }
  };

  return (
    <div className="bg-foreground sm:w-[400px] w-[300px] h-[500px] rounded-[24px] shadow-xl overflow-hidden flex flex-col">
      <div className="h-[350px] overflow-hidden bg-purple-800 flex items-center justify-center">
        {isLoadingImg ? (
          <Image
            src="/green-loadingGif.gif"
            unoptimized
            alt="Carregando pet"
            width={0}
            height={0}
            className="object-contain w-[150px] h-[150px]"
          />
        ) : (
          <Image
            src={imgUrl}
            alt={altText}
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="relative bottom-[80px] bg-white h-0">
        <span className="flex items-center justify-center gap-8">
          <IconButton
            icon={<MdOutlineFileDownload />}
            isDownloadLink
            href={imgUrl}
            downloadFileName={downloadFileName}
          />
          <IconButton icon={<MdStar />} />
        </span>
      </div>
      <div className="bg-green-200 px-16 py-2 sm:h-[150px] h-[180px] flex flex-col gap-4 items-center justify-center">
        <p className="text-center">
          Clique no botão abaixo para sortear um pet aleatório! =)
        </p>

        <PrimaryButton handleOnClick={fetchRandomPet} text={buttonText} />
      </div>
    </div>
  );
};
