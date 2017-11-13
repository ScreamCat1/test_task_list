const autorized = (initialState = false, action) => {
  const { type, payload } = action;
  if (type === 'AUTORIZE') {
    const { login, password } = payload;
    return !!(login === 'admin' && password === '123');
  }
  return initialState;
};

export default autorized;
