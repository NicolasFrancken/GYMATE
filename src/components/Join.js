import "./Join.css";

function Join() {
  return (
    <section className="Join-container">
      <div className="Join-left">
        <h2>CHOOSE YOUR PLAN!</h2>
        <p>
          We have everything you are looking for! You are one click away from
          being part of the biggest sports community in the world.
        </p>
      </div>
      <div className="Join-right">
        <div className="Join-card premium-card">
          <div className="Join-card-top">
            <h3 className="Join-cardtitle-h3">
              <span>MATE</span> PLAN
            </h3>
            <p className="Join-p-price">
              $<span> 60</span> /month
            </p>
            <a href="#payment" className="Join-select-a">
              SELECT
            </a>
          </div>
          <div className="Join-card-bottom">
            <p className="Join-p-info">
              Access to <span>+400</span> locations
            </p>
            <p className="Join-p-info">All the Perks</p>
            <p className="Join-p-info">Live and On Demand classes</p>
            <p className="Join-p-info">Nutrition Plans</p>
          </div>
        </div>
        <div className="Join-card">
          <div className="Join-card-top">
            <h3 className="Join-cardtitle-h3">BASIC PLAN</h3>
            <p className="Join-p-price">
              $<span> 35</span> /month
            </p>
            <a href="#payment" className="Join-select-a">
              SELECT
            </a>
          </div>
          <div className="Join-card-bottom">
            <p className="Join-p-info">
              Access to <span>200</span> locations
            </p>
            <p className="Join-p-info">50% of the Perks</p>
            <p className="Join-p-info">Live and On Demand classes</p>
            <p className="Join-p-info">Selected activities available only</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
