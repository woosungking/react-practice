import React from "react";

const styles={

    wrapper:{
        margin:0,
        padding:0,
        display:"flex",
        flexDirection:"row",
        border:"1px solid black",
        borderRadius:25,
    },
    messageText:{
        color:"black",
        fontSize:16,
    },
};


class Notification extends React.Component{

    constructor(props){
        super(props);
        this.state ={};
    }
    render() {
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;