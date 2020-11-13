$( document ).ready(function() {
    
          $("[id^=s]").hide()


        // $("[id^=t]").click(function(){
        //     $("[id^=s]").slideDown("slow")
        // });
        
        // $("[id^=t]").click(function(){
        //     $("[id^=s]").slideUp("slow")
        // });
        $("[id^=t]").click(function() {
            if ($("[id^=s]").is(':hidden')){
                $("[id^=s]").stop(true, true).slideUp('slow');
                $("[id^=s]").stop().slideDown('slow');
            }else {
                $("[id^=s]").stop().slideUp('slow');
            }
        });


});