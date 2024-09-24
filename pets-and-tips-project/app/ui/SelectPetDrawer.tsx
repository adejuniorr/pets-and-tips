"use client";

import { RandomCatsDrawer } from "./drawers/RandomCatsDrawer";
import { RandomDogsDrawer } from "./drawers/RandomDogsDrawer";
import { useState } from "react";
import clsx from "clsx";

export const SelectPetDrawer = () => {
  const [petDrawer, setPetDrawer] = useState<string>("dogs");

  return (
    <>
      <div className="h-[85vh] flex items-center justify-center">
        {petDrawer === "dogs" ? <RandomDogsDrawer /> : <RandomCatsDrawer />}
      </div>
      <div className="mx-auto w-fit bg-white rounded-[32px]">
        <span className="flex items-center justify-center gap-4">
          <button
            className={clsx(
              "rounded-[100%] text-purple-800 text-[20px] w-[50px] h-[50px] flex items-center justify-center",
              {
                "bg-green-200": petDrawer === "dogs",
                "bg-white": petDrawer === "cats",
              }
            )}
            onClick={() => setPetDrawer(petDrawer === "dogs" ? "cats" : "dogs")}
          >
            dogs
          </button>
          <button
            className={clsx(
              "rounded-[100%] text-purple-800 text-[20px] w-[50px] h-[50px] flex items-center justify-center",
              {
                "bg-green-200": petDrawer === "cats",
                "bg-white": petDrawer === "dogs",
              }
            )}
            onClick={() => setPetDrawer(petDrawer === "dogs" ? "cats" : "dogs")}
          >
            cats
          </button>
        </span>
      </div>
    </>
  );
};
