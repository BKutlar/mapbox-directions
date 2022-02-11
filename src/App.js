import React, { useState, useCallback, useRef, useEffect } from 'react';
import mapboxgl, { GeolocateControl, Marker, NavigationControl, Popup, ScaleControl } from 'mapbox-gl';
import './App.css';
import './index.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import MapboxGeocoder from 'mapbox-gl-geocoder';
import MapboxTraffic from '@mapbox/mapbox-gl-traffic';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import Button from './components/Button';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmt1dGxhcjAwNDEiLCJhIjoiY2t5aWdja21zMmM0czJ2bjAyNDd1Y21nNSJ9.y3KGagGUhRXB5bdI8-7Dfw';


export default function App() {



  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [1.907230, 48.992619],// starting position [lng, lat]
    zoom: 11,// starting zoom
    hash: true,

  });
  const language = new MapboxLanguage();
  map.addControl(language);

  map.addControl( 
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',

    }),
    'top-left'
  );



  map.addControl(
    new mapboxgl.GeolocateControl({

      positionOptions: {
        enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true,

    }),
    'bottom-left'
  );

  const coordinatesGeocoder = function (query) {
    // Match anything which looks like
    // decimal degrees coordinate pair.
    const matches = query.match(
      /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
      return null;
    }

    function coordinateFeature(lng, lat) {
      return {
        center: [lng, lat],
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        place_name: 'Lat: ' + lat + ' Lng: ' + lng,
        place_type: ['coordinate'],
        properties: {},
        type: 'Feature'
      };
    }

    const coord1 = Number(matches[1]);
    const coord2 = Number(matches[2]);
    const geocodes = [];

    if (coord1 < -90 || coord1 > 90) {
      // must be lng, lat
      geocodes.push(coordinateFeature(coord1, coord2));
    }

    if (coord2 < -90 || coord2 > 90) {
      // must be lat, lng
      geocodes.push(coordinateFeature(coord2, coord1));
    }

    if (geocodes.length === 0) {
      // else could be either lng, lat or lat, lng
      geocodes.push(coordinateFeature(coord1, coord2));
      geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
  };

  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      localGeocoder: coordinatesGeocoder,
      zoom: 14,
      placeholder: 'Try: -40, 170 / Search',
      mapboxgl: mapboxgl,
      reverseGeocode: true
    })
  );

  map.addControl(new mapboxgl.FullscreenControl(), 'bottom-left');
  map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

  map.on('load', () => {
    map.addControl(new MapboxTraffic());
  });

  //map.addControl(new mapboxgl.Popup())
  const geojson = {
    type: 'FeatureCollection',
    features: [

      //Jersey City stations
      {
        type: 'Feature',
        geometry: {

          type: 'Point',
          coordinates: [-74.0575613, 40.745918]
        },
        properties: {
          name: 'Proposed Public Charger 8.1',
          info: 'Leonard Gordon Park on Manhattan Ave'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-74.0424898,
            40.7170907]
        },
        properties: {
          name: 'JC Public Charger  - City Hall',
          info: 'On the corner of Marin Blvd & Montgomery St 1 ChargePoint Station (dual-port) Level 2'

        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-74.0689626,
            40.7119522]
        },
        properties: {
          name: 'Public Charger 9.1',
          info: 'Berry Lane Park on Garfield Ave'
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-74.0477847,
            40.748175]
        },
        properties: {
          name: 'JC Public Charger - Central Ave',
          info: 'Parking Authority Office 394 Central Ave ChargePoint Station (dual-port) Level 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-74.0424779,
            40.7171497]
        },
        properties: {
          name: 'JC Public Charger - City Hall',
          info: 'On the corner of Marin Blvd & Montgomery St 1 ChargePoint Station (dual-port) Level 2'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-74.0575533,
            40.74592]
        },
        properties: {
          name: 'Public Charger 8.2',
          info: 'Leonard Gordon Park on Manhattan Ave'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-74.052095,
            40.7275813]
        },
        properties: {
          name: 'Public Charger 10.2',
          info: 'Enos Jones Park on 8th St.'
        }
      },
      //Turkish charging point location 

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates:
            [29.017259, 41.065836]
        },
        properties: {
          name: 'Zorlu Center Kapali Otopark -2 / AC',
          info: 'Zorlu Center, Levazım Mahallesi, Koru Sokak No:2, 34340 Beşiktaş/İstanbul',
          date: '00:00-24:00',
          slot: 2,
          chargingType: '3 Soket 2x22 kW & 43 kW',
          CSS: '1 socket 120 kw',
          charge: '1 Soket 60 kW'
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates:
            [32.842965, 39.933093]
        },
        properties: {
          name: 'Maidan AVM/ DC',
          info: 'Mustafa Kemal Mah. 2118. Cd. No:4 Çankaya/Ankara',
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates:
            [32.83673, 39.952091]
        },
        properties: {
          name: 'Anka Mall AVM, Ankara',
          info: "Gazi Mah., Mevlana Bulv. No: 2 Akköprü Mevkii Yenimahalle 06560 Ankara Turkey",
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates:
            [32.748524, 39.875275]
        },
        properties: {
          name: 'Bilkent Center, Ankara',
          info: 'Üniversiteler Mah., Bilkent Bulvarı, Bilkent, Çankaya'
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates:
            [32.848050, 39.851760]
        },
        properties: {
          name: 'Panora AVM, Ankara',
          info: '182 Turan Güneş Bulvarı 06450 Ankara Turkey'
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates:
            [32.814170, 39.909250]
        },

        properties: {
          name: 'Başkent Kule',
          info: 'Başkent Kule',
          date: "00:00-24:00",
          slot: 2,
          chargingType: "2 socket 22kW",


        }

      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates:
            [32.855861, 39.921845]
        },

        properties: {
          name: "Newpark Otel / AC",
          info: "Ön Cebeci Mah. Ziya Gökalp Cd. No:58",
          date: "00:00-24:00",
          slot: 0,
          chargingType: "2 socket 22kW",
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [32.999218, 40.116941]
        },

        properties: {
          name: "Ankara Esenboğa Havalimanı İç Hatlar / AC",
          info: "Balıkhisar Mah. Özal Bulvarı Akyurt/Ankara",
          date: "00:00-24:00",
          slot: 2,
          chargingType: "2 socket 22kW",
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [32.859656, 39.906899]
        },

        properties: {
          name: "Anemon Ankara Otel / AC",
          info: "Kavaklıdere, Konur Sk. No:60, 06680 Çankaya/Ankara",
          date: "00:00-24:00",
          slot: 1,
          chargingType: "1 socket 22kW"
        }
      },

      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [32.650556, 40.469722]
        },

        properties: {
          name: "Kocalar Çeltikçi DT Ankara Yönü/ AC",
          info: "Çalta Mah. Ankara-İstanbul 37.km Kızılcahamam/Ankara",
          date: "00:00-24:00",
          slot: 1,
          chargingType: "2 socket 22kW"
        }
      },

      {
        type:'Feature', 
        geometry: {
          type:'Point',
          coordinates: [32.858120, 39.908830]
        }, 

        properties: {
          name: "Midas Hotel Ankara / AC", 
          info: "Kavaklıdere Mah. Tunus Cad. Çankaya/Ankara",
          date: "00:00-24:00",
          slot:2,
          chargingType:"2 socket 22kW",
        }
      },
    ]
  };

  const redColor = "#c90921";
  const greenColor = "green";

  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 30, closeButton: true, closeOnClick: true }) // add popups
          .setHTML(
            `
      <div style="height: 250px; width: 250px; background-color: #ffffff; ">
      <h3 style="background-color: ${feature.properties.slot < 1 ? redColor : greenColor} ;color:white;">${feature.properties.name}</h3>
      <h4 style="color: lightgrey;">${feature.properties.info}</h4>
      
      <h4 className="options">Open: ${feature.properties.date}</h4>
      <div style="margin-top: -1px; ">
      <h4> Slot places: ${feature.properties.slot}</h4>    
      </div>


      <div style="display:flex ; align-items:center; gap: 10px;">
      <div style="background-color:#a5bcca; width:70px">
      <h4>TYPE 2 : ${feature.properties.chargingType}</h4>     
      </div> 
      <div style="background-color:#a5bcca; width:70px;">
        <h4>CSS/SAE :
        ${feature.properties.CSS}</h4>
      </div >
      <div style="background-color:#a5bcca; width:70px;"> 
        <h4> CHAdeMO : ${feature.properties.charge}</h4>
        </div>
      </div>
      </div>
      `


          ).addClassName("block")



      )

      .addTo(map);
  }

  return (


    <Button />

  )

}