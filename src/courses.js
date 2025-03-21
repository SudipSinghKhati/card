import "./index.css";
import { skills } from "./skill";
function CourseList() {
  return (
    <div className="skill-list">
      {skills.map((data) => (
        <Course skill={data.skill} color={data.color} level={data.level} />
      ))}
    </div>
  );
}

function Course({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "basic" && "👼"}</span>
      <span>{level === "mid" && "👨"}</span>
      <span>{level === "strong" && "🧑"}</span>
    </div>
  );
}

export default CourseList;
