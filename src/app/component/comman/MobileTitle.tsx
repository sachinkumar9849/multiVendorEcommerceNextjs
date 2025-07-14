import React from "react";

const MobileTitle = ({ title }: { title: string }) => {
  return (
    <div className="MobileTitle mb-3">
      <p className="text-[#202020] text-[18px] font-semibold">{title}</p>
    </div>
  );
};

export default MobileTitle;
