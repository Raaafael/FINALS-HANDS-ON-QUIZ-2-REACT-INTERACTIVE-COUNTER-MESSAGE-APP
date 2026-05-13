import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="container">
      <div className="card">
              <h1>INTERACTIVE COUNTER <br></br>&<br></br> MESSAGE APP</h1>
              <h4>Rafael metran | BSIT - 2A</h4>

        <h2 className="counter">{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increase
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrease
          </button>

          <button
            onClick={() => {
              setCount(0);
              setMessage("");
            }}
          >
            Reset
          </button>
        </div>

        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p>
          <strong>Your Message:</strong> {message}
        </p>

        {count >= 5 && (
          <h3 className="goal">Goal Reached!</h3>
        )}
      </div>
    </div>
  );
}