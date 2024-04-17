import React from "react";

function Editor({ handleInputChange, userInput }) {
  return (
    <div>
      <textarea
        onChange={handleInputChange}
        placeholder="Enter Markdown"
        value={userInput}
        rows={10}
        style={{
          width: "100%",
          borderColor: "gray",
          borderRadius: "1rem",
        }}
      />
    </div>
  );
}

export default Editor;
