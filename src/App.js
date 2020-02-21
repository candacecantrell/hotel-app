import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import ShopItem from './components/items'
import Layout from './components/Layout'


class App extends Component {
    render() {
        return (
            <div className="styleAll">
                <Layout>
                    <p>test text</p>
                </Layout>
            </div>
        );
    }
}

export default App;