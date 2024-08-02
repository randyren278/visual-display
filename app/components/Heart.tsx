import React from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 leading-none py-10">
          <p>Randy ❤️ Kayla</p>
          <p className="bg-clip-text text-transparent lg:text-4xl md:text-3xl text-xl drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 leading-none py-10">
            I love you forever
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
