export const noHandlerFoundError = (req, res) =>
  res
    .status(405)
    .send({ message: `No handler found for method ${req.method}` });

export function createAPI(apis = {}, prepare = async () => {}) {
  return async function API(req, res) {
    await prepare(req, res);

    if (req.method in apis) return apis[req.method](req, res);
    return noHandlerFoundError(req, res);
  };
}
