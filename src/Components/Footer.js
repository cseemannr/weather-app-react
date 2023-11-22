import React from "react";

export default function Footer() {
  return (
    <div className="container footer">
      <p className="opacity-75 code-link">
        <a
          href="https://github.com/cseemannr/weather-app-react"
          target="_blank"
          className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Camila Ramos
      </p>
    </div>
  );
}
