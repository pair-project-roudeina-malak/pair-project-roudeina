$(document).ready(function() {
    var array1 = $("[id^=s]");
    var array2 = $("[id^=t]");

    function tog(array1,array2){
        for(let i=0; i<array2.length; i++){
            $(array2[i]).click(function(){
                $(array1[i]).toggle()  
            });
        }
    }
    $("[id^=s]").hide();
    tog(array1,array2);

});

