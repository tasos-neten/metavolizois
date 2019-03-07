import React from "react"

const msg = `<iframe width="100%" height="450" src="https://www.youtube.com/embed/rkg6V7qP5iI" frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

const Youtube = () => (
  <div dangerouslySetInnerHTML={{__html: msg}} />
)
export default Youtube
