var img=["https://i.pinimg.com/originals/eb/a3/d5/eba3d5f7ae3f2187028a8583d6eec17b.jpg","https://i.pinimg.com/564x/75/83/63/758363a084bf046402e60639ff2300d5.jpg","https://i.pinimg.com/originals/d3/4c/b1/d34cb17a7004e3886e2e58b171ea657b.jpg","https://i.pinimg.com/564x/dc/fd/b1/dcfdb180831915b7efbabf75d0a4afbc.jpg","https://i.pinimg.com/564x/80/f1/81/80f1812393b27949242c2e3ac0284576.jpg","https://api.time.com/wp-content/uploads/2014/04/220927_full.jpg"]
const question=[
  {qst:"Do you consider yourself a brave person?",
   Answers :[
      'Yes, I think so !', 
      'Hmm, that do not describe me ',
      'I prefer to think wisely ! ',
      'I have my moments  ',
   ]
   
  },
  {qst:"How do you feel in a large a group of people?",
   Answers :[
      'Exited of course !!', 
      'Don’t like it a lot actually! ',
      'It depends on people! ',
      "Of course good! Watch & learn "  
   ]
  },
  {qst:"Do you trust your heart more or your mind?",
   Answers :[
      'Hmm,i t all about balance! ', 
      'My heart no doubt ! ', 
      'My brain no doubt ! ', 
      'whatever suits me ! '
   ]
  },
  {qst:"Who is your favorite teacher at Hogwarts?",
   Answers :[
      'Minerva McGonagall ', 
      'Rubeus Hagrid ', 
      'Sybil Trelawney ', 
      'Severus snape'
   ]
  },
  {qst:"How do you feel after spending a day by yourself?",
   Answers :[
      'I will be bord  ', 
      'Its ok for me  ',
      'I like that actually ',
      'I like spending time with myself'
   ]
  },
  {qst:"What is your favorite subject at Hogwarts?  ",
   Answers :[
      'Defense against the dark arts ', 
      'Herbology  ', 
      'Potions ', 
      'Flying lessons '
   ]
  }

]
$( document ).ready(function() { 
  var i=1;
  $("#next").hide();
  $("#answers-select").hide(); 
  $("#start").click(function(){
      $("#next").show();
      $("#start").hide();
      $("#answers-select").show();
      $("#questionsBox").show();

      $("#question").text(question[0].qst)
      $(".answer1").text(question[0].Answers[0])
      $(".answer1").text(question[0].Answers[0])
      $(".answer2").text(question[0].Answers[1])
      $(".answer3").text(question[0].Answers[2])
      $(".answer4").text(question[0].Answers[3])
      $("#question").append("<br>")
      $("#question").append("<img src="+img[0]+`  class = 'image' id=image${i}>`)
  })
  var score = {gryff:0, huffle:0,raven:0,sly:0}
      $("#next").click(function(){
           $( ".answer1" ).css('background-color','  #D2D0B9'); 
           $( ".answer2" ).css('background-color','  #D2D0B9');
           $( ".answer3" ).css('background-color','  #D2D0B9');
           $( ".answer4" ).css('background-color','  #D2D0B9'); 
           
        
          if(i < question.length){
              showqst(i);
              $("#question").append("<img src="+img[i]+`  class = 'image' id=image${i}>`)    
              i++;    
          }else{scores(score)}
          $(".answer1" ).css('color','black');
          $(".answer2" ).css('color','black');
          $(".answer3" ).css('color','black');
          $(".answer4" ).css('color','black');

          $(".answer1 ").prop("disabled", false);;
          $(".answer2 ").prop("disabled", false);
          $(".answer3 ").prop("disabled", false);
          $(".answer4 ").prop("disabled", false);

         
          })
          $(".answer1").click(function(){ 
            $(".answer1" ).css('color',' rgb(172, 142, 86)');
            score.gryff++; 
            $(".answer2 ").prop("disabled", true);
            $(".answer3 ").prop("disabled", true);
            $(".answer4 ").prop("disabled", true);
         });
          $(".answer2").click(function(){ 
            $(".answer2" ).css('color',' rgb(172, 142, 86)');
            $(".answer1 ").prop("disabled", true); 
            $(".answer3 ").prop("disabled", true);
            $(".answer4 ").prop("disabled", true);
            score.huffle++; 
         });
          $(".answer3").click(function(){ 
            $(".answer3" ).css('color',' rgb(172, 142, 86)'); 
            $(".answer2 ").prop("disabled", true);
            $(".answer1 ").prop("disabled", true);
            $(".answer4 ").prop("disabled", true);
            score.raven++; });
          $(".answer4").click(function(){ 
            $(".answer4" ).css('color',' rgb(172, 142, 86)');
            $(".answer2 ").prop("disabled", true);
            $(".answer3 ").prop("disabled", true);
            $(".answer1 ").prop("disabled", true);
            score.sly++; }); 
            
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
$(".container").hide();
$(".work").append("<br>");
if (result==="gryff"){
   $("#score").append("<iframe width='560' height='315' src='https://www.youtube.com/embed/QIMtW4Jh1Xo?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")  
  }else if(result==="huffle"){
   $("#score").append("<iframe width='560' height='315' src='https://www.youtube.com/embed/VfZ1xZTF_RA?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
  }else if(result==="raven"){
   $("#score").append("<iframe width='560' height='315' src='https://www.youtube.com/embed/O9XVYs-aSW0?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
  }else if(result==="sly"){
   $("#score").append("<iframe width='560' height='315' src='https://www.youtube.com/embed/ozC4uWuJ-d0?autoplay=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'allowfullscreen></iframe>")
  }else if(result===""){
   $("#score").append("<p id ='error'>Why you didnt fill the choices??</p>");
  }
} 
});




