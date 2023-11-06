const ContactInfo = ({ ContactInfo }) => {
  return (
    <div>
      <center>
        <img src="https://source.unsplash.com/weekly?person" alt="AUTHOR" />
        <h1 className="title">LEVIOOSA</h1>
      </center>
      <h5 className="sub-title">CONTACT INFO</h5>
      <ul>
        {ContactInfo.map((info) => (
          <li key={info.Icon}>
            <i className={`fa fa-${info.Icon}`}></i> {info.Text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
