import React from "react";
import { useParams } from "react-router";

export default function Receipe({ taste }) {
  const {receipeid}= useParams()
  return (
    <div>
      <h1>{receipeid}</h1>
    </div>
  );
}
