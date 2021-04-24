import { Home } from './pages/exportPages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/detail" component={ChDetail} /> */}
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
