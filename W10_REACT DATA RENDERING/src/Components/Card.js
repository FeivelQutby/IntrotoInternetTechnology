import "./Card.css";

export default function Card(props){
    return (
        <div className="Card">
            <div className="CardHeader">
                <h1 className="Name">{props.name}</h1>
            </div>
            <img className src={props.img}></img>
            <p className="">{props.phone}</p>
            <p className="">{props.email}</p>
        </div>
    );
}