var log;
var data_load;
var data_load_body = "";
$(document).ready(function(){
$.ajax({
  url: 'https://api.github.com/repos/asnise/NPC-Ann-SDV/releases/latest' ,
  format: 'json',
  dataType: "json",
  success(data){
	  data_load = data;
	  data_load_body = data_load.body.toString();
     let version = $('<h4>').text("An In Stardew Version " + data.tag_name);
     $('#ver')
     .append(version);
  }
});
});

function cansel_win(idtag ,name,content)
{
	var win_alert = document.getElementById(idtag);
	if (win_alert.style.display === "block")
	{
		win_alert.style.display = "none";
	}
	else
	{
		win_alert.style.display = "block";
	}
	if(content = "log")
	{
		content = data_load_body.slice(0,75).replace("\n-","<br>-").replace("\n-","<br>-");
		console.log(content);
	}
		document.getElementById("title_name").innerHTML = name;
		document.getElementById("content_mod").innerHTML = content;
}

