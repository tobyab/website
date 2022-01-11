import React from "react";
import TextTransition from "react-text-transition";

const words = [
    "full stack web devevloper",
    "designer",
    "hackclubber",
    "ethical hacker",
    "JS enthusiast"
  ];
  
  const App = () => {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        5000
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <h1>
        <TextTransition
          text={ TEXTS[index % TEXTS.length] }
          springConfig={ presets.wobbly }
        />
      </h1>
    );
  };