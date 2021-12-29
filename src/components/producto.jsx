import React, {Component} from 'react'
import Button from './button'

const style = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px, 15px',
        borderRadius: '5px',

    },
    img:{
        width: '100%'
    }
}

class Producto extends Component{
    render(){
        const {producto, agregarAlCarro} = this.props
    
        return (
            <div style={style.producto}>
               {/* {console.log(producto)}  */}
               <img src={producto.img}alt="ola ke ase" style={style.img}/>
               <h1>{producto.name}</h1>
               <p>{'$'+producto.price}</p>  
                <Button onClick={()=> agregarAlCarro(producto)}> 
                    Agregar al Carrito
                </Button>
                
            </div>
        )
    }
}

export default Producto