import React, { useState } from "react";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";

function Body() {
  const [state, setState] = useState({
    word: 0,
  });
  const countword = (e) => {
    const count = e.target.value;
    
    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi,"");
        count = count.replace(/[ ]{2,}/gi," ");
        count = count.replace(/\n /,"\n");
        return count.split(' ').length; 
      }
    }
    setState({
      wordCount: countWords(count),
    });
  }

  return (
    <div className="me-auto ms-auto" id="d1">
      <h1 className="pb-1 text-center " id="d3">
        Responsive Paragraph Word Counter
      </h1>
      <div className="me-auto ms-auto">
        <form>
          <textarea
            className="w-100"
            id="t1"
            cols={80}
            rows={10}
            onChange={countword}
          ></textarea>
        </form>
      </div>
      <div className="text-start me-auto ms-auto" id="d2">
        Word Count:<span className="num"> {state.wordCount}</span>
      </div>
    </div>
  );
}

export default Body;
