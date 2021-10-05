import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> ABOUT ME</span>
        <img className="aboutMePic" src="https://images.hdqwalls.com/wallpapers/i-love-coding-xl.jpg"
        alt="I Love Coding" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          aliquid quidem quasi totam ab voluptatibus inventore atque nemo
          obcaecati consequatur eius nostrum incidunt ducimus voluptates, id
          perspiciatis vitae aliquam asperiores.
        </p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATERGORIES</span>
          <ul>
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
          </ul>
          <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <i className= "sidebarIcon fab fa-facebook-square"></i>
            <i className= "sidebarIcon fab fa-instagram-square"></i>
            <i className= "sidebarIcon fab fa-twitter-square"></i>
          </div>
          </div>
      </div>
    </div>
  );
}
