import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid positive values for height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let status = "";
    let msgColor = "";

    if (bmiValue < 18.5) {
      status = "Underweight";
      msgColor = "#f4b400";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      status = "Normal weight";
      msgColor = "#0f9d58";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      status = "Overweight";
      msgColor = "#fbbc05";
    } else {
      status = "Obese";
      msgColor = "#db4437";
    }

    setMessage(`Your BMI is ${bmiValue} — ${status}`);
    setColor(msgColor);
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>BMI Calculator</h1>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in cm"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kg"
          style={styles.input}
        />
      </div>

      <button style={styles.button} onClick={calculateBMI}>
        Calculate BMI
      </button>

      {message && <p style={{ ...styles.message, color }}>{message}</p>}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
    width: "400px",
    padding: "40px",
    textAlign: "center",
  },
  title: {
    marginBottom: "25px",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
    fontSize: "30px",
  },
  inputGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "18px",
  },
  input: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    marginTop: "25px",
    padding: "16px 28px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
  message: {
    marginTop: "30px",
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export default BMICalculator;
