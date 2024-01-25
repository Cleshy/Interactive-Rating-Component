import React from "react";
import ScoreList from "../Score/ScoreList";
import Score from "../Score/Score";
import Button from "../Button/Button";
import star from "./icon-star.svg";

export default function Card() {
  return (
    <div className="m-6 pt-6 px-6 pb-8 rounded-[15px] bg-gradient-to-b from-card-from to-card-to">
      <img className="p-3 rounded-full bg-dark-blue" src={star} alt="" />
      <h1 className="text-white text-2xl pb-[17px] pt-[16px]">
        How did we do?
      </h1>
      <p className="text-light-grey text-sm leading-normal">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ScoreList>
        <Score number={1} />
        <Score number={2} />
        <Score number={3} />
        <Score number={4} />
        <Score number={5} />
      </ScoreList>
      <Button text="Submit" />
    </div>
  );
}
