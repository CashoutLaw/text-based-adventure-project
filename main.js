var currRoom = "start";
function changeRoom(dir){
  if(rooms[currRoom].directions[dir] !== undefined){
  currRoom = rooms[currRoom].directions[dir]
   $('#ScrollBox').append("<p>" + rooms[currRoom].description + "<p>");

  }else{
     $('#ScrollBox').append("<p>You cannot go that way!<p>");

  }

}

/*
The code should look at the page, append the text at room0, and wait for a key to be pressed. Then it will check if the key is the enter key and if
the user input is the focus(has the flashing line wiating for text(like if you click the searchbar and it is waiting for you to type something)).
After that, it will set the variable value to be the value in the user input.
*/
$(document).ready(function(){
  $('#ScrollBox').append("<p>" + rooms.start.description + "<p>")
    $(document).keypress(function(key){
      if(key.which === 13 && $('#UserInput').is(':focus')){
          var value = $(#UserInput).val().toLowerCase();
          switch(value){
            case "north":
              changeRoom("north");
              break;
            case "south":
              changeRoom("south");
              break;
            case "east":
              changeRoom("east");
               break;
             case "west":
              changeRoom("west");
              break;
            default:
              alert("invalid move!")
          }
        }
    })
  
})
