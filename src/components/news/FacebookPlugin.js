import React from 'react'
import styled from 'styled-components'

const FacebookPlugin = () => {
  return (
    <FacebookPluginWrapper>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=340&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        title='facebook-plugin'
        width="340"
        height="180"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      >
      </iframe>
    </FacebookPluginWrapper>
  )
}

const FacebookPluginWrapper = styled.div`
  margin-top: 4rem;
`

export default FacebookPlugin