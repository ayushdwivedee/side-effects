import React from 'react'

const DisplayData = ({ title,body}) => {
  return (
    <div>
      {/* <p>User ID : {el.userID}</p> */}
      <h3>Title : {title}</h3>
      <h5>Des : {body}</h5>
     
    </div>
  )
}

export default DisplayData
