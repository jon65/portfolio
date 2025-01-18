import { useState, useEffect } from "react";

// Helper function
function getRandomNumberInRange(min, max, excludedNumber) {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNum === excludedNumber);

  return randomNum;
}

const Typewriter = ({ textList, typingDelay, delDelay, wordDelay = 100 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState(textList[0]);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Track initial load

  useEffect(() => {
    let timeout;

    if (isInitialLoad) {
      // Initial delay of 1.5 seconds
      timeout = setTimeout(() => {
        setIsInitialLoad(false);
      }, 300);
    } else if (isTyping) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) =>
          prevIndex === text.length - 1 ? prevIndex : prevIndex + 1
        );
        if (currentIndex === text.length - 1) {
          setIsTyping(false);
        }
      }, currentIndex === 0 ? 700 : typingDelay);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? prevIndex : prevIndex - 1
        );
        if (currentIndex === 0) {
          setIsTyping(true);
          setText(
            textList[
              getRandomNumberInRange(0, textList.length - 1, textList.indexOf(text))
            ]
          );
        }
      }, currentIndex === text.length - 1 ? wordDelay : delDelay);
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    textList,
    typingDelay,
    delDelay,
    text,
    wordDelay,
    isTyping,
    isInitialLoad,
  ]);

  return (
    <span>
      {currentText}
      {currentIndex === text.length - 1 ? "_" : "|"}
    </span>
  );
};

export default Typewriter;
