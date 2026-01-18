import "./GreetingCard.css";

const GreetingCard = ({ name }) => {
  return (
    <div className="greeting-card">
      <h1 className="greeting-title">Hello, {name}!</h1>
      <p className="greeting-text">
        Welcome to your first React component with plain Css styling.
      </p>
    </div>
  );
};

export default GreetingCard;
