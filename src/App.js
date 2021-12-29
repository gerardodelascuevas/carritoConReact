import React, { Component } from 'react'
import './App.css';
import Productos from './components/productos'
import Layout from './components/layout';
import Titulo from './components/titulo';
import Nav from './components/nav';

class App extends Component{
  state = {
    productos: [
      {name: 'acer aspire 5', price: 12000, img: '/img/ausrog.jpg'},
      {name: 'acer predator', price: 35000, img: '/img/ausrog.jpg'},
      {name: 'asus rog', price: 30000, img: '/img/ausrog.jpg'}
    ],
    carro: [

    ],
    esCarroVisible: false,

  }
  agregarAlCarro = (producto)=>{  
     const {carro} = this.state
     if(carro.find(x=>x.name === producto.name)){
       const newCarro = carro.map(x=>x.name===producto.name 
        ?({
          ...x,
          cantidad: x.cantidad +1 
        })
        : x        
         )
         return this.setState({carro: newCarro})
     }
      return this.setState({
        carro: this.state.carro.concat({
          ...producto, 
          cantidad: 1, 
        })
      })
    }
  
    mostrarCarro = ()=>{
      if(!this.state.carro.length) return 
      this.setState({esCarroVisible: !this.state.esCarroVisible})
    }
  render(){
      const { esCarroVisible } = this.state
    return (
      <div>
       <Nav 
       carro={this.state.carro}
       esCarroVisible = {esCarroVisible}
       mostrarCarro= {this.mostrarCarro}
       />          
        <Layout>
          <Titulo /> 
            <Productos 
            agregarAlCarro = {this.agregarAlCarro}
            productos = {this.state.productos}
            />
        </Layout>

      </div>
    )
  }
}

export default App;
