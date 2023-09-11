"use client";
import Image from "next/image";
import { useRef } from "react";

export const CursorTrailer = () => {
  const ref = useRef(null);
  const body = useRef(null);

  const manageMouseMove = (e: MouseEvent) => {
    const bodyBound = body.current.getBoundingClientRect();

    const { clientX, clientY } = e;
    const x = clientX - bodyBound.x;
    const y = clientY - bodyBound.y;
    ref.current.style.top = y + "px";
    ref.current.style.left = x + "px";
    draw(x, y);
    console.log(ref.current.value);
  };

  const draw = (x: number, y: number) => {
    const div = document.createElement("div");
    div.classList.add("circle");
    div.style.top = y + "px";
    div.style.left = x + "px";

    div.style.backgroundColor = "#ffffff";
    console.log(div.style);
    body.current.append(div);
    if (body.current.childNodes.length > 10) {
      erase();
    } else {
      setTimeout(() => {
        erase();
      }, 1000);
    }
  };

  const erase = () => {
    body.current.removeChild(body.current.childNodes[1]);
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div
        ref={body}
        className="relative overflow-hidden bg-neutral-700 h-[50%] w-[50%]"
        onMouseMove={(e: MouseEvent) => manageMouseMove(e)}
      >
        <div
          ref={ref}
          className=" absolute z-10 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="h-20 bg-teal-500  w-20 rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};
