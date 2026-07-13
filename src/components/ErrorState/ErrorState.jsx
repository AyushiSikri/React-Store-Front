import "./ErrorState.css";

function ErrorState({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <section className="error-state">
      <div className="error-card">
        

        <h2 className="error-title">
          Oops! Something went wrong
        </h2>

        <p className="error-message">
          {message}
        </p>

        {onRetry && (
          <button
            className="retry-btn"
            onClick={onRetry}
          >
            Try Again
          </button>
        )}
      </div>
    </section>
  );
}

export default ErrorState;