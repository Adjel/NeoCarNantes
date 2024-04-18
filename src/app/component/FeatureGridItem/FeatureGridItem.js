import React from "react";
import Features from "../Features/Features";
import Decoration from "../Decoration/Decoration";

export default function FeatureGridItem({ title, content }) {
  return (
    <>
      <FeatureTitle>{title}</FeatureTitle>
      <Decoration />
      <FeatureContent>{content}</FeatureContent>
    </>
  );
}
