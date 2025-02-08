export class ErrorResponse<T> {
  message: T;

  constructor(err: T) {
    this.message = err;
  }
}
