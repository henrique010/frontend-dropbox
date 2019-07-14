import React, { Component } from 'react';
import logo from '../../assets/logo.svg'

import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        newBox: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox
         });
         
         this.props.history.push(`/box/${response.data._id}`);
    }  

    handleInputSubmit = event => {
        this.setState({ newBox: event.target.value })
    }
    
    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt=""/>
                    <input 
                        placeholder="Criar um box"
                        value={this.state.newBox}
                        onChange={this.handleInputSubmit}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
