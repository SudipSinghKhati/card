import "./index.css";

function CourseList() {
  return (
    <div className="skill-list">
      <Course skill="Nodejs" emoji="💪" color="Green" />
      <Course skill="TypeScript" emoji="💪" color="Yellow" />
      <Course skill="React" emoji="💪" color="Red" />
    </div>
  );
}

function Course(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default CourseList;
