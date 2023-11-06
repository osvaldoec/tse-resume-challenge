const Experience = ({ Experience }) => {
  return (
    <div>
      <h1 className="title">EXPERIENCE</h1>
      {
        Experience.map(info => (
          <>
            <h5 className="sub-title">{info.name}</h5>
            <p>
              {info.description}
            </p>
            <em style={{ float: "right" }}>{info.period}</em>
          </>
        ))
      }
    </div>
  );
};

export default Experience;
