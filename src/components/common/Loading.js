import React from "react";
import "./Loading.css";

const Loading = props => {
  const { height, width } = props;

  return <div className="loading" style={{ height, width }} />;
};

Loading.defaultProps = {
  width: "30px",
  height: "30px"
};

export default Loading;
