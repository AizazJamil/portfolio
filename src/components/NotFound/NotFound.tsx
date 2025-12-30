import Button from "../Button/Button";

const NotFound = () => {
  return (
    <div className="not-found">
      <p className="not-found__message">Opps! Page not found</p>
      <h2 className="not-found__code">404</h2>
      <p className="not-found__message">
        The page you are looking for does not exist.
      </p>
      <Button link="/">Go to Home</Button>
    </div>
  );
};

export default NotFound;
