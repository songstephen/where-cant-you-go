/*

Google Maps Stuff

*/


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
          time: 110
        },
                {
          coords: [33.821846, -84.457113],
          neighborhood: 'McDonough',
          time: 91
        },
        {
          coords: [33.827785, -84.473910],
          neighborhood: 'McDonough',
          time: 110
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
          coords: [33.802674, -84.380814
],
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
          coords: [],
          neighborhood: 'North Decatur',
          time: 92
        },

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


google.maps.event.addDomListener(window, 'load', initialize);