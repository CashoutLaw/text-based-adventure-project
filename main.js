var rooms = {
  "room0":"you are in a dark place"


}

/*
The code should look at the page, append the text at room0, and wait for a key to be pressed. Then it will check if the key is the enter key and if
the user input is the focus(has the flashing line wiating for text(like if you click the searchbar and it is waiting for you to type something)).
After that, it will set the variable value to be the value in the user input.
*/
$(document).ready(function(){
  $('#ScrollBox').append(rooms["room0"])
    $(document).keypress(function(key){
      if(key.which === 13 && $('#UserInput').is(':focus')){
          var value = $(#UserInput).val();
          
        }
    })
  
})
