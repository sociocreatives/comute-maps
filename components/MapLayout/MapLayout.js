import React, { useState, useRef } from 'react'
// import { HiOutlineLogout } from 'react-icons/hi';
import Link from 'next/link';
import { MdMyLocation } from 'react-icons/md'
import styles from "../../styles/MapLayout.module.css"
import { GoogleMap, useLoadScript, InfoWindow, Marker, Autocomplete, DirectionsRenderer, useJsApiLoader, Polyline } from '@react-google-maps/api';
import NavigationBarHome from '../NavigationBarHome/NavigationBarHome';
import "animate.css/animate.min.css";
import { formatRelative } from "date-fns";



const mapStyles = 
    [
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#696969"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#256d85"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#8d1717"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#97a3a4"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d6d6d6"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#ff0000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d3d3d3"
                }
            ]
        }
    ]

const libraries = ["places"]

const center = {
    lat: -1.2513089521180247, 
    lng: 36.83173646599425
}
const mapContainerStyles = {
    width: "100vw",
    height: "100vh",
}

const options ={
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    geolocation: true,
}

const MapLayout = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCnSALS_W4_pClAPF1bWYIDBhIe7G-82WY",
        libraries
    });

    const [map, setMap] = useState((null))
    const onLoad = React.useCallback(function callback(map) {
        const transitLayer = new window.google.maps.TransitLayer();
        const bikeLayer = new window.google.maps.BicyclingLayer();
        const bounds = new window.google.maps.LatLngBounds(center);
        const trafficLayer = new window.google.maps.TrafficLayer();
        map.fitBounds(bounds);
        trafficLayer.setMap(map);
        transitLayer.setMap(map);
        bikeLayer.setMap(map);
        setMap(map)
      }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    

    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */ 
    const originRef = useRef()

    /** @type React.MutableRefObject<HTMLInputElement> */ 
    const destinationRef = useRef()


    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
        ...current,
        {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
        },
        ]);
    }, []);
    

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;

        const transitLayer = new window.google.maps.TransitLayer();
        const bikeLayer = new window.google.maps.BicyclingLayer();
        const trafficLayer = new window.google.maps.TrafficLayer();
        trafficLayer.setMap(map);
        transitLayer.setMap(map);
        bikeLayer.setMap(map);
        setMap(map)
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error Loading Map";
    if (!isLoaded) return "Loading Maps"

    async function calculateRoute(){
        if (originRef.current.value === '' || destinationRef.current.value === ''){
            return
        }
            const directionsService = new google.maps.DirectionsService()
            const results = await directionsService.route({
                origin: originRef.current.value,
                destination: destinationRef.current.value,
                travelMode: google.maps.TravelMode.DRIVING,
                // polyline: google.maps.Polyline(),

            })
            setDirectionsResponse(results)
            setDistance(results.routes[0].legs[0].distance.text)
            setDuration(results.routes[0].legs[0].duration.text)
            // setPath(results.routes[0].overview_path)
        }
        

        // const polyline = new google.maps.Polyline(result);
        // polyline.setMap(map)

        function clearRoute(){
            setDirectionsResponse(null)
            setDistance('')
            setDuration('')
            originRef.current.value=''
            destinationRef.current.value=''
        }

  return (
    <div>
    <div className={styles.bigbox} animateIn="animate__pulse" >
        <div className={styles.header}>
        <h3>Driving Routes</h3>
       <Locate panTo={panTo} className={styles.mylocation}/></div>
        <div> 
            <Autocomplete><input type="text" placeholder='Select Starting Point' className={styles.input} ref={originRef}/></Autocomplete>
            <Autocomplete><input type="text" placeholder='Select Destination' className={styles.input} ref={destinationRef}/></Autocomplete>
            <button className={styles.buttons} onClick={calculateRoute}>Find Route</button>
        </div>

        
        <div className={styles.result}>
         <h4>{distance}</h4>|<h4>{duration}</h4> 
        </div> 
        

        <div className={styles.bottommenu}><Link href="/about">|| About Us </Link></div>
    </div>


    <GoogleMap 
        mapContainerStyle={mapContainerStyles} 
        zoom={10} 
        center={center}
        options={options}
        onLoad={onMapLoad}
        onUnmount={onUnmount}
        >


        <Marker/>


          {directionsResponse && (
            <DirectionsRenderer 
            directions={directionsResponse}
            />
          )}


          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>
                  <span role="img" aria-label="police">
                  👮🏾‍♀️
                  </span>{" "}
                  Alert
                </h2>
                <p>Traffic {formatRelative(selected.time, new Date())}</p>
              </div>
            </InfoWindow>
          ) : null}
    </GoogleMap>
    
    <div className={styles.mainbar}></div>
    </div>
  )
}

export default MapLayout



function Locate({ panTo }) {
    return (
      <div
      className={styles.mylocation}
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
       <MdMyLocation/>
      </div>
    );
  }

//   function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 13,
//       center: { lat: 34.04924594193164, lng: -118.24104309082031 },
//     });
//     const trafficLayer = new google.maps.TrafficLayer();
  
//     trafficLayer.setMap(map);
//   }
  
// initMap = initMap;
  