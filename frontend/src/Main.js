import MExperience from "./MExperience";
import MProfile from "./MProfile";
import MSkills from "./MSkills";

const Main = ({ Data }) => {
    const { Experience, Skills } = Data;
  return (
    <div className="section_right">
      <MProfile />
      <MExperience Experience={Experience}/>
      <MSkills Skills={Skills}/>
    </div>
  );
};

export default Main;
