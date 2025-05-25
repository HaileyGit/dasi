import React from "react";

export default function StarsOverlay() {
  return (
    <svg
      className="w-full h-full absolute left-0 top-0"
      width="100vw"
      height="100vh"
    >
      <circle cx="5%" cy="10%" r="1.5" fill="#fff" fillOpacity="0.7" />
      <circle cx="20%" cy="30%" r="1.2" fill="#fff" fillOpacity="0.5" />
      <circle cx="80%" cy="20%" r="1.3" fill="#fff" fillOpacity="0.6" />
      <circle cx="60%" cy="80%" r="1.1" fill="#fff" fillOpacity="0.5" />
      <circle cx="90%" cy="60%" r="1.4" fill="#fff" fillOpacity="0.7" />
    </svg>
  );
}
