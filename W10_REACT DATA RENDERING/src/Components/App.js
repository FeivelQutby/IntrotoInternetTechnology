import Card from "./Card"
import contacts from "../contacts";
import "./Card.css";

function createCard(contact){
    return(
        <Card
            id={contact.id}
            name={contact.name}
            img={contact.img}
            phone={contact.phone}
            email={contact.email}
        />
    )
}


export default function App(){
    return (
        <div className="center">
            <h1 className="Color-h1">My Contacts</h1>
            <div className="box">
                {contacts.map(createCard)}
            </div>
        </div>
    );
}