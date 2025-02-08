export class Response<T> {
  meta: Meta;
  results: T;

  constructor(data: T) {
    this.meta = {
      date: new Date(),
    };
    this.results = data;
  }
}

type Meta = {
  date: Date;
};
