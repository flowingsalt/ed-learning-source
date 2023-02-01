export class ApiError extends Error {
  constructor(
    public url: string,
    public message: string,
    public statusCode?: number,
    public statusText?: string,
  ) {
    super(message);
  }
}
