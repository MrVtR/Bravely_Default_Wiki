import { Home, Personagens } from './pages/exportPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/detail" component={ChDetail} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/personagens" exact component={Personagens} />
      </Switch>
    </Router>
  );
}

export default App;
