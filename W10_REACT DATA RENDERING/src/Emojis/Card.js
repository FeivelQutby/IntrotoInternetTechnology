


export default function Card(props){
    return(
        <div className="bg-light card-custom col-sm-12 m-2 align-item p-3">
            <h3 className="text-center custom-size">{props.emoji}</h3>
            <h3 className="text-center custom-tosque">{props.name}</h3>
            <p className="text-center custom-grey">{props.meaning}</p>
        </div>
    )
}