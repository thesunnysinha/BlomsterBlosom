import React from 'react'

const HomeComponent = ({ role }) => {
  return (
    <>
      {
        role === "Forest Owner" ? (<div>ForestComponent</div>) : (<div>BotanicalComponent</div>)
      }
    </>
  )
}

export default HomeComponent