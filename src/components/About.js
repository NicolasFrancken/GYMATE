import "./About.css";

function About() {
  return (
    <section className="About-section">
      <h2 className="About-title">
        About GYM<span>ATE</span>
      </h2>
      <div className="About-text">
        <p>
          No matter what you’re looking for in a gym, we’ve got a custom option
          made for you. All <span>GYMATE</span> members enjoy unlimited access
          to their home club and the support of our friendly, knowledgeable
          staff anytime you need it. <span>MATE PLAN</span> members receive
          additional benefits, including the ability to bring a guest for free
          and access to any of our +400 locations.
        </p>
        <p>
          Looking for a little extra guidance or inspiration to help you meet
          your fitness goals? As a <span>MATE</span> member, you can take
          advantage of our free fitness training.
        </p>
        <p>
          It’s our goal to provide a clean, safe, welcoming environment for
          anyone who walks through our door, and all the equipment, amenities
          and support you need once you’re here.
        </p>
        <p className="About-bold">
          Welcome to <span>GYMATE</span>, where you become a <span>MATE</span>.
        </p>
      </div>
    </section>
  );
}

export default About;
