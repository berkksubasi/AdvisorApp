import React from "react";
import { Animated, Dimensions } from "react-native";

interface StarProps {
  size: number;
  color: string;
  style?: any;
  animatedValue: Animated.Value;
}

const Star: React.FC<StarProps> = ({ size, color, style, animatedValue }) => {
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get("window").height],
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get("window").width],
  });

  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: size / 2,
        position: "absolute",
        transform: [{ translateY }, { translateX }],
        ...style,
      }}
    />
  );
};

export default Star;
