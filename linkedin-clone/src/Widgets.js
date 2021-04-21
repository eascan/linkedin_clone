import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon className="mui__icon" />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon className="widget__headerIcon" />
      </div>

      {newsArticle("Top news", "9099 readers")}
      {newsArticle("Tesla stocks hit new highs", "801 readers")}
      {newsArticle("Coronavirus: Canada updates", "2324 readers")}
      {newsArticle("Bitcoin - yay or nay", "999 readers")}
    </div>
  );
}

export default Widgets;
