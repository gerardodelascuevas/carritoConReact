import { Component } from "react";


const styles= {
    logo: {
        fontWeigth: '700',
        fontSize: '48px',

    }
}
class Logo extends Component {
    render(){
        return(
            <div style={styles.logo}>
                <h1> E-Commerce IT</h1>
            </div>
        )
    }

}

export default Logo