const Education = ({ Education }) => {
  return (
    <div>
      <h5 className="sub-title">EDUCATION</h5>
      {Education.map((info) => (
        <>
          <em>{info.level}</em>
          <p>{info.name}</p>
          <p>{info.period}</p>
        </>
      ))}
    </div>
  );
};

export default Education;
