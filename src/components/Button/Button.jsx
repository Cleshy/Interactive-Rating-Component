import React from "react";

export default function Button({ text }) {
  return (
    <button className="w-full bg-primary p-3 rounded-full text-white uppercase text-sm tracking-[1.87px] font-bold">
      {text}
    </button>
  );
}
