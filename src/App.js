import './App.css';
import Header from './Components/Header/Header';

import { Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Bullets from './Components/Bullets/Bullets';


function App() {
    return (
        <div>
            <Switch>
                <Route path="/CFI">
                    <Header />
                    <Bullets />
                </Route>
                <Route path="/CFII">
                    <Header />
                    <Bullets />
                </Route>
                <Route path="/MEI">
                    <Header />
                    <Bullets />
                </Route>
                <Homepage />

                    </Switch>
                    </div>


  );
};

export default App;
