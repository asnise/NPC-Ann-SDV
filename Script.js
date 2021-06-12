$(document).ready(function(){
$.ajax({
  url: 'https://api.github.com/repos/asnise/NPC-Ann-SDV/releases/latest' ,
  format: 'json',
  dataType: "json",
  success(data){
     let version = $('<h4>').text("An In Stardew Version " + data.tag_name);
     $('#ver')
     .append(version);
  }
});
});

