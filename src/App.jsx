function App() {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div>
      <div>
        <h1>TODO List</h1>
      </div>
      <div>
        <h2>Hello, It's {weekDays[new Date().getDay()]} ! Focus On Your Day !</h2>
      </div>
    </div>
  );
}

export default App;
