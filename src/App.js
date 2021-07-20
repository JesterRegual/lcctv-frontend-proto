import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Portal from "./components/Portal.jsx";
import Customer from "./components/customer/Customer.jsx";

function App() {
    return (
        <Router>
            <Route path="/" component={Customer} />
            <Route path="/portal" component={Portal} />
        </Router>
    );
}

export default App;
