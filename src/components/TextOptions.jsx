import React from "react";

function TextOptions({ setIncludeHTML, includeHTML, paragrapgh, inputValue, setInputValue, setTag, tag }) {
  return (
    <div>
      <div className="options">
        <div className="wrapper">
          <div className="optionsContainer">
            <div className="paragraphs">
              <p>Paragraphs 🤷‍♂️ </p>
              <input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text" 
              min="1" 
              max="10" />
            </div>
            <div className="tags">
              <p>HTML Tags: </p>
              <select defaultValue={tag} onChange={(e) => setTag(e.target.value)} >
                <option value="p">&lt; p &gt;</option>
                <option value="h1">&lt; h1 &gt;</option>
                <option value="h2">&lt; h2 &gt;</option>
                <option value="h3">&lt; h3 &gt;</option>
                <option value="h4">&lt; h4 &gt;</option>
                <option value="h5">&lt; h5 &gt;</option>
                <option value="h6">&lt; h6 &gt;</option>
                <option value="span">&lt;span &gt;</option>
              </select>
            </div>

            <div className="include">
              <p>Inclue HTML tag? &#x1F928; </p>
              <select name="" id="">
                <option value="Ye">Yes 😻 </option>
                <option value="No">No 😏 </option>
              </select>
            </div>
            <div className="copy">
              <p>Copy to your clipboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextOptions;
