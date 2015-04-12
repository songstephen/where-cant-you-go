/*

Google Maps Stuff

*/

var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();


// Initialize the map and the custom overlay.

function initialize() {

  // Create an array of styles.
  var styles = [
    {
      stylers: [
        { saturation: -100 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { saturation: -100 },
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { saturation: -100}
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 10,
    center: { lat: 33.886021, lng: -84.364357},
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  var swBound = new google.maps.LatLng(33.843933, -84.542198);
  var neBound = new google.maps.LatLng(33.962585, -84.260674);
  var bounds = new google.maps.LatLngBounds(swBound, neBound);

  // It's the MARTA map.
  var srcImage = 'http://i.imgur.com/XxhdXKl.png';

  // The custom USGSOverlay object contains the USGS image,
  // the bounds of the image, and a reference to the map.
  overlay = new USGSOverlay(bounds, srcImage, map);

  // Little 5 Points beacon
  var l5p = new google.maps.Marker({
       position: new google.maps.LatLng(33.766324, -84.349422),
       map: map,
       title: 'Little Five Points.'
   });

  // Setup the different icons and shadows
      var iconURLPrefix = 'http://maps.google.com/mapfiles/ms/icons/';
      
      var icons = [
        iconURLPrefix + 'blue-dot.png', //0-15
        iconURLPrefix + 'green-dot.png', //15-30
        iconURLPrefix + 'yellow-dot.png', //30-60
        iconURLPrefix + 'orange-dot.png', // 60-90
        iconURLPrefix + 'red-dot.png' //90+
      ]

      var iconsLength = icons.length;

      // locations
      // travel time is dictacted by leaving at 5:00 PM, time dictated from the time it takes to get there (starting from 5:00 PM, so waiting for the bus factors in), least walking, favoring bus and subway. Time is expressed as an integer of the minutes it takes to get there.
      // Scenario: You get out of work at 5:00 PM. It is raining so you want to take the route that involves the least walking.
      // Things like travel time matter—neighborhoods with bus service that is more intermittent will affect travel times and how long people have to wait

      var locations = [
        {
          coords: [33.769353, -84.420040],
          neighborhood: 'Bankhead',
          time: 83
        },
        {
          coords: [33.767462, -84.415963],
          neighborhood: 'Bankhead',
          time: 53
        },
        {
          coords: [33.767391, -84.410384],
          neighborhood: 'Bankhead',
          time: 53
        },
        {
          coords: [33.767109, -84.420096],
          neighborhood: 'Bankhead',
          time: 95
        },
        {
          coords: [33.772772, -84.428108],
          neighborhood: 'Bankhead',
          time: 43
        },
        {
          coords: [33.775661, -84.423988],
          neighborhood: 'Bankhead',
          time: 77
        },
        {
          coords: [33.780924, -84.409209],
          neighborhood: 'Howell Mill',
          time: 53
        },
        {
          coords: [33.784491, -84.412428],
          neighborhood: 'Howell Mill',
          time: 53
        },
        {
          coords: [33.778320, -84.408351],
          neighborhood: 'Howell Mill',
          time: 73
        },
        {
          coords: [33.766637, -84.374663],
          neighborhood: 'Old Fourth Ward',
          time: 31
        },
        {
          coords: [33.767386, -84.378010],
          neighborhood: 'Old Fourth Ward',
          time: 44
        },
        {
          coords: [33.769027, -84.369126],
          neighborhood: 'Old Fourth Ward',
          time: 23
        },
        {
          coords: [33.764675, -84.365178],
          neighborhood: 'Old Fourth Ward',
          time: 53
        },
        {
          coords: [33.734951, -84.344879],
          neighborhood: 'East Atlanta',
          time: 48
        },
        {
          coords: [33.734095, -84.335524],
          neighborhood: 'East Atlanta',
          time: 43
        },
        {
          coords: [33.737235, -84.337584],
          neighborhood: 'East Atlanta',
          time: 43
        },
        {
          coords: [33.733024, -84.330717],
          neighborhood: 'East Atlanta',
          time: 91
        },
        {
          coords: [33.729669, -84.337755],
          neighborhood: 'East Atlanta',
          time: 31
        }
      ];

      for (var i = 0; i < locations.length; i++) {
          var origin = locations[i];
          var myLatLng = new google.maps.LatLng(origin.coords[0], origin.coords[1]);
          var iconNum;
          if (origin.time < 15) {
            iconNum = 0; //blue
          } else if (origin.time < 30) {
            iconNum = 1; //green
          } else if (origin.time < 60) {
            iconNum = 2; //yellow
          } else if (origin.time < 90) {
            iconNum = 3; //orange
          } else {
            iconNum = 4; //red
          }
          var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              icon: icons[iconNum],
              title: origin.neighborhood + ": " + origin.time + " min away"
          });
        }
}
// [END region_initialization]

// [START region_constructor]
/** @constructor */
function USGSOverlay(bounds, image, map) {

  // Initialize all properties.
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;

  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay.
  this.setMap(map);
}
// [END region_constructor]

// [START region_attachment]
/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
USGSOverlay.prototype.onAdd = function() {

  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  // Create the img element and attach it to the div.
  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.position = 'absolute';
  div.appendChild(img);

  this.div_ = div;

  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};
// [END region_attachment]

// [START region_drawing]
USGSOverlay.prototype.draw = function() {

  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();

  // Retrieve the south-west and north-east coordinates of this overlay
  // in LatLngs and convert them to pixel coordinates.
  // We'll use these coordinates to resize the div.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  // Resize the image's div to fit the indicated dimensions.
  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
};
// [END region_drawing]

// [START region_removal]
// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
USGSOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};
// [END region_removal]

google.maps.event.addDomListener(window, 'load', initialize);