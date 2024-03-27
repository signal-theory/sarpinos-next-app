export default [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      { saturation: '32' },
      { lightness: '-3' },
      { visibility: 'on' },
      { weight: '1.18' }
    ]
  },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ visibility: 'off' }] },
  { elementType: "labels", featureType: "administrative.base_city", stylers: [{ visibility: "on" }] },
  { elementType: "geometry", featureType: "land", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "land.archipelago", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "land.background", stylers: [{ visibility: "on" }] },
  { elementType: "geometry.fill", featureType: "land.background", stylers: [{ color: "#e4e4e4" }] },
  { elementType: "labels", featureType: "land.continent", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "land.island", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "land.land_cover", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "land.water", stylers: [{ visibility: "on" }] },
  { elementType: "geometry.fill", featureType: "land.water", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels", featureType: "land.water", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "land.water.misc_water", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "land.water.river", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "poi", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "poi", stylers: [{ visibility: "off" }] },
  { elementType: "labels.icon", featureType: "poi", stylers: [{ color: "#2e2e2e" }] },
  { elementType: "geometry", featureType: "poi.emergency", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.built_up_area", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.rail", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road", stylers: [{ visibility: "on" }] },
  { elementType: "geometry.fill", featureType: "transportation.road", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels", featureType: "transportation.road", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road.non_traffic", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road.non_traffic.pedestrian_mall", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road.non_traffic.trail", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road.normal_segment", stylers: [{ visibility: "on" }] },
  { elementType: "geometry.fill", featureType: "transportation.road.normal_segment", stylers: [{ color: "#ffffff" }] },
  { elementType: "geometry.stroke", featureType: "transportation.road.normal_segment", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels", featureType: "transportation.road.normal_segment", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road.normal_segment.arterial", stylers: [{ visibility: "off" }] },
  { elementType: "geometry.fill", featureType: "transportation.road.normal_segment.arterial", stylers: [{ color: "#ffffff" }] },
  { elementType: "geometry.stroke", featureType: "transportation.road.normal_segment.arterial", stylers: [{ color: "#ffffff" }] },
  { elementType: "geometry", featureType: "transportation.road.normal_segment.high_priority", stylers: [{ visibility: "on" }] },
  { elementType: "geometry.fill", featureType: "transportation.road.normal_segment.high_priority", stylers: [{ color: "#ffffff" }] },
  { elementType: "geometry.stroke", featureType: "transportation.road.normal_segment.high_priority", stylers: [{ color: "#ffffff" }, { weight: 0.5 }] },
  { elementType: "labels", featureType: "transportation.road.normal_segment.high_priority", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road.normal_segment.local_or_overpass", stylers: [{ visibility: "on" }] },
  { elementType: "geometry.fill", featureType: "transportation.road.normal_segment.local_or_overpass", stylers: [{ color: "#ffffff" }] },
  { elementType: "geometry.stroke", featureType: "transportation.road.normal_segment.local_or_overpass", stylers: [{ color: "#ffffff" }] },
  { elementType: "geometry", featureType: "transportation.road.normal_segment.terminal", stylers: [{ visibility: "off" }] },
  { elementType: "geometry", featureType: "transportation.road.parking_aisle", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "transportation.road.road_shield", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "transportation.transit_station_or_entrance.monorail_station", stylers: [{ visibility: "off" }] },
  { elementType: "labels", featureType: "transportation.transit_station_or_entrance.rail_station", stylers: [{ visibility: "off" }] }
];