import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {console.log(props.allSushi)}
         { /* 
             Render Sushi components here!
          */
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
