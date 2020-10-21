/*

1. import jquery
2. make the image appear after you click the appropriate button
3. make the image larger after you click the appropriate button
4. make the image more transparent after you click the appropriate button
5. make the font color of the h2 tag to change to blue on click
6. When the approprite button is clicked, add onto the respective div with a p tag that has your name as text
7. Create text that makes the whole dom disappear except for that text when you hover over it
*/

$('#button-pic').click(function(){
  $('#name-p').show();
});
$('#button-pic-two').click(function(){
	$("img").css("width", "500px");
});
$('#button-pic-three').click(function(){
	$("img").css("opacity", "0.5");
});
$('.change-br').click(function(){
	$("h2").css("color", "blue");
});
$('#button-text').click(function(){
	$( ".your-name-p-tag" ).append( "<p>Juan Carvajal</p>" );
});
$('#hover').hover(function(){
	$( ".delete" ).remove();
});
