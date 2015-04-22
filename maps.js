/*

Google Maps Stuff

*/

// Initialize the additional points for the map
  var heatmap = new extrapoints();



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
    zoom: 11,
    center: { lat: 33.778528, lng: -84.372865},
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var pin = new Audio('pins/pins-26.mp3');

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  var swBound = new google.maps.LatLng(33.879933, -84.542198);
  var neBound = new google.maps.LatLng(33.962585, -84.260674);
  var bounds = new google.maps.LatLngBounds(swBound, neBound);


  // Little 5 Points beacon
  var l5p = new google.maps.Marker({
       position: new google.maps.LatLng(33.766324, -84.349422),
       map: map,
       title: 'Little Five Points.'
   });

  heatmap.code = function() { pin.play(); }
  heatmap.load();



  // Setup the different icons and shadows

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
        },
        {
          coords: [33.758498, -84.433376],
          neighborhood: 'Dixie Hills',
          time: 64
        },
        {
          coords: [33.755073, -84.441259],
          neighborhood: 'Dixie Hills',
          time: 75
        },
                {
          coords: [33.757464, -84.438213],
          neighborhood: 'Dixie Hills',
          time: 92
        },
        {
          coords: [33.755329, -84.44125],
          neighborhood: 'Dixie Hills',
          time: 76
        },
        {
          coords: [33.751700, -84.441244],
          neighborhood: 'Dixie Hills',
          time: 71
        },
        {
          coords: [33.757321, -84.443632],
          neighborhood: 'Dixie Hills',
          time: 71
        },
        {
          coords: [33.767042, -84.447222],
          neighborhood: 'Dixie Hills',
          time: 69
        },
        {
          coords: [33.765380, -84.463862],
          neighborhood: 'Dixie Hills',
          time: 89
        },
        {
          coords: [33.761751, -84.455671],
          neighborhood: 'Dixie Hills',
          time: 53
        },
        {
          coords: [33.752807, -84.456121],
          neighborhood: 'Dixie Hills',
          time: 58
        },
        {
          coords: [33.770058, -84.469274],
          neighborhood: 'Carey Park',
          time: 60
        },
        {
          coords: [33.766062, -84.467901],
          neighborhood: 'Carey Park',
          time: 64
        },
        {
          coords: [33.760996, -84.470626],
          neighborhood: 'Carey Park',
          time: 59
        },
                {
          coords: [33.754466, -84.461957],
          neighborhood: 'Carey Park',
          time: 61
        },
        {
          coords: [33.759676, -84.466699],
          neighborhood: 'Carey Park',
          time: 67
        },
        {
          coords: [33.765634, -84.476634],
          neighborhood: 'Carey Park',
          time: 72
        },
                {
          coords: [33.764546, -84.478759],
          neighborhood: 'Carey Park',
          time: 67
        },
                {
          coords: [33.772371, -84.49352],
          neighborhood: 'Carey Park',
          time: 80
        },
        {
          coords: [33.777782, -84.483997],
          neighborhood: 'Carey Park',
          time: 65
        },
        {
          coords: [33.771484, -84.484111],
          neighborhood: 'Carey Park',
          time: 72
        },
                {
          coords: [33.784972, -84.427035],
          neighborhood: 'Blandtown',
          time: 62
        },
                {
          coords: [33.786464, -84.437648],
          neighborhood: 'Rockdale',
          time: 68
        },
                {
          coords: [33.784947, -84.439391],
          neighborhood: 'Rockdale',
          time: 70
        },
                {
          coords: [33.796917, -84.451729],
          neighborhood: 'Northwestern',
          time: 69
        },
                {
          coords: [33.788635, -84.454677],
          neighborhood: 'Rockdale',
          time: 81
        },
                {
          coords: [33.793904, -84.425541],
          neighborhood: 'Berkeley Park',
          time: 109
        },
                {
          coords: [33.787758, -84.428015],
          neighborhood: 'Westside',
          time: 88
        },
                {
          coords: [33.802191, -84.442505],
          neighborhood: 'Northwestern',
          time: 100
        },
                {
          coords: [33.802497, -84.457892],
          neighborhood: 'Northwestern',
          time: 70
        },
                {
          coords: [33.794497, -84.461238],
          neighborhood: 'Northwestern',
          time: 83
        },
                {
          coords: [33.809683, -84.45367],
          neighborhood: 'Northwestern',
          time: 71
        },
                {
          coords: [33.799928, -84.481281],
          neighborhood: 'Northwestern',
          time: 140
        },
                {
          coords: [33.807831, -84.482639],
          neighborhood: 'McDonough',
          time: 88
        },
                {
          coords: [33.820091, -84.490459],
          neighborhood: 'McDonough',
          time: 124
        },
                {
          coords: [33.809315, -84.424062],
          neighborhood: 'Underwood Hills',
          time: 86
        },
                {
          coords: [33.818287, -84.438514],
          neighborhood: 'Underwood Hills',
          time: 94
        },
                {
          coords: [33.833783, -84.440809],
          neighborhood: 'Paces',
          time: 135
        },
                {
          coords: [33.838662, -84.456085],
          neighborhood: 'Paces',
          time: 137
        },
                {
          coords: [33.840583, -84.46605],
          neighborhood: 'McDonough',
          time: 125
        },
                {
          coords: [33.844581, -84.47097],
          neighborhood: 'McDonough',
          time: 118
        },
                {
          coords: [33.851905, -84.479246],
          neighborhood: 'McDonough',
          time: 137
        },
                {
          coords: [33.859066, -84.440265],
          neighborhood: 'Paces',
          time: 110
        },
                {
          coords: [33.876323, -84.448108],
          neighborhood: 'Paces',
          time: 78
        },
                {
          coords: [33.827891, -84.46108],
          neighborhood: 'McDonough',
          time: 85
        },
                {
          coords: [33.821846, -84.457113],
          neighborhood: 'McDonough',
          time: 91
        },
        {
          coords: [33.827785, -84.473910],
          neighborhood: 'McDonough',
          time: 85
        },
                {
          coords: [33.780077, -84.470418],
          neighborhood: 'Carey Park',
          time: 64
        },
                {
          coords: [33.786668, -84.484211],
          neighborhood: 'Carey Park',
          time: 68
        },
                {
          coords: [33.771313, -84.433894],
          neighborhood: 'Carey Park',
          time: 46
        },
                {
          coords: [33.801467, -84.476286],
          neighborhood: 'Carey Park',
          time: 139
        },
                {
          coords: [33.789772, -84.449209],
          neighborhood: 'Northwestern',
          time: 74
        },
        {
          coords: [33.775534, -84.368456],
          neighborhood: 'Midtown',
          time: 36
        },
        {
          coords: [33.781063, -84.374207],
          neighborhood: 'Midtown',
          time: 59
        },
        {
          coords: [33.775498, -84.379700],
          neighborhood: 'Midtown',
          time: 40
        },
        {
          coords: [33.775998, -84.387082],
          neighborhood: 'Midtown',
          time: 55
        },
        {
          coords: [33.785373, -84.381227],
          neighborhood: 'Midtown',
          time: 63
        },
        {
          coords: [33.793152, -84.383561],
          neighborhood: 'Midtown',
          time: 52
        },
        {
          coords: [33.793080, -84.372660],
          neighborhood: 'Midtown',
          time: 68
        },
        {
          coords: [33.805134, -84.373218],
          neighborhood: 'Midtown',
          time: 77
        },
        {
          coords: [33.802674, -84.380814],
          neighborhood: 'Midtown',
          time: 66
        },
        {
          coords: [33.804021, -84.323369],
          neighborhood: 'Druid Hills',
          time: 40
        },
        {
          coords: [33.806418, -84.366781],
          neighborhood: 'Druid Hills',
          time: 77
        },
        {
          coords: [33.795256, -84.361674],
          neighborhood: 'Druid Hills',
          time: 53
        },
        {
          coords: [33.794257, -84.350473],
          neighborhood: 'Druid Hills',
          time: 46
        },
        {
          coords: [33.800418, -84.345874],
          neighborhood: 'Druid Hills',
          time: 49
        },
        {
          coords: [33.803485, -84.360723],
          neighborhood: 'Druid Hills',
          time: 83
        },
        {
          coords: [33.808763, -84.350895],
          neighborhood: 'Druid Hills',
          time: 79
        },
        {
          coords: [33.789166, -84.338385],
          neighborhood: 'Druid Hills',
          time: 20
        },
        {
          coords: [33.780445, -84.336561],
          neighborhood: 'Druid Hills',
          time: 24
        },
        {
          coords: [33.776444, -84.328340],
          neighborhood: 'Druid Hills',
          time: 44
        },
        {
          coords: [33.820095, -84.351257],
          neighborhood: 'North Druid Hills',
          time: 51
        },
        {
          coords: [33.825799, -84.340270],
          neighborhood: 'North Druid Hills',
          time: 66
        },
        {
          coords: [33.827296, -84.330915],
          neighborhood: 'North Druid Hills',
          time: 65
        },
        {
          coords: [33.820166, -84.333060],
          neighborhood: 'North Druid Hills',
          time: 57
        },
        {
          coords: [33.816101, -84.343532],
          neighborhood: 'North Druid Hills',
          time: 47
        },
        {
          coords: [33.809683, -84.341300],
          neighborhood: 'North Druid Hills',
          time: 46
        },
        {
          coords: [33.810967, -84.328683],
          neighborhood: 'North Druid Hills',
          time: 49
        },
        {
          coords: [33.807187, -84.314607],
          neighborhood: 'North Druid Hills',
          time: 63
        },
        {
          coords: [33.819933, -84.308165],
          neighborhood: 'North Druid Hills',
          time: 62
        },
        {
          coords: [33.824033, -84.320224],
          neighborhood: 'North Druid Hills',
          time: 74
        },
        {
          coords: [33.831280, -84.327231],
          neighborhood: 'North Druid Hills',
          time: 115
        },
        {
          coords: [33.823708, -84.308975],
          neighborhood: 'North Druid Hills',
          time: 66
        },
        {
          coords: [33.817148, -84.302452],
          neighborhood: 'North Decatur',
          time: 92
        },
        {
          coords: [33.811657, -84.299533],
          neighborhood: 'North Decatur',
          time: 92
        },
        {
          coords: [33.809874, -84.305284],
          neighborhood: 'North Decatur',
          time: 63
        },
        {
          coords: [33.803527, -84.300134],
          neighborhood: 'North Decatur',
          time: 65
        },
        {
          coords: [33.798534, -84.297302],
          neighborhood: 'North Decatur',
          time: 78
        },
        {
          coords: [33.792257, -84.300392],
          neighborhood: 'North Decatur',
          time: 70
        },
        {
          coords: [33.808942, -84.299937],
          neighborhood: 'North Decatur',
          time: 73
        },
        {
          coords: [33.804163, -84.292985],
          neighborhood: 'North Decatur',
          time: 82
        },
        {
          coords: [33.812080, -84.280539],
          neighborhood: 'North Decatur',
          time: 96
        },
        {
          coords: [33.810297, -84.289122],
          neighborhood: 'North Decatur',
          time: 93
        },
        {
          coords: [33.803807, -84.285046],
          neighborhood: 'North Decatur',
          time: 75
        },
        {
          coords: [33.797994, -84.286204],
          neighborhood: 'North Decatur',
          time: 82
        },
        {
          coords: [33.748178, -84.414098],
          neighborhood: 'Morehouse',
          time: 53
        },
        {
          coords: [33.748811, -84.414253],
          neighborhood: 'Morehouse',
          time: 52
        },
        {
          coords: [33.743458, -84.412193],
          neighborhood: 'Morehouse',
          time: 56
        },
        {
          coords: [33.751880, -84.405413],
          neighborhood: 'Clark Atlanta',
          time: 65
        },
        {
          coords: [33.755591, -84.403868],
          neighborhood: 'Georgia Dome',
          time: 31
        },
        {
          coords: [33.750517, -84.425560],
          neighborhood: 'Just Us',
          time: 55
        },
        {
          coords: [33.757696, -84.423351],
          neighborhood: 'Hunter Hills',
          time: 37
        },
        {
          coords: [33.754484, -84.436827],
          neighborhood: 'Hunter Hills',
          time: 74
        },
        {
          coords: [33.756554, -84.446869],
          neighborhood: 'Dixie Hills',
          time: 48
        },
        {
          coords: [33.759979, -84.413910],
          neighborhood: 'Hunter Hills',
          time: 38
        },
        {
          coords: [33.763511, -84.393997],
          neighborhood: 'Centennial Olympic Park',
          time: 75
        },
 {
          coords: [33.757731, -84.397860],
          neighborhood: 'Georgia Dome',
          time: 29
        },
        {
          coords: [33.748026, -84.394426],
          neighborhood: 'South Downtown',
          time: 36
        },
        {
          coords: [33.754163, -84.389920],
          neighborhood: 'Five Points',
          time: 49
        },
        {
          coords: [33.751767, -84.385180],
          neighborhood: 'Georgia State',
          time: 54
        },
        {
          coords: [33.750667, -84.382925],
          neighborhood: 'Georgia State',
          time: 55
        },     
        {
          coords: [33.818656, -84.477555],
          neighborhood: 'Chattahoochee River',
          time: 101
        },
        {
          coords: [33.811382, -84.470688],
          neighborhood: 'Bolton',
          time: 83
        },
        {
          coords: [33.779712, -84.459082],
          neighborhood: 'Central Hill Park',
          time: 57
        },
        {
          coords: [33.779819, -84.446036],
          neighborhood: 'Rockdale',
          time: 58
        },
        {
          coords: [33.774147, -84.454898],
          neighborhood: 'Rockdale',
          time: 58
        },     
 {
          coords: [33.791462, -84.472542],
          neighborhood: 'Carey Park',
          time: 82
        },
        {
          coords: [33.787040, -84.469795],
          neighborhood: 'Carey Park',
          time: 82
        },
        {
          coords: [33.851121, -84.443539],
          neighborhood: 'Paces',
          time: 129
        },
        {
          coords: [33.839858, -84.445428],
          neighborhood: 'Paces',
          time: 131
        },
        {
          coords: [33.847913, -84.453925],
          neighborhood: 'Paces',
          time: 125
        },     
        {
          coords: [33.807093, -84.394187],
          neighborhood: 'Piedmont Heights',
          time: 56
        },
        {
          coords: [33.810367, -84.408125],
          neighborhood: 'Howell Mill',
          time: 75
        },
        {
          coords: [33.815495, -84.379839],
          neighborhood: 'Piedmont Heights',
          time: 76
        },
        {
          coords: [33.822822, -84.367147],
          neighborhood: 'Lindbergh',
          time: 55
        },
        {
          coords: [33.822680, -84.379249],
          neighborhood: 'Lindbergh',
          time: 73
        },     
        {
          coords: [33.828740, -84.367491],
          neighborhood: 'Lindbergh',
          time: 70
        },
        {
          coords: [33.830844, -84.396501],
          neighborhood: 'Wyngate',
          time: 91
        },
        {
          coords: [33.827172, -84.403824],
          neighborhood: 'Wyngate',
          time: 83
        },
        {
          coords: [33.821254, -84.409977],
          neighborhood: 'Atlanta Memorial Park',
          time: 99
        },
        {
          coords: [33.818116, -84.412037],
          neighborhood: 'Atlanta Memorial Park',
          time: 75
        },   
        {
          coords: [33.809773, -84.412895],
          neighborhood: 'Howell Mill',
          time: 70
        },
        {
          coords: [33.824605, -84.402166],
          neighborhood: 'Woodfield',
          time: 104
        },
        {
          coords: [33.823143, -84.409054],
          neighborhood: 'Woodfield',
          time: 96
        },
        {
          coords: [33.821748, -84.393273],
          neighborhood: 'Peachtree Battle Avenue',
          time: 68
        },
        {
          coords: [33.820006, -84.395965],
          neighborhood: 'Peachtree Battle Avenue',
          time: 74
        },     
        {
          coords: [33.827243, -84.389613],
          neighborhood: 'Wyngate',
          time: 70
        },
        {
          coords: [33.816369, -84.398304],
          neighborhood: 'Peachtree Creek',
          time: 80
        },
        {
          coords: [33.809898, -84.388833],
          neighborhood: 'Brookwood Valley',
          time: 62
        },
        {
          coords: [33.806514, -84.402103],
          neighborhood: 'Piedmont',
          time: 71
        },
        {
          coords: [33.796265, -84.411897],
          neighborhood: 'Berkeley Park',
          time: 66
        },
              {
          coords: [33.797168, -84.399579],
          neighborhood: 'Loring Heights',
          time: 63
        },
        {
          coords: [33.791105, -84.396919],
          neighborhood: 'Atlantic Station',
          time: 71
        },
        {
          coords: [33.774073, -84.396383],
          neighborhood: 'Georgia Tech',
          time: 68
        },
        {
          coords: [33.836776, -84.390252],
          neighborhood: 'Peachtree Heights West',
          time: 83
        },
        {
          coords: [33.833247, -84.393385],
          neighborhood: 'Peachtree Heights West',
          time: 80
        },     
        {
          coords: [33.829626, -84.421793],
          neighborhood: 'Howell Mill',
          time: 84
        },
        {
          coords: [33.839215, -84.406129],
          neighborhood: 'Arden',
          time: 85
        },
        {
          coords: [33.838038, -84.377333],
          neighborhood: 'Buckhead',
          time: 70
        },
        {
          coords: [33.841427, -84.427430],
          neighborhood: 'Howell Mill',
          time: 84
        },
        {
          coords: [33.840699, -84.387402],
          neighborhood: 'Buckhead',
          time: 87
        },
              {
          coords: [33.847971, -84.372210],
          neighborhood: 'Buckhead',
          time: 78
        },
        {
          coords: [33.836244, -84.413323],
          neighborhood: 'Arden',
          time: 87
        },
        {
          coords: [33.829453, -84.410165],
          neighborhood: 'Arden',
          time: 76
        },
        {
          coords: [33.847704, -84.381670],
          neighborhood: 'Buckhead',
          time: 91
        },
        {
          coords: [33.843355, -84.387077],
          neighborhood: 'Buckhead',
          time: 81
        },     
        {
          coords: [33.849201, -84.401926],
          neighborhood: 'Tuxedo Park',
          time: 102
        },
        {
          coords: [33.847332, -84.412701],
          neighborhood: 'Tuxedo Park',
          time: 92
        },
        {
          coords: [33.856822, -84.371810],
          neighborhood: 'Buckhead',
          time: 96
        },
        {
          coords: [33.853115, -84.391937],
          neighborhood: 'Buckhead',
          time: 99
        },
        {
          coords: [33.861481, -84.424849],
          neighborhood: 'Northside',
          time: 127
        },
        {
          coords: [33.861410, -84.409485],
          neighborhood: 'Northside',
          time: 109
        },
        {
          coords: [33.874604, -84.414720],
          neighborhood: 'Mt. Paran',
          time: 119
        },
        {
          coords: [33.872537, -84.398498],
          neighborhood: 'Chastain Park',
          time: 118
        },
        {
          coords: [33.860973, -84.388624],
          neighborhood: 'Chastain Park',
          time: 91
        },
        {
          coords: [33.862612, -84.397637],
          neighborhood: 'Chastain Park',
          time: 104
        },     
        {
          coords: [33.870901, -84.437877],
          neighborhood: 'Whitewater Creek',
          time: 117
        },
        {
          coords: [33.878717, -84.437382],
          neighborhood: 'Whitewater Creek',
          time: 132
        },
        {
          coords: [33.874436, -84.427282],
          neighborhood: 'Mt. Paran',
          time: 132
        },
        {
          coords: [33.897042, -84.445613],
          neighborhood: 'Cumberland',
          time: 104
        },     
        {
          coords: [33.896635, -84.428175],
          neighborhood: 'Sandy Springs',
          time: 137
        },
        {
          coords: [33.897633, -84.395560],
          neighborhood: 'Sandy Springs',
          time: 113
        },
        {
          coords: [33.908461, -84.361914],
          neighborhood: 'Sandy Springs',
          time: 83
        },
        {
          coords: [33.891733, -84.392340],
          neighborhood: 'Sandy Springs',
          time: 113
        },
        {
          coords: [33.903737, -84.409492],
          neighborhood: 'Sandy Springs',
          time: 137
        },     
        {
          coords: [33.911715, -84.387090],
          neighborhood: 'Sandy Springs',
          time: 83
        },
        {
          coords: [33.895473, -84.411209],
          neighborhood: 'Sandy Springs',
          time: 137
        },
        {
          coords: [33.896399, -84.370353],
          neighborhood: 'Sandy Springs',
          time: 83
        },
        {
          coords: [33.888776, -84.379366],
          neighborhood: 'Sandy Springs',
          time: 83
        },
        {
          coords: [33.901742, -84.366749],
          neighborhood: 'Sandy Springs',
          time: 83
        },     
        {
          coords: [33.871277, -84.373067],
          neighborhood: 'Buckhead',
          time: 83
        },
        {
          coords: [33.855436, -84.377532],
          neighborhood: 'Buckhead',
          time: 83
        },
        {
          coords: [33.883585, -84.411578],
          neighborhood: 'Sandy Springs',
          time: 83
        },
        {
          coords: [33.825546, -84.356828],
          neighborhood: 'Pine Hills',
          time: 62
        },
        {
          coords: [33.833745, -84.357343],
          neighborhood: 'Pine Hills',
          time: 83
        },     
        {
          coords: [33.830238, -84.349513],
          neighborhood: 'Pine Hills',
          time: 77
        },
        {
          coords: [33.837652, -84.345222],
          neighborhood: 'Pine Hills',
          time: 54
        },
        {
          coords: [33.841687, -84.354820],
          neighborhood: 'Pine Hills',
          time: 53
        },
        {
          coords: [33.845580, -84.364234],
          neighborhood: 'Lenox',
          time: 53 
        },
        {
          coords: [33.848877, -84.352840],
          neighborhood: 'Lenox',
          time: 53
        },     
        {
          coords: [33.854116, -84.358075],
          neighborhood: 'Lenox',
          time: 62
        },
        {
          coords: [33.840126, -84.340243],
          neighborhood: 'Brookhaven',
          time: 74
        },
        {
          coords: [33.838849, -84.330893],
          neighborhood: 'Brookhaven',
          time: 83
        },
        {
          coords: [33.845871, -84.339305],
          neighborhood: 'Brookhaven',
          time: 74
        },
        {
          coords: [33.842841, -84.345485],
          neighborhood: 'Brookhaven',
          time: 74
        },     
        {
          coords: [33.853890, -84.333125],
          neighborhood: 'Brookhaven',
          time: 74
        },
        {
          coords: [33.857882, -84.346600],
          neighborhood: 'Brookhaven',
          time: 74
        },
        {
          coords: [33.871708, -84.332438],
          neighborhood: 'Brookhaven',
          time: 66
        },
        {
          coords: [33.884998, -84.340335],
          neighborhood: 'Brookhaven',
          time: 96
        },
        {
          coords: [33.877160, -84.319220],
          neighborhood: 'Brookhaven',
          time: 83
        },     
        {
          coords: [33.862051, -84.326945],
          neighborhood: 'Brookhaven',
          time: 66
        },
        {
          coords: [33.877793, -84.346681],
          neighborhood: 'Brookhaven',
          time: 81
        },
        {
          coords: [33.897965, -84.337417],
          neighborhood: 'Brookhaven',
          time: 122
        },
        {
          coords: [33.907226, -84.319049],
          neighborhood: 'Brookhaven',
          time: 96
        },
        {
          coords: [33.864221, -84.337582],
          neighborhood: 'Brookhaven',
          time: 53
        },     
        {
          coords: [33.874109, -84.329821],
          neighborhood: 'Brookhaven',
          time: 83
        },
        {
          coords: [33.912511, -84.342953],
          neighborhood: 'Brookhaven',
          time: 83
        },
        {
          coords: [33.874356, -84.311300],
          neighborhood: 'Brookhaven',
          time: 66
        },
        {
          coords: [33.857505, -84.321943],
          neighborhood: 'Brookhaven',
          time: 74
        },
        {
          coords: [33.868168, -84.347769],
          neighborhood: 'Brookhaven',
          time: 66
        },     
        {
          coords: [33.862556, -84.350687],
          neighborhood: 'Brookhaven',
          time: 66
        },
        {
          coords: [33.903255, -84.312133],
          neighborhood: 'Brookhaven',
          time: 83
        },
        {
          coords: [33.865455, -84.317498],
          neighborhood: 'Brookhaven',
          time: 85
        },
        {
          coords: [33.872155, -84.314494],
          neighborhood: 'Brookhaven',
          time: 85
        },
        {
          coords: [33.863228, -84.314283],
          neighborhood: 'Brookhaven',
          time: 74
        },     
        {
          coords: [33.890063, -84.320159],
          neighborhood: 'Brookhaven',
          time: 83
        },
        {
          coords: [33.902816, -84.319816],
          neighborhood: 'Brookhaven',
          time: 83
        },
        {
          coords: [33.894338, -84.328742],
          neighborhood: 'Brookhaven',
          time: 122
        },
        {
          coords: [33.887498, -84.329085],
          neighborhood: 'Brookhaven',
          time: 96
        },
        {
          coords: [33.882225, -84.333549],
          neighborhood: 'Brookhaven',
          time: 96
        },     
        {
          coords: [33.910852, -84.333177],
          neighborhood: 'Brookhaven',
          time: 83
        },
        {
          coords: [33.900713, -84.357276],
          neighborhood: 'Sandy Springs',
          time: 104
        },
        {
          coords: [33.890668, -84.357104],
          neighborhood: 'Sandy Springs',
          time: 122
        },
        {
          coords: [33.880315, -84.362712],
          neighborhood: 'Sandy Springs',
          time: 143
        },
        {
          coords: [33.880426, -84.361476],
          neighborhood: 'Sandy Springs',
          time: 113
        },
        {
          coords: [33.888692, -84.353365],
          neighborhood: 'Sandy Springs',
          time: 122
        },
        {
          coords: [33.910625, -84.355537],
          neighborhood: 'Perimeter Center',
          time: 62
        },
        {
          coords: [33.914293, -84.349594],
          neighborhood: 'Perimeter Center',
          time: 62
        },
        {
          coords: [33.909984, -84.346804],
          neighborhood: 'Perimeter Center',
          time: 62
        },
        {
          coords: [33.904848, -84.348059],
          neighborhood: 'Perimeter Center',
          time: 62
        },     
        {
          coords: [33.862050, -84.364940],
          neighborhood: 'Buckhead',
          time: 83
        },
        {
          coords: [33.858130, -84.362537],
          neighborhood: 'Buckhead',
          time: 66
        },
        {
          coords: [33.857916, -84.368802],
          neighborhood: 'Buckhead',
          time: 83
        },
        {
          coords: [33.870448, -84.362343],
          neighborhood: 'Buckhead',
          time: 104
        },
        {
          coords: [33.859920, -84.353388],
          neighborhood: 'Buckhead',
          time: 74
        },     
        {
          coords: [33.846365, -84.309155],
          neighborhood: 'Chamblee',
          time: 85
        },
        {
          coords: [33.855346, -84.309498],
          neighborhood: 'Chamblee',
          time: 74
        },
        {
          coords: [33.858910, -84.297482],
          neighborhood: 'Chamblee',
          time: 107
        },
        {
          coords: [33.869458, -84.295422],
          neighborhood: 'Chamblee',
          time: 74
        },
        {
          coords: [33.877867, -84.305378],
          neighborhood: 'Chamblee',
          time: 85
        },     
        {
          coords: [33.887273, -84.292332],
          neighborhood: 'Chamblee',
          time: 83
        },
        {
          coords: [33.900097, -84.302117],
          neighborhood: 'Chamblee',
          time: 83
        },
        {
          coords: [33.892403, -84.315506],
          neighborhood: 'Chamblee',
          time: 83
        },
        {
          coords: [33.902662, -84.316880],
          neighborhood: 'Chamblee',
          time: 83
        },
                {
          coords: [33.896962, -84.290444],
          neighborhood: 'Chamblee',
          time: 83
        },
                {
          coords: [33.904941, -84.304520],
          neighborhood: 'Chamblee',
          time: 83
        },
                {
          coords: [33.913917, -84.311558],
          neighborhood: 'Chamblee',
          time: 96
        },
                {
          coords: [33.915341, -84.293534],
          neighborhood: 'Chamblee',
          time: 83
        },
                {
          coords: [33.880290, -84.280659],
          neighborhood: 'Chamblee',
          time: 83
        },
        {
          coords: [33.877701, -84.282819],
          neighborhood: 'Chamblee',
          time: 83
        },
        {
          coords: [33.906354, -84.286808],
          neighborhood: 'Doraville',
          time: 83
        },
        {
          coords: [33.894528, -84.279083],
          neighborhood: 'Doraville',
          time: 66
        },     
        {
          coords: [33.894386, -84.267925],
          neighborhood: 'Doraville',
          time: 83
        },
        {
          coords: [33.904217, -84.276508],
          neighborhood: 'Doraville',
          time: 66
        },
        {
          coords: [33.876472, -84.262179],
          neighborhood: 'Mercer University - Atlanta',
          time: 94
        },
        {
          coords: [33.870435, -84.264483],
          neighborhood: 'Mercer University - Atlanta',
          time: 83
        },
        {
          coords: [33.854969, -84.254269],
          neighborhood: 'Northlake',
          time: 94
        },     
        {
          coords: [33.843349, -84.250793],
          neighborhood: 'Northlake',
          time: 94
        },
        {
          coords: [33.853507, -84.266886],
          neighborhood: 'Northlake',
          time: 94
        },
        {
          coords: [33.756471, -84.488286],
          neighborhood: 'Peyton Forest',
          time: 62
        },
        {
          coords: [33.747301, -84.489145],
          neighborhood: 'Peyton Forest',
          time: 141
        },
        {
          coords: [33.746552, -84.472107],
          neighborhood: 'Peyton Forest',
          time: 64
        },     
        {
          coords: [33.748015, -84.461808],
          neighborhood: 'Peyton Forest',
          time: 98
        },
        {
          coords: [33.745624, -84.473695],
          neighborhood: 'Peyton Forest',
          time: 64
        },
        {
          coords: [33.743947, -84.484338],
          neighborhood: 'Peyton Forest',
          time: 63
        },
        {
          coords: [33.738558, -84.489617],
          neighborhood: 'Peyton Forest',
          time: 112
        },
        {
          coords: [33.735667, -84.480991],
          neighborhood: 'Peyton Forest',
          time: 72
        },
        {
          coords: [33.738880, -84.492466],
          neighborhood: 'Peyton Forest',
          time: 62
        },
        {
          coords: [33.749086, -84.492552],
          neighborhood: 'Peyton Forest',
          time: 77
        },
        {
          coords: [33.755866, -84.479849],
          neighborhood: 'Peyton Forest',
          time: 89
        },
        {
          coords: [33.748158, -84.483626],
          neighborhood: 'Peyton Forest',
          time: 61
        },           
        {
          coords: [33.740950, -84.494526],
          neighborhood: 'Peyton Forest',
          time: 57
        },
        {
          coords: [33.730957, -84.496157],
          neighborhood: 'Cascade Heights',
          time: 64
        },
        {
          coords: [33.724033, -84.495814],
          neighborhood: 'Cascade Heights',
          time: 66
        },
        {
          coords: [33.722320, -84.486201],
          neighborhood: 'Cascade Heights',
          time: 60
        },           
        {
          coords: [33.727602, -84.480279],
          neighborhood: 'Cascade Heights',
          time: 62
        },
        {
          coords: [33.732456, -84.470923],
          neighborhood: 'Cascade Heights',
          time: 92
        },
        {
          coords: [33.732099, -84.487317],
          neighborhood: 'Cascade Heights',
          time: 60
        },
        {
          coords: [33.723390, -84.478562],
          neighborhood: 'Cascade Heights',
          time: 82
        },
        {
          coords: [33.724747, -84.466803],
          neighborhood: 'Cascade Heights',
          time: 81
        },
        {
          coords: [33.717179, -84.495213],
          neighborhood: 'Cascade Heights',
          time: 84
        },
        {
          coords: [33.714252, -84.491265],
          neighborhood: 'Southwestern',
          time: 82
        },           
        {
          coords: [33.714609, -84.473412],
          neighborhood: 'Southwestern',
          time: 80
        },
        {
          coords: [33.711468, -84.455903],
          neighborhood: 'Southwestern',
          time: 93
        },
        {
          coords: [33.714395, -84.446890],
          neighborhood: 'Southwestern',
          time: 81
        },
        {
          coords: [33.723962, -84.447663],
          neighborhood: 'Southwestern',
          time: 62
        },
        {
          coords: [33.721249, -84.442685],
          neighborhood: 'Southwestern',
          time: 80
        },
        {
          coords: [33.733598, -84.456074],
          neighborhood: 'Southwestern',
          time: 62
        },
        {
          coords: [33.738666, -84.443972],
          neighborhood: 'Southwestern',
          time: 90
        },
        {
          coords: [33.735454, -84.430754],
          neighborhood: 'Southwestern',
          time: 67
        },
        {
          coords: [33.728102, -84.431012],
          neighborhood: 'Southwestern',
          time: 73
        },
        {
          coords: [33.742092, -84.430068],
          neighborhood: 'Adair Park',
          time: 67
        },
        {
          coords: [33.738595, -84.423716],
          neighborhood: 'Adair Park',
          time: 66
        },
        {
          coords: [33.732313, -84.416936],
          neighborhood: 'Adair Park',
          time: 46
        },
        {
          coords: [33.736097, -84.408095],
          neighborhood: 'Adair Park',
          time: 48
        },
        {
          coords: [33.739523, -84.403117],
          neighborhood: 'Adair Park',
          time: 88
        },
        {
          coords: [33.733598, -84.395735],
          neighborhood: 'Adair Park',
          time: 83
        },
        {
          coords: [33.736239, -84.401829],
          neighborhood: 'Adair Park',
          time: 89
        },
        {
          coords: [33.734098, -84.407752],
          neighborhood: 'Adair Park',
          time: 50
        },
        {
          coords: [33.729387, -84.404061],
          neighborhood: 'Adair Park',
          time: 55
        },
        {
          coords: [33.730243, -84.410842],
          neighborhood: 'Adair Park',
          time: 55
        },
        {
          coords: [33.726746, -84.413331],
          neighborhood: 'Adair Park',
          time: 58
        },
        {
          coords: [33.721891, -84.406893],
          neighborhood: 'Adair Park',
          time: 54
        },
        {
          coords: [33.723319, -84.400027],
          neighborhood: 'Adair Park',
          time: 69
        },
        {
          coords: [33.716965, -84.400799],
          neighborhood: 'Adair Park',
          time: 61
        },
        {
          coords: [33.714538, -84.409468],
          neighborhood: 'Adair Park',
          time: 58
        },
        {
          coords: [33.716109, -84.418309],
          neighborhood: 'Adair Park',
          time: 65
        },
        {
          coords: [33.726389, -84.422343],
          neighborhood: 'Adair Park',
          time: 77
        },
        {
          coords: [33.724176, -84.431613],
          neighborhood: 'Adair Park',
          time: 71
        },
        {
          coords: [33.717037, -84.436419],
          neighborhood: 'Adair Park',
          time: 80
        },
        {
          coords: [33.718964, -84.426205],
          neighborhood: 'Adair Park',
          time: 42
        },
        {
          coords: [33.721963, -84.412902],
          neighborhood: 'Adair Park',
          time: 85
        },
        {
          coords: [33.713396, -84.422686],
          neighborhood: 'East Point',
          time: 83
        },
        {
          coords: [33.708969, -84.413588],
          neighborhood: 'East Point',
          time: 70
        },
        {
          coords: [33.702114, -84.421141],
          neighborhood: 'East Point',
          time: 54
        },
        {
          coords: [33.700472, -84.411786],
          neighborhood: 'East Point',
          time: 70
        },
        {
          coords: [33.706755, -84.446375],
          neighborhood: 'East Point',
          time: 68
        },
        {
          coords: [33.703614, -84.458907],
          neighborhood: 'East Point',
          time: 77
        },
        {
          coords: [33.700043, -84.467061],
          neighborhood: 'East Point',
          time: 74
        },
        {
          coords: [33.700829, -84.453156],
          neighborhood: 'East Point',
          time: 70
        },
        {
          coords: [33.694188, -84.436076],
          neighborhood: 'East Point',
          time: 57
        },
        {
          coords: [33.689117, -84.445174],
          neighborhood: 'East Point',
          time: 84
        },
        {
          coords: [33.694831, -84.455302],
          neighborhood: 'East Point',
          time: 80
        },
        {
          coords: [33.692188, -84.462683],
          neighborhood: 'East Point',
          time: 87
        },
        {
          coords: [33.685190, -84.475215],
          neighborhood: 'East Point',
          time: 99
        },
        {
          coords: [33.694688, -84.479935],
          neighborhood: 'East Point',
          time: 77
        },
        {
          coords: [33.702400, -84.476416],
          neighborhood: 'East Point',
          time: 63
        },
        {
          coords: [33.706970, -84.484656],
          neighborhood: 'East Point',
          time: 64
        },
        {
          coords: [33.699829, -84.494526],
          neighborhood: 'East Point',
          time: 72
        },
        {
          coords: [33.689760, -84.483626],
          neighborhood: 'East Point',
          time: 81
        },
        {
          coords: [33.682333, -84.493840],
          neighborhood: 'East Point',
          time: 85
        },
        {
          coords: [33.678190, -84.483540],
          neighborhood: 'East Point',
          time: 101
        },
        {
          coords: [33.679976, -84.472811],
          neighborhood: 'East Point',
          time: 99
        },
        {
          coords: [33.682190, -84.466031],
          neighborhood: 'East Point',
          time: 91
        },
        {
          coords: [33.685404, -84.459422],
          neighborhood: 'East Point',
          time: 85
        },
        {
          coords: [33.680761, -84.447148],
          neighborhood: 'East Point',
          time: 58
        },
        {
          coords: [33.675119, -84.448865],
          neighborhood: 'East Point',
          time: 53
        },
        {
          coords: [33.678047, -84.433158],
          neighborhood: 'East Point',
          time: 76
        },
        {
          coords: [33.685261, -84.430840],
          neighborhood: 'East Point',
          time: 89
        },
        {
          coords: [33.691403, -84.425347],
          neighborhood: 'East Point',
          time: 94
        },
        {
          coords: [33.688760, -84.414790],
          neighborhood: 'East Point',
          time: 91
        },
        {
          coords: [33.682476, -84.423459],
          neighborhood: 'East Point',
          time: 69
        },
        {
          coords: [33.675262, -84.428952],
          neighborhood: 'East Point',
          time: 78
        },
        {
          coords: [33.677190, -84.416077],
          neighborhood: 'East Point',
          time: 78
        },
        {
          coords: [33.673119, -84.420197],
          neighborhood: 'East Point',
          time: 92
        },
        {
          coords: [33.672047, -84.411271],
          neighborhood: 'East Point',
          time: 70
        },
        {
          coords: [33.668833, -84.404576],
          neighborhood: 'East Point',
          time: 75
        },
        {
          coords: [33.663189, -84.400542],
          neighborhood: 'East Point',
          time: 83
        },
        {
          coords: [33.657831, -84.410584],
          neighborhood: 'East Point',
          time: 93
        },
        {
          coords: [33.659475, -84.433329],
          neighborhood: 'East Point',
          time: 90
        },
        {
          coords: [33.664833, -84.435132],
          neighborhood: 'East Point',
          time: 90
        },
        {
          coords: [33.680904, -84.452212],
          neighborhood: 'East Point',
          time: 61
        },
        {
          coords: [33.678476, -84.460623],
          neighborhood: 'East Point',
          time: 86
        },
        {
          coords: [33.670404, -84.447491],
          neighborhood: 'East Point',
          time: 59
        },
        {
          coords: [33.670619, -84.457963],
          neighborhood: 'East Point',
          time: 56
        },
        {
          coords: [33.672333, -84.468863],
          neighborhood: 'East Point',
          time: 70
        },
        {
          coords: [33.672833, -84.477275],
          neighborhood: 'East Point',
          time: 78
        },
        {
          coords: [33.671904, -84.486115],
          neighborhood: 'East Point',
          time: 77
        },
        {
          coords: [33.670190, -84.495728],
          neighborhood: 'East Point',
          time: 94
        },
        {
          coords: [33.665333, -84.491093],
          neighborhood: 'East Point',
          time: 82
        },
        {
          coords: [33.662547, -84.485257],
          neighborhood: 'East Point',
          time: 69
        },
        {
          coords: [33.659975, -84.479764],
          neighborhood: 'East Point',
          time: 66
        },
        {
          coords: [33.664761, -84.442341],
          neighborhood: 'East Point',
          time: 93
        },
        {
          coords: [33.655260, -84.445088],
          neighborhood: 'East Point',
          time: 53
        },
        {
          coords: [33.651044, -84.454787],
          neighborhood: 'East Point',
          time: 88
        },
        {
          coords: [33.660261, -84.454873],
          neighborhood: 'East Point',
          time: 86
        },
        {
          coords: [33.666976, -84.450924],
          neighborhood: 'East Point',
          time: 87
        },
        {
          coords: [33.663047, -84.459679],
          neighborhood: 'East Point',
          time: 67
        },
        {
          coords: [33.661475, -84.470580],
          neighborhood: 'East Point',
          time: 66
        },
        {
          coords: [33.654331, -84.463198],
          neighborhood: 'East Point',
          time: 94
        },
        {
          coords: [33.652830, -84.480364],
          neighborhood: 'East Point',
          time: 66
        }
      ];

      var iconURLPrefix = 'pins/pins-';
      infoWindows = Array();
      for (var i = 0; i < locations.length; i++) {
          var origin = locations[i];
          var myLatLng = new google.maps.LatLng(origin.coords[0], origin.coords[1]);
          var bucket = Math.floor(origin.time / 5) - 2;
          if (bucket < 10) {
            bucket = '0' + bucket;
          }
          var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              icon: iconURLPrefix + bucket + '.png',
              title: origin.neighborhood + ": " + origin.time + " min away",
              infoWindowIndex : i
          });

          var content = marker.title;

          var infoWindow = new google.maps.InfoWindow({
            content : content
          });

          google.maps.event.addListener(marker, 'click', function(event)
            {
                infoWindows[this.infoWindowIndex].open(map, this);
            }
          );

          infoWindows.push(infoWindow);

        }
}
// [END region_initialization]


google.maps.event.addDomListener(window, 'load', initialize);
