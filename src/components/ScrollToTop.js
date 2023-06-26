import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top">
      {showTopBtn && (
        <div className="top__btn" onClick={goToTop}>
          <i className="fa-solid fa-circle-arrow-up"></i>
        </div>
      )}
    </div>
  );
};
export default ScrollToTop;