const logMiddleware = () => next => action => {
  console.log(`Incoming action: ${ action.type }`);

  next(action);
}

export default logMiddleware;