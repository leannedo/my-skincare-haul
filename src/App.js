import React from 'react';
import './App.less';
// import Layout from './components/Layout/index';
// import ProductList from "./components/ProductList/index";
// import BuildControl from "./components/BuildControl";
import Layout from "./components/Layout";
import Navigation from "./components/Layout/Navigation";

function App() {
  return (
    <div className="App">
        <Layout>
            <Navigation/>
        </Layout>
    </div>
  );
}

export default App;
