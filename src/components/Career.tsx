import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My work <br />
          <span>experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Strategy Intern</h4>
                <h5>Unibic Foods</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an end-to-end market entry strategy for Unibic's super-premium cookie launch, evaluating 7 structured levers — competitor positioning, pricing logic, pack architecture, channel mix, and consumer sentiment — turning an ambiguous brief into a clear, actionable decision framework.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product & Analysis Intern</h4>
                <h5>Kribhco Fertilizers Limited</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Identified high-impact operational inefficiency in excess ammonia storage (∼100 tons); quantified revenue leakage through competitor benchmarking and process mapping, designing an MVP that unlocked 30Cr in incremental annual profit potential.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
