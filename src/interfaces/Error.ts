type Details = {
  message: string
};

interface ErrorHandler extends Error {
  code: number,
  details: Details[]
}

export default ErrorHandler;
