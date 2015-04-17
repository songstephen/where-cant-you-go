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
  var swBound = new google.maps.LatLng(33.879933, -84.542198);
  var neBound = new google.maps.LatLng(33.962585, -84.260674);
  var bounds = new google.maps.LatLngBounds(swBound, neBound);

  // It's the MARTA map.
  //http://i.imgur.com/XxhdXKl.png
  var srcImage = '';

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
        },
        {
          coords: [33.860391, -84.464688],
          neighborhood: 'Vinings',
          time: 96
        },
        {
          coords: [33.865490, -84.471134],
          neighborhood: 'Vinings',
          time: 93
        },
        {
          coords: [33.866652, -84.468319],
          neighborhood: 'Vinings',
          time: 94
        },
        {
          coords: [33.884698, -84.458658],
          neighborhood: 'Cumberland',
          time: 67
        },
        {
          coords: [33.892579, -84.43147],
          neighborhood: 'Cumberland',
          time:148
        },
        {
          coords: [33.892579, -84.43147],
          neighborhood: 'Peoplesville',
          time:51
        },
        {
          coords: [33.892579, -84.43147],
          neighborhood: 'Peoplesville',
          time:51
        },
        {
          coords: [33.788659, -84.332884],
          neighborhood: 'Druid Hills',
          time: 22
        },
        {
          coords: [33.790371, -84.348849],
          neighborhood: 'Druid Hills',
          time: 49
        },
        {
          coords: [33.792012, -84.333914],
          neighborhood: 'Druid Hills',
          time: 24
        },
        {
          coords: [33.781383, -84.323872],
          neighborhood: 'Druid Hills',
          time: 39
        },
        {
          coords: [33.779956, -84.357861],
          neighborhood: 'Virginia Highlands',
          time: 46
        },
        {
          coords: [33.782952, -84.350651],
          neighborhood: 'Virginia Highlands',
          time: 45
        },
        {
          coords: [33.784593, -84.348334],
          neighborhood: 'Virginia Highlands',
          time: 23
        },
        {
          coords: [33.787732, -84.361466],
          neighborhood: 'Virginia Highlands',
          time: 50
        },
        {
          coords: [33.783238, -84.316405],
          neighborhood: 'Decatur',
          time: 41
        },
        {
          coords: [33.776246, -84.306363],
          neighborhood: 'Decatur',
          time: 49
        },
        {
          coords: [33.774463, -84.295806],
          neighborhood: 'Decatur',
          time: 30
        },
        {
          coords: [33.779082, -84.284154],
          neighborhood: 'Decatur',
          time: 41
        },
        {
          coords: [33.762064, -84.285815],
          neighborhood: 'Belvedere Park',
          time: 60
        },
        {
          coords: [33.756106, -84.279291],
          neighborhood: 'Belvedere Park',
          time: 52
        },
        {
          coords: [33.749897, -84.280708],
          neighborhood: 'Belvedere Park',
          time: 61
        },
        {
          coords: [33.753108, -84.289977],
          neighborhood: 'Belvedere Park',
          time: 48
        },
        {
          coords: [33.754604, -84.339383],
          neighborhood: 'Edgewood',
          time: 43
        },
        {
          coords: [33.755603, -84.343932],
          neighborhood: 'Edgewood',
          time: 32
        },
        {
          coords: [33.750108, -84.343760],
          neighborhood: 'Edgewood',
          time: 48
        },
        {
          coords: [33.752321, -84.330371],
          neighborhood: 'Edgewood',
          time: 45
        },
        {
          coords: [33.756317, -84.325736],
          neighborhood: 'Edgewood',
          time: 50
        },
        {
          coords: [33.757530, -84.315093],
          neighborhood: 'Edgewood',
          time: 52
        },
        {
          coords: [33.756759, -84.371000],
          neighborhood: 'Old Fourth Ward',
          time: 32
        },
        {
          coords: [33.754653, -84.375507],
          neighborhood: 'Old Fourth Ward',
          time: 38
        },
        {
          coords: [33.757954, -84.360658],
          neighborhood: 'Old Fourth Ward',
          time: 31
        },
        {
          coords: [33.758560, -84.354542],
          neighborhood: 'Old Fourth Ward',
          time: 18
        },
        {
          coords: [33.748088, -84.375657],
          neighborhood: 'Old Fourth Ward',
          time: 26
        },
        {
          coords: [33.749301, -84.356731],
          neighborhood: 'Old Fourth Ward',
          time: 44
        },
        {
          coords: [33.754689, -84.368147],
          neighborhood: 'Old Fourth Ward',
          time: 33
        },
        {
          coords: [33.745519, -84.366301],
          neighborhood: 'Old Fourth Ward',
          time: 38
        },
        {
          coords: [33.738381, -84.384111],
          neighborhood: 'Grant Park',
          time: 53
        },
        {
          coords: [33.739167, -84.366602],
          neighborhood: 'Grant Park',
          time: 68
        },
        {
          coords: [33.731815, -84.354414],
          neighborhood: 'Grant Park',
          time: 68
        },
        {
          coords: [33.724105, -84.365314],
          neighborhood: 'Grant Park',
          time: 67
        },
        {
          coords: [33.716109, -84.357504],
          neighborhood: 'Grant Park',
          time: 99
        },
        {
          coords: [33.717395, -84.371580],
          neighborhood: 'Grant Park',
          time: 69
        },
        {
          coords: [33.726461, -84.384712],
          neighborhood: 'Grant Park',
          time: 60
        },
        {
          coords: [33.733956, -84.385656],
          neighborhood: 'Grant Park',
          time: 54
        },
        {
          coords: [33.733742, -84.375185],
          neighborhood: 'Grant Park',
          time: 56
        },
        {
          coords: [33.725247, -84.376901],
          neighborhood: 'Grant Park',
          time: 68
        },
        {
          coords: [33.730458, -84.364885],
          neighborhood: 'Grant Park',
          time: 62
        },
        {
          coords: [33.723463, -84.352440],
          neighborhood: 'Grant Park',
          time: 67
        },
        {
          coords: [33.715039, -84.387201],
          neighborhood: 'Southeastern',
          time: 76
        },
        {
          coords: [33.710826, -84.378446],
          neighborhood: 'Southeastern',
          time: 59
        },
        {
          coords: [33.705543, -84.386428],
          neighborhood: 'Southeastern',
          time: 100
        },
        {
          coords: [33.705043, -84.399475],
          neighborhood: 'Southeastern',
          time: 66
        },
        {
          coords: [33.695117, -84.394153],
          neighborhood: 'Southeastern',
          time: 105
        },
        {
          coords: [33.693316, -84.379241],
          neighborhood: 'Southeastern',
          time: 69
        },
        {
          coords: [33.700243, -84.356153],
          neighborhood: 'Southeastern',
          time: 82
        },
        {
          coords: [33.694959, -84.363534],
          neighborhood: 'Southeastern',
          time: 84
        },
        {
          coords: [33.699457, -84.380615],
          neighborhood: 'Southeastern',
          time: 68
        },
        {
          coords: [33.702599, -84.396236],
          neighborhood: 'Southeastern',
          time: 69
        },
        {
          coords: [33.706312, -84.374435],
          neighborhood: 'Southeastern',
          time: 66
        },
        {
          coords: [33.705741, -84.361474],
          neighborhood: 'Southeastern',
          time: 71
        },
        {
          coords: [33.692673, -84.391515],
          neighborhood: 'Southeastern',
          time: 62
        },
        {
          coords: [33.686746, -84.393146],
          neighborhood: 'Southeastern',
          time: 102
        },
        {
          coords: [33.684246, -84.384305],
          neighborhood: 'Southeastern',
          time: 84
        },
        {
          coords: [33.691888, -84.371259],
          neighborhood: 'Southeastern',
          time: 96
        },
        {
          coords: [33.686703, -84.357051],
          neighborhood: 'Southeastern',
          time: 77
        },
        {
          coords: [33.683275, -84.368381],
          neighborhood: 'Southeastern',
          time: 92
        },
        {
          coords: [33.679791, -84.404719],
          neighborhood: 'Hapeville',
          time: 66
        },
        {
          coords: [33.672077, -84.400943],
          neighborhood: 'Hapeville',
          time: 76
        },
        {
          coords: [33.676291, -84.389527],
          neighborhood: 'Hapeville',
          time: 62
        },
        {
          coords: [33.670505, -84.392789],
          neighborhood: 'Hapeville',
          time: 95
        },
        {
          coords: [33.677505, -84.393561],
          neighborhood: 'Hapeville',
          time: 108
        },
        {
          coords: [33.673077, -84.384635],
          neighborhood: 'Hapeville',
          time: 67
        },
        {
          coords: [33.679791, -84.377683],
          neighborhood: 'Hapeville',
          time: 91
        },
        {
          coords: [33.671362, -84.378627],
          neighborhood: 'Hapeville',
          time: 74
        },
        {
          coords: [33.670862, -84.367383],
          neighborhood: 'Hapeville',
          time: 82
        },
        {
          coords: [33.668005, -84.379571],
          neighborhood: 'Hapeville',
          time: 68
        },
        {
          coords: [33.671434, -84.390986],
          neighborhood: 'Hapeville',
          time: 111
        },
        {
          coords: [33.659432, -84.391930],
          neighborhood: 'Hapeville',
          time: 92
        },
        {
          coords: [33.648358, -84.386008],
          neighborhood: 'Hapeville',
          time: 104
        },
        {
          coords: [33.658647, -84.380343],
          neighborhood: 'Hapeville',
          time: 70
        },
        {
          coords: [33.653574, -84.374249],
          neighborhood: 'Hapeville',
          time: 79
        },
        {
          coords: [33.658004, -84.370559],
          neighborhood: 'Hapeville',
          time: 84
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
  img.style.height = '400%';
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