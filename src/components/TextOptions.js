import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TextOptions({ setIncludeHTML, includeHTML, paragrapgh, inputValue, setInputValue, setTag, tag }) {
  return (
    <div>
      <div className="options">
        <div className="wrapper">
          <div className="optionsContainer">
            <div className="paragraphs">
              <p>Paragraphs 🤷‍♂️ </p>
              <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" min="1" max="10" />
            </div>
            <div className="tags">
              <p>HTML Tags: </p>
              <select defaultValue={tag} onChange={(e) => setTag(e.target.value)}>
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
              <p>Inclue HTML tag? </p>
              <select defaultValue={includeHTML} onChange={(e) => setIncludeHTML(e.target.value)}>
                <option value="Yes">Yes 😻 </option>
                <option value="No">No 😏 </option>
              </select>
            </div>
            <button className="exception2">
              <CopyToClipboard text={paragrapgh.map((sentence) => includeHTML === "Yes" ? `<${tag}>${sentence}</${tag}>` : sentence)}>
                <p className="copy exception">Copy to clipboard📋</p>
              </CopyToClipboard>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextOptions;

// < h3 > Bacon ipsum dolor amet tri - tip turkey ribeye, doner salami chislic pig venison pork chop bacon ham andouille tenderloin buffalo ball tip.Pork loin venison brisket beef ribs, swine andouille ham hock turducken.Doner short loin filet mignon kevin, prosciutto turducken shank hamburger ribeye beef.Short loin turkey short ribs ground round tri - tip pig salami jowl.Ham hock fatback beef ribs leberkas swine, kevin frankfurter meatloaf bresaola chicken shoulder jowl corned beef pastrami.T - bone biltong jowl, jerky doner tongue pork belly shoulder hamburger short ribs kevin flank ribeye. < /h3>
