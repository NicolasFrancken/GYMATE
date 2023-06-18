import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <section className="Main-container">
      <div className="Main-text-container">
        <h1>SERIOUS TRAINING</h1>
        <h3>Start your journey today!</h3>
        <Link to="/join" className="Main-btn">
          JOIN NOW!
        </Link>
      </div>
    </section>
  );
}

export default Main;
