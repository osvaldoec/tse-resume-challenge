
import SContactInfo from "./SContactinfo";
import SEducation from "./SEducation";
import SLanguage from "./SLanguage";
import Counter from './Counter';

const Sidebar = ({ Data }) => {
  const { ContactInfo, Education, Language } = Data;
  return (
    <div className="section_left">
      <Counter />
      <SContactInfo ContactInfo={ContactInfo} />
      <SEducation Education={Education} />
      <SLanguage Language={Language} />
    </div>
  );
};

export default Sidebar;
