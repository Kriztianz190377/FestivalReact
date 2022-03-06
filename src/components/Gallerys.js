import React, {useState } from 'react'

export const Gallerys = () => {

  const IMAGES = [
    require("../build/img/thumb/1.jpg"),
    require("../build/img/thumb/2.jpg"),
    require("../build/img/thumb/3.jpg"),
    require("../build/img/thumb/4.jpg"),
    require("../build/img/thumb/5.jpg"),
    require("../build/img/thumb/6.jpg"),
    require("../build/img/thumb/7.jpg"),
    require("../build/img/thumb/8.jpg"),
    require("../build/img/thumb/9.jpg"),
    require("../build/img/thumb/10.jpg"),
    require("../build/img/thumb/11.jpg"),
    require("../build/img/thumb/12.jpg")
  ];
  const BIG_IMAGES = [
    require("../build/img/grande/1.jpg"),
    require("../build/img/grande/2.jpg"),
    require("../build/img/grande/3.jpg"),
    require("../build/img/grande/4.jpg"),
    require("../build/img/grande/5.jpg"),
    require("../build/img/grande/6.jpg"),
    require("../build/img/grande/7.jpg"),
    require("../build/img/grande/8.jpg"),
    require("../build/img/grande/9.jpg"),
    require("../build/img/grande/10.jpg"),
    require("../build/img/grande/11.jpg"),
    require("../build/img/grande/12.jpg")
  ];
  const [index, setIndex] = useState(0);
  const [nonScroll, setNonScroll] = useState();
  const [show, setShow] = useState('overlay');
  function showScroll() {
    console.log("scroll")
    setNonScroll(document.body.style.overflow = "hidden")
  }
  console.log(nonScroll)
  function sendIndex(index) {
    setIndex(index)
    setShow('overlay show');
    // setBodyNonScroll(true)
    showScroll()
  }
  const hiddenImage = () => {
    setShow('overlay')
    setNonScroll(document.body.style.overflow = "visible");
  }
  const Big_Image = BIG_IMAGES[index]

  return (
    <>
      <div id="gallery" className='container gallery'>
        <h3>Gallery</h3>
        <ul className='gallery-images'>
          {IMAGES.map((img, index) => (
            <img className='img'
              src={img} alt="/" key={index} value={index}
              onClick={(e) => { sendIndex(index) }}
            />
          ))
          }
        </ul>
        <div className={show}
        onClick={hiddenImage}
        >
          <img className="img" src={Big_Image} alt="/" key={index}         
          />
          <button className='btn-close'
            onClick={hiddenImage}
          >X
          </button>
        </div>
      </div>
    </>

  )
}

