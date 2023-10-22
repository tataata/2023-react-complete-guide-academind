import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // State might be suitable for instant validation
  //    + if I want to reset the input value after the submit
  const [enteredName, setEnteredName] = useState("");
  // add touched for providing feedback only affter field was edited
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    // Validation conditions
    // Check if the input is empty or not
    if (!enteredNameIsValid) {
      // cancel the function execution as there is 
      // nothing to operate with: the input value is empty
      return;
    }

    // State for tracking every keystroke
    console.log(enteredName + ", hello! <-- useState");

    // Reset the value in the input on submit
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  

  // Change the css classes if input is valid or not
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name field can't be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
