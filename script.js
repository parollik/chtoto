function funk1() {
  alert("111");
}
$("#text").click(function() {
  //alert( "pelmeni" );
//  document.getElementById("text").innerHTML = "новый текст";

  //alert($("#text").attr("value"));
if( $("#text").attr("value") == 1) {
document.getElementById("text").innerHTML = "новый текст";
  $("#text").attr("value", "2");

}
else if( $("#text").attr("value") == 2){
  document.getElementById("text").innerHTML = "старый текст";
    $("#text").attr("value", "1");
}






});

//funk1();
