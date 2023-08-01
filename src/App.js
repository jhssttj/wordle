import {useState, useEffect} from "react";
import {WordleMain} from './components/WordleMain';


function App() {

  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://random-word-api.vercel.app/api?words=1&length=5")
      .then((response) => {return response.json()})
      .then((answer) => {setAnswer(answer[0])})
  }, [])


  return (
    <div className="App">
      <h1>{answer}</h1>
      <WordleMain answer={answer}/>
    </div>
  );
}

export default App;
