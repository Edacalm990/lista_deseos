'use client';
import Image from 'next/image'
import styles from './page.module.css'
import React, { Component } from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      lista:[],
      value:'',
    }
    this.cambiarDeseoActual = this.cambiarDeseoActual.bind(this);
    this.addDeseoActual = this.addDeseoActual.bind(this);
  }

  cambiarDeseoActual(event){
    let texto=event.target.value;
    this.setState({value: texto})
  }

  addDeseoActual(event){
    let listaAux=this.state.lista.slice()
    listaAux.push(this.state.value)
    this.setState({lista:listaAux})
    event.preventDefault();
  }

  render(){
    return (
    <div>
      <h1>Lista de deseos</h1>
        <p>{this.state.lista.toString()}</p>
        <form onSubmit={this.addDeseoActual}>
            <input type='text' value={this.state.value} onChange={this.cambiarDeseoActual}/>
            <input type='submit'/>
        </form>
        
    </div>
    )
  }
}
