import React from "react";
import ReactMarkdown from "react-markdown";

function HtmlArea({ markdown }) {
  console.log("from component", typeof markdown);
  return (
    <>
      {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
      <div
        style={{
          borderRadius: "1rem",
          borderWidth: "1rem",
          backgroundColor: "lightgray",
          minHeight: "50vh",
          padding: "1rem",
          wordWrap: "break-word",
        }}
        dangerouslySetInnerHTML={{ __html: markdown }}
      ></div>
    </>
  );
}

export default HtmlArea;
