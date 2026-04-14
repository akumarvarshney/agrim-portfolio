import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number = 40; // Hardcoded fallback for 80px padding
    const computedPadding = window.getComputedStyle(box[0]).paddingLeft;
    if (computedPadding) {
      padding = parseInt(computedPadding) / 2;
    }
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Unibic Foods</h4>
                  <p>Market Entry Strategy</p>
                </div>
              </div>
              <h4>Key Impact</h4>
              <p>Evaluated 7 structured levers for super-premium cookie launch.</p>
            </div>
            <WorkImage image="/images/work_01.png" alt="Unibic Foods Strategy" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Kribhco Fertilizers</h4>
                  <p>Operational MVP</p>
                </div>
              </div>
              <h4>Key Impact</h4>
              <p>Unlocked 30Cr profit potential through ammonia storage recovery.</p>
            </div>
            <WorkImage image="/images/work_02.png" alt="Kribhco Ammonia MVP" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>NextLeap PM</h4>
                  <p>Top Fellow (Top 5%)</p>
                </div>
              </div>
              <h4>Focus</h4>
              <p>Mastered core Product Management frameworks and case studies.</p>
            </div>
            <WorkImage image="/images/work_03.png" alt="NextLeap PM Hub" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>BITS Pilani</h4>
                  <p>Mechanical Engineering</p>
                </div>
              </div>
              <h4>Academic</h4>
              <p>GATE ME AIR 8,385 | BITS Pilani Goa Campus 2026.</p>
            </div>
            <WorkImage image="/images/work_04.png" alt="BITS Pilani Engineering" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
