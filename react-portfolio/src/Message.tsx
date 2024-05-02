function Message() {
  // Als je de naam weg laat en alleen  "" over laat komt er Hello World te staan
  const name = " Maaike";
  if (name) return <h1>Hello world :){name}</h1>;
  return <h1>Hello world</h1>;
}

export default Message;
