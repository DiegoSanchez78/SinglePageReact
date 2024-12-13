import React from 'react'
import "./video.css"
import ReactPlayer from 'react-player'

const Video = () => {

    const data = [
        {
            id:1,
            url:"https://youtu.be/mHGv5FCS2j8?si=92y73VZkYvOOMeBr",
            title:"ideo 1",
            content:"de dede de ed de ed deded defrf fefdfef de de de de"
        },
        {
            id:2,
            url:"https://youtu.be/mHGv5FCS2j8?si=92y73VZkYvOOMeBr",
            title:"ideo 1",
            content:"de dede de ed de ed deded defrf fefdfef de de de de"
        },
        {
            id:3,
            url:"https://youtu.be/mHGv5FCS2j8?si=92y73VZkYvOOMeBr",
            title:"ideo 1",
            content:"de dede de ed de ed deded defrf fefdfef de de de de"
        },
        {
            id:4,
            url:"https://youtu.be/mHGv5FCS2j8?si=92y73VZkYvOOMeBr",
            title:"ideo 1",
            content:"de dede de ed de ed deded defrf fefdfef de de de de"
        },
        {
            id:5,
            url:"https://youtu.be/mHGv5FCS2j8?si=92y73VZkYvOOMeBr",
            title:"ideo 1",
            content:"de dede de ed de ed deded defrf fefdfef de de de de"
        },
        {
            id:6,
            url:"https://youtu.be/mHGv5FCS2j8?si=92y73VZkYvOOMeBr",
            title:"ideo 1",
            content:"de dede de ed de ed deded defrf fefdfef de de de de"
        },
    ]

  return (
    <div className='container video'id='video'> 
        <div className='section-title'>
            <h5>Video</h5>
            <span className='line'></span>
        </div>
        <div className='row'>
            {data.map((item,index)=>(
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                    <div className='video-details'key={index}>
                        <ReactPlayer url={item.url} loop={true} controls playing={false}width="auto" height="300px"/>
                        <div className='video-content'>
                            <h6>{item.title}</h6>
                            <p>{item.content}</p>
                        </div>      
                    </div>                        
                </div>
            ))}
        </div>
    </div>
  )
}

export default Video