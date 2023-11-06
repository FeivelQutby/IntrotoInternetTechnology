$("#meButton").click(MeSend);
$("#friendButton").click(FriendSend);

function FriendSend(event){

    let meName = $("#friendName").val();
   
    let meMessageValue = $("#friendMessage").val();
  
    if(meName.trim() == "" || meMessageValue.trim() == ""){
        return;
    }
  
    let $newChatBubble = $("<div>");
    $newChatBubble.addClass("text-start bg-secondary rounded-2")
    
    let $newName = $("<p>"); 
    let $newMessage = $("<p>"); 

    $newName.text(meName);
    $newName.addClass("font-weight-bold pl-3 pt-3 text-light");

    $newMessage.text(meMessageValue); 
    $newMessage.addClass("pl-3 pb-3 text-light");

    $newChatBubble.append($newName); 
    $newChatBubble.append($newMessage); 
    
    $("#chatContainer").append($newChatBubble);
}

function MeSend(event){

    let meName = $("#meName").val();
    
    let meMessageValue = $("#meMessage").val();
    
    
    if(meName.trim() == "" || meMessageValue.trim() == ""){
        return;
    }
  
    let $newChatBubble = $("<div>");
    $newChatBubble.addClass("text-end bg-primary rounded-2")
    
    let $newName = $("<p>"); 
    let $newMessage = $("<p>");

    $newName.text(meName); 
    $newName.addClass("font-weight-bold pr-3 pt-3 text-light");

    $newMessage.text(meMessageValue); 

    $newMessage.addClass("pr-3 pb-3 text-light");

    $newChatBubble.append($newName); 
    $newChatBubble.append($newMessage); 
    
    $("#chatContainer").append($newChatBubble);
}