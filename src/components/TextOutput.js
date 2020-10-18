import React from "react";

function TextOutput({ paragrapgh, includeHTML, tag }) {
  return (
    <div>
      <div className="output">
          {includeHTML !== 'Yes' ?  (
              <p>{paragrapgh.map(sentence => `${sentence}`)}</p>
          ): (
              <p>{paragrapgh.map(sentence => `<${tag}>${sentence}</${tag}>`)}</p>
          )}
      </div>
    </div>
  );
}

export default TextOutput;
