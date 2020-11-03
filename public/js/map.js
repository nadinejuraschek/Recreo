mapboxgl.accessToken = mapToken;

const geoDataArray = geoDataString.split(',');
const coordinates = [parseFloat(geoDataArray[0]), parseFloat(geoDataArray[1])];

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: coordinates,
  zoom: 10,
});

const marker = new mapboxgl.Marker()
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(`<h6>${name}</h6>`)
  )
  .addTo(map);