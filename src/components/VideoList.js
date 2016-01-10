import React from 'react'

import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={ props.onVideoSelect }
      />
    )
  })

  return (
    <div className='col-md-4 col-xs-12'>
      <ul className='list-group'>
        { videoItems }
      </ul>
    </div>
  )
}

export default VideoList
