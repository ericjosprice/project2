/* eslint-disable no-undef */
$(document).ready(function(){
  $("#filter").on("click",function(event){
      event.preventDefault();
      const name = $("#inputGroupSelect03").val();
      $(".gig-card").each(function(i,element){
          const checkName = $(element).children(".card-text").children(".card-title").text()
          
          if(name === checkName){
              $(element).show();
          }else if(name === "All Venues"){
              $(element).show();
          }else{
              $(element).hide();
          }
      })
  })
})