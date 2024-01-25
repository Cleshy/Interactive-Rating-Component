import React from "react";

export default function Score({ number }) {
  return (
    <li className="p-5 bg-dark-blue text-light-grey rounded-full text-sm font-bold">
      {number}
    </li>
  );
}
