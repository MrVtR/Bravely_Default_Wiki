import {
  Home,
  Personagens,
  Organizacoes,
  CharacterDetail,
} from './pages/exportPages';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/detail" component={ChDetail} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/personagens" exact component={Personagens} />
        <Route path="/organizacoes" exact component={Organizacoes} />
        <Route path="/detail" exact component={CharacterDetail} />
      </Switch>
    </Router>
  );
}

export default App;
