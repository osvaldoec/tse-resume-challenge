const Skills = ({ Skills }) => {
  return (
    <div>
      <h1 className="title">PROFESSIONAL SKILLS</h1>
      <table>
        {Skills.map((skill) => (
          <tr key={skill.skill}>
            <td>{skill.skill}</td>
            <td>
              <div className="progress_container">
                <div
                  className="progress_bar"
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Skills;
