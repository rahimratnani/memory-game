import React, { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
} from "./assets/index";
import Modal from "./components/Modal";

const shuffle = (arr) => {
  let arrLength = arr.length;
  let newArr = [...arr];

  for (let i = 0; i < arrLength; i++) {
    let currentIndex = i;
    let newIndex = Math.ceil(Math.random() * arrLength) - 1;
    if (newIndex !== currentIndex) {
      let currentItem = newArr[i];
      let newItem = newArr[newIndex];
      newArr[i] = newItem;
      newArr[newIndex] = currentItem;
    } else {
      i--;
      continue;
    }
  }
  return newArr;
};

export default function App() {
  //state
  const [images, setImages] = useState([
    { id: 0, img: img1 },
    { id: 1, img: img2 },
    { id: 2, img: img3 },
    { id: 3, img: img4 },
    { id: 4, img: img5 },
    { id: 5, img: img6 },
    { id: 6, img: img7 },
    { id: 7, img: img8 },
    { id: 8, img: img9 },
    { id: 9, img: img10 },
    { id: 10, img: img11 },
    { id: 11, img: img12 },
  ]);

  const [score, setScore] = useState({ score: 0, topScore: 0 });

  const [clicks, setClicks] = useState([]);

  // functions
  const handleShuffle = () => {
    setImages((prevState) => shuffle(prevState));
  };

  const handleCardClick = (e) => {
    handleShuffle();
    if (clicks.includes(e.target.getAttribute("data-target"))) {
      setClicks([]);

      // set top score
      if (score.score > score.topScore) {
        setScore((prevState) => ({
          ...prevState,
          topScore: prevState.score,
        }));
      }

      setScore((prevState) => ({
        ...prevState,
        score: 0,
      }));
    } else {
      setClicks((prevState) => [
        ...prevState,
        e.target.getAttribute("data-target"),
      ]);
      setScore((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
      }));
    }
  };

  //Effects
  useEffect(() => {
    window.addEventListener("load", handleShuffle);

    return () => window.removeEventListener("load", handleShuffle);
  });

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => card.addEventListener("click", handleCardClick));

    return () =>
      cards.forEach((card) =>
        card.removeEventListener("click", handleCardClick)
      );
  });

  return (
    <div>
      <Modal />
      <Navbar score={score} />
      <Grid images={images} />
    </div>
  );
}
