import Header from './Header'
import Card from './Card'

import destinationData from './destinationData';

import './App.css'

function App() {
  const cards = destinationData.map(item => {
    return <Card key={item.id} item={item} />
  })
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
}

export default App
