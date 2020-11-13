
$( document ).ready(function() {
   
    var i=1;
    $("#answers-select").hide() 
    $("#start").click(function(){
        
        $("#start").hide()
        // shuffelQuestion=question.sort(()=>Math.random() - .5)
        // ourquestioni=0
        $("#answers-select").show()
        $("#questionsBox").show()

        $("#question").text(question[0].qst)
        $(".answer1").text(question[0].Answers[0])
        $(".answer1").text(question[0].Answers[0])
        $(".answer2").text(question[0].Answers[1])
        $(".answer3").text(question[0].Answers[2])
        $(".answer4").text(question[0].Answers[3])
    })
    var score = {gryff:0, huffle:0,raven:0,sly:0}
        $("#next").click(function(){
            if(i < question.length){
                showqst(i);
                i++;    
            }else{scores(score)}
            
                
            })
            $(".answer1").click(function(){ score.gryff++; });
            $(".answer2").click(function(){ score.huffle++; });
            $(".answer3").click(function(){ score.raven++; });
            $(".answer4").click(function(){ score.sly++; });   
function showqst(i){
    $("#question").text(question[i].qst)
    $(".answer1").text(question[i].Answers[0])
    $(".answer2").text(question[i].Answers[1])
    $(".answer3").text(question[i].Answers[2])
    $(".answer4").text(question[i].Answers[3])
    }
    var max=0
    var result=''  
function scores(score){
    for (var key in score){
        console.log(score[key])
        if ( score[key]> max){
           max=score[key]
           result=key
        }
    }
   $("#score").append("<p class='res'></p>")
   $(".res").text(result)
}

    
});



//  function nextQuestion(){
//     showTheQuestions(shuffelQuestion[ourquestioni])
        
    
// }


// function selectAnswer(){

// }
var question=[
    {qst:"Do you consider yourself a brave person?",
     Answers :[
          "Yes, I am","Hmm, that do not describe me  ","I prefer to think wisely  ", "I have my moments "
     ]
    },
    {qst:"How do you feel in a large a group of people?",
     Answers :[
          "Excited of course ","Don’t like it a lot actually  ","Depends on people  ", "I feel superior  "
     ]
    },
    {qst:"Do you trust your hart more or your head?",
     Answers :[
          "It all about balance ","Its all heart   ","I rely completely on my head   ", "I am more of a thinker "
     ]
    },
    {qst:"Who is your favorite teacher at Hogwarts?",
     Answers :[
          "Minerva McGonagall","Rubeus Hagrid   ","Sybil Trelawney  ", "Severus snape  "
     ]
    },
    {qst:"How do you feel after spending a day by yourself?",
     Answers :[
          "Ill be bored ","Its ok for me "," I like that actually   ", " Relaxed of course "
     ]
    },
    {qst:"What is your favorite subject at Hogwarts?  ",
     Answers :[
          "Defense Against the Dark Arts","herbology","potions", "Flying lesson"
     ]
    }
    


]