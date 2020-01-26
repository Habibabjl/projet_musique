import React, { useState } from "react";
import ReactLoading from "react-loading";
import "../styles/loader.css";

const useLoader = props => {
  const [visible, setVisible] = useState(false);

  const showLoader = () => setVisible(true);
  const hideLoader = () => setVisible(false);
  const loader = visible ? (
    <div className="loader-container">
      <ReactLoading
        className="loader"
        type="cylon"
        color="#4caf50"
        height={64}
        width={64}
      />
    </div>
  ) : null;

  return [loader, showLoader, hideLoader];
};

export default useLoader;