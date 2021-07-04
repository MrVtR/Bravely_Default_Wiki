import {
  Home,
  Personagens,
  Organizacoes,
  CharacterDetail,
  Villains,
} from './pages/exportPages';
import './style/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personagens" exact component={Personagens} />
        <Route path="/organizacoes" exact component={Organizacoes} />
        <Route path="/detail" exact component={CharacterDetail} />
        <Route path="/viloes" exact component={Villains} />
      </Switch>
    </Router>
  );
}

export default App;
