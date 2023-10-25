import { useState } from "react";
import Output from './Output';

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <p>It is good to see you</p>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Changed Text</button>
    </div>
  );
};

export default Greeting;
