import React, { useRef, useState } from "react";
import Video1 from "../../video/video.mp4";
import "./video.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from 'react-icons/ai';

const Video = () => {

    const [play,setPlay] = useState(false)
    const videoPLay = useRef(null)
    const playPause = () =>{
        setPlay(!play)
        if(play === true){
            videoPLay.current.play()
        }else{
            videoPLay.current.pause()
        }
    }

   
  return (
    <div>
      <h2 className="section__title">Visite Video</h2>
      <div className="video__container container">
        <p className="video__description">
          Découvrez-en plus avec notre vidéo des endroits les plus beaux et les
          plus chaleureux pour vous et votre famille.
        </p>
        <div className="video__content">
          <video ref={videoPLay} className="video-file">
            <source src={Video1} type="video/mp4"  />
          </video>

          <button
            onClick={playPause}
            className="button button--flex video__button"
            id="video-button"
          >{play ?
            <BsIcons.BsFillPlayFill className="video__button-icon" id="video-icon"/> :
            <AiIcons.AiOutlinePause className="video__button-icon" id="video-icon"/>
        }
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
