import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Box from "./components/Box";
import AdminPanel from "./components/AdminPanel";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <center>
                        <div className="container">
                            <Header title="Witaj w ZSK" />
                            <Box />
                        </div>
                    </center>
                </Route>
                <Route path="/admin" exact>
                    <AdminPanel />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
