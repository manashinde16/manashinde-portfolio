"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  if (!showAnimation) return null;

  return (
    <Lottie animationData={animationPath} loop autoplay style={{ width }} />
  );
};

export default AnimationLottie;
