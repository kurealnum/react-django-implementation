// altMessage is optional

function ErrorMessage({ isError, message, altMessage }) {
  return isError ? <p>{message}</p> : altMessage ? <p>{altMessage}</p> : null;
}

export default ErrorMessage;
