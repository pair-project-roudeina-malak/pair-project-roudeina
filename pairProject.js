$( document ).ready(function() {
    
         $("[id^=s]").hide()


        $("[id^=t]").click(function(){
            $("[id^=s]").slideDown("slow")
        });
        
        $("[id^=t]").click(function(){
            $("[id^=s]").slideUp("slow")
        });


});