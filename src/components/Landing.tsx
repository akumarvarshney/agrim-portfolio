import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              AGRIM
              <br />
              <span>KUMAR</span>
            </h1>
          </div>
          <div className="landing-info" style={{ marginTop: '20px' }}>
            <h3 style={{ marginBottom: '15px' }}>An out of the blue thinker</h3>
            <h2 style={{ fontSize: '1.1em', lineHeight: '1.3' }}>
              and not your
              <br />
              <span style={{ color: 'var(--accentColor)' }}>regular strategist</span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
