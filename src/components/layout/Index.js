import React, { Fragment } from 'react'
import Tracks from '../tracks/Tracks'
import Search from '../tracks/Search'

const Index = props => {
  return (
    <Fragment>
      <Search />
      <Tracks />
    </Fragment>
  )
}

export default Index
