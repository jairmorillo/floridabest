import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./layout/layout";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
