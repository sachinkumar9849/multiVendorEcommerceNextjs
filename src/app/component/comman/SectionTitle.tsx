import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="sectionTitle">
      <p>
        <span>{title}</span>
      </p>
    </div>
  );
};

export default SectionTitle;
