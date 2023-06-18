import "./Info.css";
import { Link } from "react-router-dom";

function Info() {
  return (
    <section className="Info-container">
      <div className="Info-left">
        <h2>
          <span>ACTIVITIES</span> THAT FIT YOUR NEEDS
        </h2>
        <p>
          Challening your body with different activities is fundamental to
          keeping the motivation and making your day more enjoyable.
        </p>
        <Link className="Info-btn" to="/join">
          JOIN
        </Link>
      </div>
      <div className="Info-right">
        <div className="Info-col1">
          <div className="Info-photo-container">
            <h4>STRENGTH</h4>
            <img className="Info-photo" src="/images/photo1.jpg" alt="" />
            <p>
              Want to reduce body fat, increase lean muscle mass and burn
              calories more efficiently? Strength training to the rescue!
              Strength training is a key component of overall health and fitness
              for everyone.
            </p>
          </div>
          <div className="Info-photo-container">
            <h4>RESISTANCE</h4>
            <img className="Info-photo" src="/images/photo3.jpg" alt="" />
            <p>
              A well-rounded fitness program includes strength training to
              improve joint function, bone density, muscle, tendon and ligament
              strength, as well as aerobic exercise to improve your heart and
              lung fitness, flexibility and balance exercises.
            </p>
          </div>
        </div>
        <div className="Info-col2">
          <div className="Info-photo-container">
            <h4>FUNCTIONAL</h4>
            <img className="Info-photo" src="/images/photo2.jpg" alt="" />
            <p>
              Functional training is a classification of exercise which involves
              training the body for the activities performed in daily life.
            </p>
          </div>
          <div className="Info-photo-container">
            <h4>CROSSFIT</h4>
            <img className="Info-photo" src="/images/photo4.jpg" alt="" />
            <p>
              Crossfit is promoted as both a physical exercise philosophy and a
              competitive fitness sport, incorporating elements from
              high-intensity interval training, Olympic weightlifting,
              plyometrics, powerlifting, gymnastics, kettlebell lifting,
              calisthenics, strongman, and other exercises.
            </p>
          </div>
        </div>
      </div>
      <div className="Info-mobile-activities">
        <div className="Info-mobile-top">
          <div className="Info-mobile-act">
            <h4>STRENGTH</h4>
          </div>
          <div className="Info-mobile-act">
            <h4>FUNCTIONAL</h4>
          </div>
        </div>
        <div className="Info-mobile-bottom">
          <div className="Info-mobile-act">
            <h4>RESISTANCE</h4>
          </div>
          <div className="Info-mobile-act">
            <h4>CROSSFIT</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
