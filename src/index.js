import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="SDD02031.JPG" alt="Profile Image" />;
}

function Intro() {
  return (
    <div>
      <h1>Chamila Jayasinghe</h1>
      <p>
        I'am a full-stack developer and trainee react developer. I following
        udemy react course for gain react skills. My tutor is brilliantly done
        that lectures.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML + CSS" emoji="🤟" color="orange" />
      <Skill skill="Javascript" emoji="👊" color="yellow" />
      <Skill skill="Svelte" emoji="👌" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
