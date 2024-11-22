import React from "react";
import { Svg, Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const GoalIcon = ({ isCompleted }: { isCompleted?: boolean }) => {
  return (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <Rect
        width="48"
        height="48"
        rx="24"
        fill={isCompleted ? "#dedddc" : "#FEF5D3"}
      />
      <G clipPath="url(#clip0_2_101)">
        <Path
          d="M25 28.938V31H30V33H18V31H23V28.938C21.0667 28.6942 19.2888 27.7533 18 26.2917C16.7112 24.8302 16 22.9486 16 21V15H32V21C32 22.9486 31.2888 24.8302 30 26.2917C28.7112 27.7533 26.9333 28.6942 25 28.938ZM18 17V21C18 22.5913 18.6321 24.1174 19.7574 25.2426C20.8826 26.3679 22.4087 27 24 27C25.5913 27 27.1174 26.3679 28.2426 25.2426C29.3679 24.1174 30 22.5913 30 21V17H18ZM13 17H15V21H13V17ZM33 17H35V21H33V17Z"
          fill="#403100"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_101">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12 12)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default GoalIcon;
