import React from 'react'
import CreateList from './CreateList'
import HowItWorks from './HowItWorks'

function Explore(props) {
  return (
    <div>
        <h1>Explore Component</h1>
        <HowItWorks />
        <CreateList {...props} />
    </div>
  );
}

export default Explore;