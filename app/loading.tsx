'use client'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const loader = () => {
  return (
    <div className="preloader-css" id="preloaded">
      <div className="h-[10vh]">
        <DotLottieReact src="preloader.json" loop autoplay />
      </div>
    </div>
  );
};

export default loader;
