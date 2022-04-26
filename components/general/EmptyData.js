import React from "react";

const styles = {
  noData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // textAlign: "center",
    // padding: "10px 10px 40px",
    // fontSize: 24,
    // lineHeight: "16px",
    // color: "#000",
  },
};

function EmptyData(props) {
  const { classes } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px"
      }}
    >
        <span><i class="ri-grid-fill"></i></span>
        <span>No data</span>
    </div>
  );
}

export default EmptyData;
