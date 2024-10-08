export const initMiddleware = (middleware) => (req, res) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
      if (res.headersSent) reject();
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
