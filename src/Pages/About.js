import logo from "../Layout/Logo/HBA_logo.svg";
import "./HomePage/App.css";
import FooterLinks from "../Layout/Footer/Footer";

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>About Happy Bodies Anywhere</h1>
      <p>
        Happy Bodies Anywhere (HBA) was created by Danielle, Eleanor, Emma,
        Frances and Nicole. The project, made possible by Code First Girls,
        demonstrates our how our coding skills have developed.
      </p>
      <p>
        The site itslef is designed to allow diabetic children to monitor there
        condition independently. It provides a way for children to calculate the
        amount of insulin they need based on current sugar levels and what they
        plan to eat. These values can they be saved and monitored over time by
        both the child and their parent.
      </p>
      <p>We hope you enjoy the project!</p>
      <div className="App-footer">
        <FooterLinks />
      </div>
    </div>
  );
}

export default About;
