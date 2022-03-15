import "./email.css";

function Email() {
  return (
    <a
      className="email"
      href="mailto:info@winexposardinia.it"
      target="_blank"
      rel="noreferrer"
    >
      <h4 className="contattaci">Contattaci</h4>
      <h3 className="emailAddress">info@winexposardinia.it</h3>
    </a>
  );
}

export default Email;
