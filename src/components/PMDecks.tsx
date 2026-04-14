import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/PMDecks.css";

const decks = [
  { id: 1, title: "Super-Premium Cookie GTM Strategy", date: "Unibic Foods | Aug 2025" },
  { id: 2, title: "Ammonia Monetization & Recovery", date: "Kribhco Fertilizers | May 2024" },
  { id: 3, title: "SaaS Consulting & Growth Mix", date: "Independent Consulting | 2025" },
];

const PMDecks = () => {
  const container = useRef(null);

  useGSAP(() => {
    let cards = gsap.utils.toArray(".deck-card");
    if (cards.length === 0) return;
    
    // We pin the container and scrub the cards up to stack.
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pm-decks-section",
        start: "top top",
        end: `+=${cards.length * 500}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      }
    });

    cards.forEach((card: any, i) => {
      if(i === 0) return; // First card is already in place
      tl.fromTo(card,
        { y: window.innerHeight, scale: 0.9, opacity: 0 },
        { y: i * 50, scale: 1, opacity: 1, duration: 1, ease: "none" }
      );
    });
  }, { scope: container });

  return (
    <div className="pm-decks-section section-container" ref={container} id="pmdecks">
      <h2>
        PM <span>Decks</span>
      </h2>
      <div className="decks-container">
        {decks.map((deck, i) => (
          <div className="deck-card" key={i} style={{ zIndex: i }}>
            <div className="deck-content">
              <h3>{deck.title}</h3>
              <p>{deck.date}</p>
              <div className="deck-action">View Deck ↗</div>
            </div>
            <div className="deck-visual">
              <div className="deck-circle"></div>
              <div className="deck-line"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PMDecks;
