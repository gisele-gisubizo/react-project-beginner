import React, { useState } from "react";
import { ReactComponent as Sun } from "../assets/sun.svg"; // Adjust path if needed
import { ReactComponent as Moon } from "../assets/moon.svg";

function ThemeToggle() {
  // State to track the theme (true = dark mode, false = light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode"); // Toggle class on body for global styling
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        padding: "10px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginLeft: "40em", // Added margin-left to move it to the right
        
      }}
    >
      {isDarkMode ? <Moon style={{ width: "24px", height: "24px" }} /> : <Sun style={{ width: "24px", height: "24px" }} />}
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeToggle;