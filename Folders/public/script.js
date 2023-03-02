///////////////////////////////////////////////////////////////////////////////////////////////////

// This code takes all the locations from the location server

async function savedData(){
  const response = await fetch("/api/location")
  const data = await response.json()
  mapping(data)
}
savedData()

///////////////////////////////////////////////////////////////////////////////////////////////////
// this content sends location data to the server

document.getElementById("submit").addEventListener("click", submitForm)


function submitForm(e) {
  e.preventDefault();

  function getLocation(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const locationData = { lat, long };

    fetch("/api/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(locationData)
    });
    console.log(locationData)
  }
  
  window.navigator.geolocation.getCurrentPosition(getLocation);

  window.location.reload()
}
//////////////////////////////////////////////////////////////////////////////////////////////////


// below is all mapbox functionality, not too be touched until later

//////////////////////////////////////////////////////////////////////////////////////////////////

function mapping (data){

  //////////////////////////
  // points for coords
    let points = []
    for (let i = data.length -1 ; i >= 0; i --){
      let now = [data[i].long, data[i].lat]
      points.push(now)
    }
    console.log(points)
    /////////////////////////

    ////////////////////////
    //line between coords
    let features1 = []
    data.forEach((elem,index) => {
      const bracket = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [data[index].long, data[index].lat]
          },
          properties: {
            title: 'none',
            description: 'none'
          }
      }
      features1.push(bracket)
    })




  mapboxgl.accessToken = 'pk.eyJ1IjoiZXRoYW4xMjEiLCJhIjoiY2wzYmV2bW50MGQwbTNpb2lxdm56cGdpNyJ9.-wLLlz-sFhNPiXCyVCQ6kg';
      const map = new mapboxgl.Map({
          container: 'map',
          // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [data[0].long, data[0].lat], 
          zoom: 12
      });
      ////////////////////////////////////////////////////////////////////////////////////////////
      const geojson = {
    type: 'FeatureCollection',
    features: features1
  };

  // add markers to map
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }
      ////////////////////////////////////////////////////////////////////////////////////////////

      map.on('load', () => {
          map.addSource('route', {
              'type': 'geojson',
              'data': {
                  'type': 'Feature',
                  'properties': {},
                  'geometry': {
                      'type': 'LineString',
                      'coordinates': points
                  }
              }
          });
          map.addLayer({
              'id': 'route',
              'type': 'line',
              'source': 'route',
              'layout': {
                  'line-join': 'round',
                  'line-cap': 'round'
              },
              'paint': {
                  'line-color': '#FF6400',
                  'line-width': 8
              }
          });
      });
}