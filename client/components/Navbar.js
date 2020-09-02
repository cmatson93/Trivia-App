import React, { Link } from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#ffffff",
      }}
    >
      <h1>LOGO</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link href='/create'>Create Game</Link>
      </div>
    </div>
  );
};

export default Navbar;
