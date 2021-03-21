const HamburgerMenu = ({open,onClick}) =>{

        return <div id="hamburger" style={open?{transform:"translateX(200px)"}:{}}onClick={onClick}>
          <span className="hamburger-bar" style={open?{transform:"rotate(45deg) translateY(11px)"}:{}}></span>
          <span className="hamburger-bar" style={open?{display:"none"}:{display:"block"}}></span>
          <span className="hamburger-bar" style={open?{transform:"rotate(-45deg) translateY(-11px)"}:{}}></span>
        </div>
}

export default HamburgerMenu;