"use client";

import { useState } from "react";
import "./page.css";
import { FiArrowDown } from "react-icons/fi";
import Image from "next/image";
import { Header } from "./components/exportComponents";

const page = () => {
  // initial player name data
  const [data, setData] = useState({
    name: "",
  });

  // submitted player name from setData
  const [player, setPlayer] = useState({
    name: "",
  });

  // scores
  let [pscore, setPscore] = useState(0);
  let [cscore, setCscore] = useState(0);

  // score that ends the game
  const endScore = 10;

  // rounds won for each opponent
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  // function that watches both scores and determines who wins
  const gameEnd = () => {
    let endMessage = document.getElementById("winningText");

    if (pscore == endScore) {
      endMessage.innerText = `${player.name} wins the round!`;
      setPscore((pscore = 0));
      setCscore((cscore = 0));
      setPlayerWins(playerWins + 1);
      setTimeout(() => {
        endMessage.innerText = `First to ${endScore} wins, state your name before playing.`;
      }, 2000);
    } else if (cscore == endScore) {
      endMessage.innerText = "The Computer wins the round!";
      setPscore((pscore = 0));
      setCscore((cscore = 0));
      setComputerWins(computerWins + 1);
      setTimeout(() => {
        endMessage.innerText = `First to ${endScore} wins, state your name before playing.`;
      }, 2000);
    }
  };
  // game ending function being run
  gameEnd();

  // handling the changes from the input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handling the submit from the form
  const handleSubmit = (e) => {
    e.preventDefault();

    setPlayer(() => ({
      name: data.name,
    }));
  };

  // when player chooses rock
  function choiceRock() {
    // grabbing ids from jsx
    const playerAnimate = document.getElementById("playerScore");
    const computerAnimate = document.getElementById("computerScore");
    const compChoice = document.getElementById("computerChoice");

    // choosing a random string
    const choices = ["rock", "paper", "scissor"];
    const choiceLoop = choices[Math.floor(Math.random() * choices.length)];

    // if statement
    if (choiceLoop === "scissor") {
      setPscore(pscore + 1);
      compChoice.innerText = choiceLoop;
      playerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        playerAnimate.classList.remove("shake-vertical");
      }, 200);
    } else if (choiceLoop == "paper") {
      setCscore(cscore + 1);
      compChoice.innerText = choiceLoop;
      computerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        computerAnimate.classList.remove("shake-vertical");
      }, 200);
    } else if (choiceLoop == "rock") {
      compChoice.innerText = choiceLoop;
      playerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        playerAnimate.classList.remove("shake-vertical");
      }, 200);
      computerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        computerAnimate.classList.remove("shake-vertical");
      }, 200);
    }
  }

  // when player chooses paper
  function choicePaper() {
    // grabbing ids from jsx
    const playerAnimate = document.getElementById("playerScore");
    const computerAnimate = document.getElementById("computerScore");
    const compChoice = document.getElementById("computerChoice");

    // choosing a random string
    const choices = ["rock", "paper", "scissor"];
    const choiceLoop = choices[Math.floor(Math.random() * choices.length)];

    // if statement
    if (choiceLoop === "rock") {
      setPscore(pscore + 1);
      compChoice.innerText = choiceLoop;
      playerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        playerAnimate.classList.remove("shake-vertical");
      }, 200);
    } else if (choiceLoop == "scissor") {
      setCscore(cscore + 1);
      compChoice.innerText = choiceLoop;
      computerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        computerAnimate.classList.remove("shake-vertical");
      }, 200);
    } else if (choiceLoop == "paper") {
      compChoice.innerText = choiceLoop;
      playerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        playerAnimate.classList.remove("shake-vertical");
      }, 200);
      computerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        computerAnimate.classList.remove("shake-vertical");
      }, 200);
    }
  }

  // when player chooses scissor
  function choiceScissor() {
    // grabbing ids from jsx
    const playerAnimate = document.getElementById("playerScore");
    const computerAnimate = document.getElementById("computerScore");
    const compChoice = document.getElementById("computerChoice");

    // choosing a random string
    const choices = ["rock", "paper", "scissor"];
    const choiceLoop = choices[Math.floor(Math.random() * choices.length)];

    // if statement
    if (choiceLoop === "paper") {
      setPscore(pscore + 1);
      compChoice.innerText = choiceLoop;
      playerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        playerAnimate.classList.remove("shake-vertical");
      }, 200);
    } else if (choiceLoop == "rock") {
      setCscore(cscore + 1);
      compChoice.innerText = choiceLoop;
      computerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        computerAnimate.classList.remove("shake-vertical");
      }, 200);
    } else if (choiceLoop == "scissor") {
      compChoice.innerText = choiceLoop;
      playerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        playerAnimate.classList.remove("shake-vertical");
      }, 200);
      computerAnimate.classList.add("shake-vertical");
      setTimeout(function () {
        computerAnimate.classList.remove("shake-vertical");
      }, 200);
    }
  }

  // start of JSX
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* form section */}
      <div className="flex justify-center items-center  mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-2"
        >
          <label htmlFor="name" className="font-primary uppercase">
            Enter Your Name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            placeholder="name"
            className="border border-black p-1 rounded-md font-primary remove-focus"
          />

          <button
            type="submit"
            className="border border-black rounded-sm p-1 font-primary hover:bg-slate-300  ease-in-out duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* winning text section */}
      <div
        id="winningText"
        className="w-full h-40 flex justify-center items-center font-primary text-4xl"
      >
        First to {endScore} wins, state your name before playing.
      </div>

      {/* players section */}
      <div className="flex justify-evenly items-center text-2xl h-80 font-mono">
        <div className="flex flex-col items-center">
          <h2
            className={
              player.name != ""
                ? "scale-in-center font-secondary"
                : "font-secondary"
            }
          >
            {player.name}
          </h2>
          <p id="playerScore" className="font-primary">
            {pscore}
          </p>
          <h5 id="playerChoice" className="font-primary">
            <FiArrowDown />
          </h5>
          <p className="font-primary">Round Wins: {playerWins} / 5</p>
        </div>

        <div>
          <h2 className="font-primary">VS</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="scale-in-center font-secondary">Computer Player</h2>
          <p id="computerScore" className="font-primary">
            {cscore}
          </p>
          <p className="text-xl font-primary">Choice:</p>
          <p id="computerChoice" className="text-sm font-primary">
            -
          </p>
          <p className="font-primary">Round Wins: {computerWins} / 5</p>
        </div>
      </div>

      {/* choosing your item section */}
      <section
        className={player.name != "" ? "visible scale-in-center" : "hidden"}
      >
        <h2 className="text-center font-primary uppercase text-3xl">
          Make A Choice
        </h2>
        <div className="mt-20 mb-20 flex justify-evenly font-mono">
          <div className="itemContainer rock" onPointerDown={choiceRock}>
            <Image
              src={"/rock.jpg"}
              className="choiceImg"
              fill={true}
              quality={50}
              alt="image of rock for rock choice"
            />
          </div>
          <div className="itemContainer paper" onPointerDown={choicePaper}>
            <Image
              src={"/paper.jpg"}
              className="choiceImg"
              fill={true}
              quality={50}
              alt="image of paper for paper choice"
            />
          </div>
          <div className="itemContainer scissor" onPointerDown={choiceScissor}>
            <Image
              src={"/scissors.jpg"}
              className="choiceImg"
              fill={true}
              quality={50}
              alt="image of scissors for scissors choice"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
