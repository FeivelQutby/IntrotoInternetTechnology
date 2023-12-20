import Title from "./Title"
import EmojiPedia from "./EmojiPedia"
import Card from "./Card"

function createCard(contact){
    return(
        <Card
            id={contact.id}
            emoji={contact.emoji}
            name={contact.name}
            meaning={contact.meaning}
        />
    )
}

export default function EmojiPages(){
    return(
        <div className="container">
            <Title/>
            <div className="row d-flex justify-content-between">
                {EmojiPedia.map(createCard)}
            </div>
        </div>
    )
}