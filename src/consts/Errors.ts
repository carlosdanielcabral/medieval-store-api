import HttpStatusCode from '../enums/HttpStatusCode';

const ERRORS = {
  UserDataInvalid: {
    code: HttpStatusCode.Unauthorized,
    message: 'Username or password invalid',
  },
};

export default ERRORS;
