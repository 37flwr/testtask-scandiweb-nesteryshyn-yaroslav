import { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { publicRoutes } from './routes/routeList'
import Layout from './components/Layout';
import { persistor } from './store';
import store from './store';


import './App.scss';

export default class App extends Component {
  render() {
  return (
    <div className="App">
          <Provider store={store}>

              <PersistGate persistor={persistor}>
      <Router>

        <Layout>
            <Routes>
            {publicRoutes.map(
              ({ path, component: Component, exact }, idx) => {
                return <Route
                key={idx}
                path={path}
                exact={exact}
                element={<Component />}
                />
              })
            }
            </Routes>
        </Layout>
      </Router>
            </PersistGate>

      </Provider>
    </div>
  )}
}
