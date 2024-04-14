import React from 'react';
import Image from 'next/image';

import img from "@/assests/img/main-img-1.png";

const ImageSlider = ({ height, roundSize }: { height: string; roundSize: string }) => {
  return (
    <div className={`bg-gray-100 rounded-${roundSize} px-3 py-2`}>
        <p>img</p>
    </div>
  )
}

export default ImageSlider