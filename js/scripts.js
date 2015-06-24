$(document).ready(function(){
	console.log('dom ready');
	//all code here
	
	//my current projects
	$(".project-pics").hide();
	$("#web-images").on("click", "button", function() {
       $(".project-pics").slideToggle();
  });
  	$(".project-pics").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });

  	//badge logos
	$(".badge-logo").hide();
	$("#web-badges").on("click", "button", function() {
       $(".badge-logo").slideToggle();
  });
  	$(".badge-logo").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });

  	//skill set
	$(".skills-content").hide();
	$("#web-skills").on("click", "button", function() {
       $(".skills-content").slideToggle();
  });
  	$(".skills-content").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  });


});