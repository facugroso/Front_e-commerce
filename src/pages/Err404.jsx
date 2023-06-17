import "./Err404.css";

function Err404() {
  return (
    <div id="error">
      <h1>Woops, somethin went wrong!</h1>
      <img
        src="https://img.freepik.com/vector-gratis/ilustracion-concepto-uy-error-404-robot-roto_114360-1932.jpg?w=2000"
        alt="404 page error"
      />
      <span className="fs-4 fw-semibold">
        The page you are looking for does not seem to be right
      </span>
    </div>
  );
}

export default Err404;
