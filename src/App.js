import "./styles.css";

export default function App() {
  return (
    <div className="App">
      Select your pizza topping:
      <div className="topping">
        <input type="checkbox" id="topping" name="topping" 
        value="Paneer" />
        Paneer
      </div>
    </div>
  );
}
