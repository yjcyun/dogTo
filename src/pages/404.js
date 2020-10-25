import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/Layout'

const Error = () => {
  return (
    <Layout>
      <ErrorPageWrapper>
        <h1>This page is not found!</h1>
        <h2>Return <Link to='/'>Home</Link></h2>
      </ErrorPageWrapper>
    </Layout>
  )
}

const ErrorPageWrapper = styled.div`
  min-height: calc(100vh - 4rem - 116px - 32px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-top: 2rem;
  }
  a {
    color: var(--red);
  }
`

export default Error