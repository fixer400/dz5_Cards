import './App.css';
import Card from './Components/Card';
import placeholder from './placeholder.jpg'

function App() {
  return (
    <div className="App">
      
      <Card title = {"Card Title"} text = {"Some quick example text to build on the card title and make up the bulk of the card's content."}>
        <img src={placeholder} class="card-img-top" alt="..."/>
      </Card>

      <Card title = {"Special Title treatment"} text = {"With supporting text below as a natural lead-in to additional content."}>

      </Card>   
      
    </div>
  );
}

export default App;
