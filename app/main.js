
$(document).ready(function() {
    $('#fullPage').fullpage({
    	continuousVertical: true,
    	slidesNavigation: true,
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        responsive: 900,
        scrollBar: false,
        easing: 'easeOutExpo',
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
    	afterRender: function () {
        //Start the whole shabang when DOM and APIs are ready by calling initialize()
        initialize();
    }
    });
    $('.background').click(function(){
    	$.fn.fullpage.moveSectionDown();
	});
});

$(document).ready(function(){
    $(".next").click(function(){
        $.fn.fullpage.moveSlideRight();
    });
    $(".prev").click(function(){
        $.fn.fullpage.moveSlideLeft();
    });
});

function initialize() {
	var myStyles = [
		{
			featureType: "all",
		    stylers: [
		      { "visibility": "simplified" },
		      { "lightness": -50 },
		      { "saturation": -100 },
		      { "invert_lightness": true },
		      { "gamma": 0.40 }
		    ]
		  }
		]
    var locations = [
        ['Мы тут!', 47.191693, 39.635001, 1],
    ];

    //Setup map
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 18,
        center: new google.maps.LatLng(47.191693, 39.635001),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: myStyles,
        disableDefaultUI: true
    });

    //Create a single infowindow that will be shared by all markers
    infowindow = new google.maps.InfoWindow();
    iterator = 0; //Setup global iterator to go through markers
    for (var i = 0; i < locations.length; i++)
    setTimeout(function () {
        //i can't be passed through because, by the time setTimeout executes, i == locations.length
        addMarker(locations);
    }, i * 500); //Execute addMarker every 500ms
}

function addMarker(locations) {
    //Use loc as the location array
    var image = {
        url: 'images/bull1.png'
    }
    var loc = locations[iterator++];
    //Create new marker and place on `map`
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(loc[1], loc[2]),
        map: map,
        icon: image,
        draggable: false,
        animation: google.maps.Animation.DROP
    });

    //Add an event listener to the marker
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(loc[0]);
        infowindow.open(map, marker);
    });

}

$(document).ready(function(){
  var feed = new Instafeed({
    get: 'tagged',
    tagName: 'yourockdude',
    clientId: 'ae29b9a2b62a4b76868a9600ee2fcd4c'
  });
  feed.run();
  module.exports = Instafeed
});


