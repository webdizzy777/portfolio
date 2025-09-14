import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center py-3">
      <p className="mb-0">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
