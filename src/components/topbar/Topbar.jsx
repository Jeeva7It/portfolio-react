import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

function Topbar  ({menuOpen,setMenuOpen})  {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
              <a href="#intro" className="logo">genius.</a>
             <div className="itemcontainer">
                <PersonIcon className="icon" />
                <span>+91 98430 35885</span>
             </div>
             <div className="itemcontainer">
                <EmailIcon className="icon" />
                <span>www.jeevak9843@gmail.com</span>
             </div>


            </div>
            
            <div className="right">
              <div className="hamberger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar