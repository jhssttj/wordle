import {useState, useEffect} from "react";


function App() {

  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    fetch("https://random-word-api.vercel.app/api?words=1&length=5")
      .then((response) => {return response.json()})
      .then((word) => {setAnswer(word)})
  }, [])

  return (
    <div className="App">
      <h1>{answer}</h1>
    </div>
  );
}

export default App;
