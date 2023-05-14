$(document).ready(function () {
	$.getJSON("https://api.countapi.xyz/hit/asnise.github.io/visits", function (response) {
		$("#visits").text(response.value + " views");
	});

	$.ajax({
		url: 'https://api.github.com/repos/asnise/NPC-Ann-SDV/releases/latest',
		format: 'json',
		dataType: "json",
		success(data) {
			data_load = data;
			data_load_body = data_load.body.toString();
			update_log = data_load_body.split("---");
			let version = $('<p>').text("V." + data.tag_name);
			$('#ver')
				.append(version);
		}
	});
});


function showInfoWindow() {
	var infoWindow = document.getElementById("Timetable");
	infoWindow.style.display = "block";
  }

  function hideInfoWindow() {
	var infoWindow = document.getElementById("Timetable");
	infoWindow.style.display = "none";
  }



  function showInfoWindow_gift() {
	var infoWindow = document.getElementById("Giftitem");
	infoWindow.style.display = "block";
  }

  function hideInfoWindow_gift() {
	var infoWindow = document.getElementById("Giftitem");
	infoWindow.style.display = "none";
  }

  function showInfoWindow_Requir() {
	var infoWindow = document.getElementById("Requir");
	infoWindow.style.display = "block";
  }

  function hideInfoWindow_Requir() {
	var infoWindow = document.getElementById("Requir");
	infoWindow.style.display = "none";
  }

  