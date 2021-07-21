var rooms = {
  "room0":"you are in a dark place"


}

$(document).ready(function(){
    $(document).keypress(function(key){
        if(key.which == 13 && $('#UserInput').is(':focus')){
          var value = $(#UserInput).val();
        }
    })
  
})
