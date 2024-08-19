import "./testimonials.scss"

function Testimonials  ()  {
  const data = [
    {
      id: 1,
      name: "Gowri Shankar",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Shankar is an experienced software professional responsible for leading and overseeing technical projects.",
    },
    {
      id: 2,
      name: "Jessi",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Jack is an individual who, along with one or more partners, establishes a company or organization.",
      featured: true,
    },
    {
      id: 3,
      name: "Vikram",
      title: "CEO of KMVJ",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Vicram is CEO of KMVJ and responsible for overseeing the overall operations and making key decisions.",
    },
  ];
  return (
    
    <div className="testimonials" id="testimonials">
     <h1>Testimonials</h1>
     <div className="container">
      {data.map((d) =>(
      <div className={d.featured ? "card featured" : "card"}>
        <div className="top">
          <img className="left"
          src="assets/right-arrow.png" alt="" />
          <img className="user"
           src={d.img} alt="" />
          <img className="right"
          src={d.icon} alt="" />
        </div>
        <div className="center">
         {d.desc}
        </div>
        <div className="bottom">
          <h3>{d.name}</h3>
          <h4>{d.title}</h4>
        </div>
      </div>
      ))}
     </div>

    </div>
  )
}

export default Testimonials