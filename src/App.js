import React, { useState, useEffect } from "react";
import TextOptions from "./components/TextOptions";
import TextOutput from "./components/TextOutput";

function App() {
  const [paragrapgh, setParagrapgh] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHTML, setIncludeHTML] = useState("Yes");

  useEffect(() => {
    const API_URL = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((inData) => setParagrapgh(inData));
  }, [inputValue]);

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Latin Text Generator</h1>
        </div>
        <TextOptions setIncludeHTML={setIncludeHTML} includeHTML={includeHTML} paragrapgh={paragrapgh} inputValue={inputValue} tag={tag} setInputValue={setInputValue} setTag={setTag} />
      </div>
      <TextOutput paragrapgh={paragrapgh} tag={tag} includeHTML={includeHTML} />
    </>
  );
}

export default App;
