import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { account: '' }
    }

    componentWillMount() {
        this.loadBlockchainData();
    }

    async loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        const network = await web3.eth.net.getNetworkType();
        // console.log('network = ', network)
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] })
    }

    render() {
        const { account } = this.state;

        return (
          <div>
            Account: {account}
          </div>
        );
    }
}

export default App;
