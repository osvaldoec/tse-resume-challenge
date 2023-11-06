const Language = ({ Language }) => {
  return (
    <div>
      <h5 className="sub-title">LANGUAGE</h5>
      {
        Language.map(info => (
          <>
            <label>{info.name}</label>
            <div className="progress_container">
              <div className="progress_bar" style={{ width: info.progress }}></div>
            </div>
          </>
        ))
      }
    </div>
  );
};

export default Language;
