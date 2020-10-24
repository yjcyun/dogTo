import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import styled from 'styled-components';
import Image from 'gatsby-image'
import StoreListItem from './StoreListItem';

const Map = ({ filteredData, setSelectedStore, selectedStore }) => {
  const [viewport, setViewport] = useState({
    latitude: 43.6552,
    longitude: -79.3841,
    zoom: 10,
    width: '37rem',
    height: '29rem'
  });

  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle='mapbox://styles/yjcyun/ckeuix8k20rxj19o700geytq4'
      >
        {filteredData.map(el => {
          return (
            <Marker
              key={el.id}
              latitude={el.frontmatter.coordinates[0]}
              longitude={el.frontmatter.coordinates[1]}
            >
              <button className='marker-btn'
                onMouseEnter={() => { setSelectedStore(el.frontmatter) }}
              >
                <img src='https://www.flaticon.com/svg/static/icons/svg/252/252106.svg' alt='Here' />
              </button>
            </Marker>
          )
        })}
        {selectedStore && (
          <Popup
            latitude={selectedStore.coordinates[0]}
            longitude={selectedStore.coordinates[1]}
            onClose={()=>setSelectedStore(null)}
          >
            <ul>
              <StoreListItem
                popup
                data={selectedStore}
                setSelectedStore={setSelectedStore}
              />
            </ul>
          </Popup>
        )}
      </ReactMapGL>
    </MapWrapper>
  )
}

const MapWrapper = styled.div`
  .marker-btn img{
    width: 30px;
    height: 35px;
  }
  .mapboxgl-popup-content {
    padding: 1rem !important;
  }
`
export default Map