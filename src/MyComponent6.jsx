import React, { useState, useEffect } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("bye");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("hi");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
    console.log("yyyy");
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
}

export default MyComponent;
