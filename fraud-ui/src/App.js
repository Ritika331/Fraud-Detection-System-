import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [probability, setProbability] = useState("");

  const handleCheck = async () => {
    try {
      let dataArray = Array(30).fill(0);
      dataArray[29] = Number(amount);

      const response = await fetch("http://localhost:8080/api/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataArray }),
      });

      const data = await response.json();

      setResult(data.decision);
      setProbability((data.fraud_probability * 100).toFixed(2));
    } catch (error) {
      setResult("Error ❌");
      setProbability("");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "100px",
      fontFamily: "Arial"
    }}>
      <h1>💳 Fraud Detection System</h1>

      <input
        type="number"
        placeholder="Enter Transaction Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          width: "300px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <br />

      <button
        onClick={handleCheck}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Check Fraud
      </button>

      <h2 style={{ marginTop: "20px" }}>
        Decision: {result}
      </h2>

      <h3>
        Fraud Probability: {probability}%
      </h3>
    </div>
  );
}

export default App;