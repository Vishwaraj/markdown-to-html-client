// App.js
import React, { useEffect, useState } from "react";
import HtmlArea from "./components/htmlArea/HtmlArea";
import Editor from "./components/Editor/Editor";

function App() {
  const [userInput, setUserInput] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Create WebSocket connection on component mount
    const connection = new WebSocket("ws://localhost:3001");
    connection.onopen = () => setWs(connection);

    return () => {
      // Cleanup function for WebSocket
      if (ws) ws.close();
    };
  }, []);

  useEffect(() => {
    // Update preview on receiving converted HTML
    if (ws) {
      ws.onmessage = (event) => {
        setMarkdown(event.data);
      };
    }
  }, [ws, userInput]);

  const handleInputChange = async (e) => {
    const { value } = e.target;

    try {
      setUserInput(value);
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(userInput);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App" style={{ padding: "3rem" }}>
      <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          color: "gray",
        }}
      >
        Markdown to HTML
      </h1>
      <Editor handleInputChange={handleInputChange} userInput={userInput} />
      <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          color: "gray",
        }}
      >
        Live Preview
      </h1>
      <HtmlArea markdown={markdown} />
    </div>
  );
}

export default App;
