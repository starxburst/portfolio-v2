import { useRef } from "react";
import Hello from "./Hello";

const Introduction = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hello/>
    </>
  );
};

export default Introduction