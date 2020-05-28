var map, markers = [], infoWindow;


function initMap() {
    var Nepal = {
        lat: 34.063584,
        lng: -118.376354

    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: Nepal,
        zoom: 8,
        styles:[
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#165c64"
                    },
                    {
                        "saturation": 34
                    },
                    {
                        "lightness": -69
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#b7caaa"
                    },
                    {
                        "saturation": -14
                    },
                    {
                        "lightness": -18
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#cbdac1"
                    },
                    {
                        "saturation": -6
                    },
                    {
                        "lightness": -9
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#8d9b83"
                    },
                    {
                        "saturation": -89
                    },
                    {
                        "lightness": -12
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#d4dad0"
                    },
                    {
                        "saturation": -88
                    },
                    {
                        "lightness": 54
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#bdc5b6"
                    },
                    {
                        "saturation": -89
                    },
                    {
                        "lightness": -3
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#bdc5b6"
                    },
                    {
                        "saturation": -89
                    },
                    {
                        "lightness": -26
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#c17118"
                    },
                    {
                        "saturation": 61
                    },
                    {
                        "lightness": -45
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#8ba975"
                    },
                    {
                        "saturation": -46
                    },
                    {
                        "lightness": -28
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#a43218"
                    },
                    {
                        "saturation": 74
                    },
                    {
                        "lightness": -51
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#3a3935"
                    },
                    {
                        "saturation": 5
                    },
                    {
                        "lightness": -57
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#cba923"
                    },
                    {
                        "saturation": 50
                    },
                    {
                        "lightness": -46
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });
    infoWindow = new google.maps.InfoWindow();
    displayStore();

    showMarker();
}

function displayStore() {

    var storeHTML = ''
    stores.forEach((element, i) => {
        var address = element.addressLines;
        var phoenNumber = element.phoneNumber;
        storeHTML +=
            `<div class="store-container ">
                        <div class="store-info-container">
                            <div class="store-address">
                                <span style="display: block;"><i style="color:orange;" class="fas fa-map-marker-alt"></i>&nbsp&nbsp&nbsp${address[0]}</span>
                                <span style="margin-left:20px;">&nbsp&nbsp&nbsp${address[1]}</span>
                            </div>
                            <div  class="phone-number"><i style="color:orange;" class="fas fa-phone-alt"></i>&nbsp&nbsp&nbsp${phoenNumber}</div>
                        </div>
        
                        <div class="store-number-container">
                            <div class="number">${i + 1}</div>
                        </div>
                    </div>`

    });
    document.querySelector('.store-list').innerHTML = storeHTML;
}

function showMarker() {
    var bounds = new google.maps.LatLngBounds();
    stores.forEach((element, i) => {
        var latlng = new google.maps.LatLng(
            element.coordinates.latitude,
            element.coordinates.longitude
        )
        var name = element.name;
        var address = element.addressLines[0]

        bounds.extend(latlng);
        createMarker(latlng, name, address)
    })
    map.fitBounds(bounds)
}

function createMarker(latlng, name, address) {
  // InfoWindow content
  var content = '<div id="iw-container">' +
                    '<div class="iw-title text-center">Times Square Tower</div>' +
                    '<div class="iw-subTitle text-center">Midtown Manhataan, New York City</div>' +
                    '<div class="iw-content">' +
                      '<img src="https://scontent.fktm4-1.fna.fbcdn.net/v/t1.0-9/73404016_2573255626074114_2323104323862528000_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=3yOyqrOFvMIAX94-doI&_nc_ht=scontent.fktm4-1.fna&oh=0196ec8aa222841f0106361df20da145&oe=5EF54E9B" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                      '<div class="des lead">Times Square Tower is a 47-story,726-foot(221m) office tower located at 7 Times Square in Midtown Manhattan, New York City.</div>' +
                    '</div>' +
                    '<div class="button text-center">'+
 '                   <a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Read More</a>'+
`<a href="https://www.google.com/maps/search/?api=1&query=${address}" class="btn btn-primary btn-lg " tabindex="-1" role="button" aria-disabled="true">Visit in US</a>`+
                    '</div>'+
                  '</div>';
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                  scale: 5,
                  strokeWeight:2,
                  strokeColor:"#B40404"
        },
        animation:google.maps.Animation.DROP,
        draggable:true,
        map: map
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}


  
/*
  // A new Info Window is created and set content
  var infowindow = new google.maps.InfoWindow({
    content: content,

    // Assign a maximum value for the width of the infowindow allows
    // greater control over the various content elements
    maxWidth: 350
  });
   
  // marker options
  var marker = new google.maps.Marker({
    position: factory,
    map: map,
    title:"Porcelain Factory of Vista Alegre"
  });

  // This event expects a click on a marker
  // When this event is fired the Info Window is opened.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  // Event that closes the Info Window with a click on the map
  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  
  google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '115px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });
}
google.maps.event.addDomListener(window, 'load', initialize);*/