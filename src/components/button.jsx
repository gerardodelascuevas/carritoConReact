import {Component} from 'react'

const styles = {
    button:{
        backgroundColor: 'rgb(5,5,5)',
        color: '#fff',
        padding: '15px, 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',

    }
}

class Button extends Component{
    render(){
        return(
            <button {...this.props} style={styles.button}>

            </button>
        )
    }
}

export default Button