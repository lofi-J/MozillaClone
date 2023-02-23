import "./htc.css";


function HeadTextComponent(props) {
    if (props.type === "h2") {
        return(
            <h2 style={ { fontSize: `${props.size}px` } }
            className="head-component">{props.text}</h2>
        );
    }
    else if(props.type === "h3") {
        return(
            <h3 style={ {fontSize: `${props.size}px`}}
            className="head-component h3-component">{props.text}</h3>
        )
    }    
}

export default HeadTextComponent;