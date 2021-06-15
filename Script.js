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
			document.getElementById("title_name").innerHTML = name;
		document.getElementById("content_mod").innerHTML = content;
}

