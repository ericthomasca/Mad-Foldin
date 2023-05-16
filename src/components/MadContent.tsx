import { CSSProperties } from "react";
import "./MadContent.css";

function MadContent(props: { imageUrl: string }) {
  const { imageUrl } = props;

  const foldinImageStyle = {
    "--bg": `url(${imageUrl})`,
  } as CSSProperties;

  return (
    <div className="mad-content">
      <span className="jaffee" style={foldinImageStyle}>
        <span className="left-panel"></span>
        <span className="fold-container">
          <span className="fold-panel"></span>
          <span className="right-panel"></span>
        </span>
        <img src={imageUrl} />
      </span>
    </div>
  );
}

export default MadContent;
