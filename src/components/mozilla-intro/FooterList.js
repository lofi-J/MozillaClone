import "./FooterList.css";

const FooterList = (props) => {
    return (
        <section className={props.list.className + " footer-list-wrap"}>
            <h5>{props.list.name}</h5>
            <ul>
                {props.list.arr.map(text => (
                    <li key={text}>{text}</li>
                    )
                )}
            </ul>
        </section>
    );
}

export default FooterList;