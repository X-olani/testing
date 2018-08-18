$(document).ready(function(){
var count=0;
  $('.story1').hide();
  $('.story2').hide();
  $('.story3').hide();
  $('.story4').hide();




    $('.cl_1').click(function(){
      $('.fade1').hide();
      $('.story1').show();
      count+=1
      console.log(count)
      if (count>=2){
        $('.fade1').fadeIn();
        $('.story1').hide();
        count=0;
      }

    });


        $('.cl_2').click(function(){
          $('.fade2').hide();
          $('.story2').show();
          count+=1;
          if (count>=2){
            count=0;
            $('.fade2').fadeIn();
            $('.story2').hide();
          }
        });

        $('.cl_3').click(function(){
          $('.fade3').hide();
          $('.story3').show();
          count+=1;
          if (count>=2){
            count=0;
            $('.fade3').fadeIn();
            $('.story3').hide();
          }
        });

        $('.cl_4').click(function(){
          $('.fade4').hide();
          $('.story4').show();
          count+=1;
          if (count>=2){
            count=0;
            $('.fade4').fadeIn();
            $('.story4').hide();
          }
        });


$('.add').click(function(){
  
})





});
