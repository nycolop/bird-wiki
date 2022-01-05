import React, { useEffect, useState } from 'react'

export default function Bottom() {
  const [isLoading, setIsLoading] = useState(true)

  function handleSubmit(event) {
    // TODO: update to handle search function
    event.preventDefault()
  }

  function getRandom() {
    // TODO: this will return random images for the gallery section on load
    setIsLoading(false)
  }

  useEffect(() => {
    // initial mount loads random images
    getRandom()
  }, [])

  if (isLoading) {
    // while waiting for random/search results, shows loading screen
    return (
      <div id="bottom">
        <p>Loading please wait...</p>
      </div>
    )
  } else {
    return (
    <div id="bottom">
      <form onSubmit={handleSubmit}>
        <input id="searchBar" type="text" placeholder="Search" />
        <button id="searchButton" type="submit">Go</button>
      </form>
      <h3>gallery area, delete me when created</h3>
    </div>
    )
  }
}
