import "./AppTweak.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "let hit the beach!!! it's Hot",
    iconName: "sun"
  },
  winter: {
    text: "BURR!!! it's cold",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const AppTweak = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text} </h1>
      <p>
        <h3> The Time Is : {props.time} </h3>
      </p>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default AppTweak;
