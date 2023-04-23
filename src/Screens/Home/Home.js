import React, { useRef } from "react";
import './Home.scss'

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const handleSection1Click = (reference) => {
    reference.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-snap-container">
      <div className="scroll-snap">
        <div className="section bg-primary" ref={section1Ref}><h1 onClick={()=>handleSection1Click(section2Ref)}>Section 1</h1></div>
        <div className="section bg-danger" ref={section2Ref}><h1 onClick={()=>handleSection1Click(section3Ref)}>Section 2</h1></div>
        <div className="section bg-warning" ref={section3Ref}><h1 onClick={()=>handleSection1Click(section1Ref)}>Section 3</h1></div>
      </div>
    </div>
  );
}
