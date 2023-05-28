import React from 'react'
import LoadingAnime from "../assets/Loading.svg"

const Loading = () => {
  return (
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none bg-white bg-opacity-30 grid place-content-center">
          <img src={LoadingAnime} alt="Loading" />
    </div>

  )
}

export default Loading