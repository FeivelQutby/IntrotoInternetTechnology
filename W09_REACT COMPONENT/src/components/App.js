import Card from "./Card"
import contacts from "../contacts";
import "./Card.css";
export default function App(){
    return (
        <div className="center">
            <h1 className="Color-h1">My Contacts</h1>
            <Card 
                name = {contacts[0].name}
                img = {contacts[0].img}
                phone = {contacts[0].phone}
                email = {contacts[0].email}
            />
            <Card 
                name = {contacts[1].name}
                img = {contacts[1].img}
                phone = {contacts[1].phone}
                email = {contacts[1].email}
            />
            <Card 
                name = {contacts[2].name}
                img = {contacts[2].img}
                phone = {contacts[2].phone}
                email = {contacts[2].email}
            /> 
        </div>
    );
}