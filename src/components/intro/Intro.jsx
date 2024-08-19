import "./intro.scss"


function Intro  ()  {
         
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgcontainer">
            <img src="assets/man.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Jeeva Krishnakumar</h1>
            <h3>
              Reactjs <span>Developer !</span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Intro