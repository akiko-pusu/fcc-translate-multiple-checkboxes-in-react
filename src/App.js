import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="App">
      Select your pizza topping:
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          checked={isChecked}
          onChange={handleOnChange}
          value="Paneer" />
        Paneer
      </div>
      <div className="result">
        Above checkbox is {isChecked ? "checked" : "unchecked"}.
      </div>
    </div>
  );
}
