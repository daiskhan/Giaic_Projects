import Image from "next/image"
import hbg from "../../../public/cbg.png"
export default function Contact(){

  return (
    <div>
      <div className="main">
        <div className="about">
   <h1 className="name" style={{fontSize:"50px",fontStyle:"italic"}} >Connect with Dais Khan </h1>

         <h1 className="intro"> <strong>Email:</strong> najafali32304@gmail.com</h1>
          <h1 className="intro"> <strong>Address:</strong>Karachi Sindh, Pakistan</h1>
          <h1 className="intro"> <strong>Phone:</strong> +923041549625</h1>
          <h1 className="intro"> <strong>WhatsApp</strong> +923056729625</h1>
          <h1 className="intro"> <strong>Github:</strong> daiskhan</h1>
          <h1 className="intro"> <strong>Discord:</strong> daiskhan</h1>
          <h1 className="intro"> <strong>LinkedIn:</strong> daiskhan</h1>




          </div>

        <div className="img" style={{marginLeft:"20%"}} >
      <Image src={hbg} width={"500"} height={"500"} alt="logo" className="himg" />
          </div>
        </div>
      
      <button className="p" style={{marginRight:"7px"}} ><a href="/projects">Projects</a></button>
      <button className="ab" style={{marginRight:"7px"}} ><a href="/about">About</a></button>
      <button className="c" style={{marginRight:"7px"}} ><a href="/contact">Contact</a></button>
    </div>
  )
}
