import "../styles/Button.css";

const Button = ({ className, icon, text }) => {
  return (
    <>
      <button className={className}>
        <span className="button-icon">{icon}</span>
        {text}
      </button>
    </>
  );
};

export default Button;
