import React, {Component} from 'react';
import './App.css';
import card from './components/card';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Card src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1zKnLwtDkAhUGFogKHbsfCSAQjRx6BAgBEAQ&url=https%3A%2F%2Fweheartit.com%2Fentry%2F329116733&psig=AOvVaw18OUKEjee8__Rtwrwz-WAe&ust=1568557602808737" 
              mainContent="Tanjiro Kamado"
              description="Tanjiro Kamado (竈門かまど炭たん治じ郎ろう Kamado Tanjirō?) is the main protagonist of the manga and anime, Demon Slayer: Kimetsu no Yaiba."
              />
      </div>
    );
  }
}

export default App;
