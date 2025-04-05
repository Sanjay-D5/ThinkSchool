import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { reviews } from "../constents";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {reviews.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          stars={item.stars}
          email={item.email}
          profile={item.profile}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>
  );
}

