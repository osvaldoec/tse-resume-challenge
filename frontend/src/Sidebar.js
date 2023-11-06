import SContactInfo from "./SContactinfo";
import SEducation from "./SEducation";
import SLanguage from "./SLanguage";

const Sidebar = ({ Data }) => {
  const { ContactInfo, Education, Language } = Data;
  return (
    <div className="section_left">
      <SContactInfo ContactInfo={ContactInfo}/>
      <SEducation Education={Education}/>
      <SLanguage Language={Language}/>
    </div>
  );
};

export default Sidebar;
