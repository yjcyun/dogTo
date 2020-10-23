import React, { useState } from 'react'
import L, { Icon } from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const markerIcon = new Icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/561/561237.svg',
  iconSize: [30, 30]
});

const StoreMap = ({name}) => {
  return (
    <StoreMapWrapper>
      <h3 className='store-map-header header'>{name}</h3>
      <Map center={[43.6532, -79.3832]} zoom={17} style={{ height: '15rem' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[43.6532, -79.3832]}
          icon={markerIcon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </StoreMapWrapper>
  )
}

const StoreMapWrapper = styled.section`
  margin: 2rem 0 4rem;
  .store-map-header {
    color: var(--grey);
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`

export default StoreMap