import Image from "next/image";
import React from "react";

const EmptyData = ({data}) => {
  return (
    <div style={{display: data ? 'block' : 'none'}}>
      <Image
        src="/assets/images/empty.png"
        width={0}
        height={0}
        loading="lazy"
        className="rounded-full w-90"
        alt="profile"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
      />
      <p class="text-2xl leading-tight font-semibold text-center">Data not found</p>
    </div>
  );
};

export default EmptyData;
