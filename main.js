var rooms = {
  "room0":"you are in a dark place"


}

$(document).ready(function(){
  $('#ScrollBox').append(rooms["room0"])
    $(document).keypress(function(key){
        if(key.which == 13 && $('#UserInput').is(':focus')){
          var value = $(#UserInput).val();
        }
    })
  
})
