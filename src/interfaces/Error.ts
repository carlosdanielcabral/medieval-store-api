type Details = {
  message: string
};

type Error = {
  code: number,
  message: string,
};

interface ErrorHandler {
  code: number,
  details?: Details[],
  message: string,
  error?: Error
}

export default ErrorHandler;
