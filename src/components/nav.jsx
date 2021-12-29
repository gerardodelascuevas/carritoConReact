import {Component} from 'react'
import Logo from './logo'
import Carro from './carro'

const styles = {
    nav: {
        display: 'flex',
        flexDireccion: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0 0 0 0.1)',

    }
}
class Nav extends Component {
    render(){
        const {carro, esCarroVisible, mostrarCarro}= this.props
        return(
            <nav style={styles.nav}> 
                <Logo />
                <Carro
                 carro = {carro}
                 esCarroVisible = {esCarroVisible}
                 mostrarCarro = {mostrarCarro}   
                 />
            </nav>
        )
    }
}

export default Nav