import React from 'react'
import Image4 from "../assets/hero/bgimg.jpg";
import {Link} from "react-router-dom";
import Abbout from "../assets/hero/aboutus.jpg"
const bgIMG={
  backgroundImage:`url(${Image4})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  width:"100%",
  height:"100%",

};
function about() {
  return (
    <>
     <div style={bgIMG} className="relative min-h-[600px] sm:min-h-[750px] bg-gray-100  dark:bg-gray-950 dark:text-white duration 200 flex justify-center items-center">
    
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-1"> 
     <Link to="/">
      <div className="mt-5 justify-start">
      <button className="bg-cyan-400 text-white px-2 md:px-4 md:py-2 rounded-md hover:bg-cyan-800 duration-300">Back</button>
      </div></Link>
      <div className="flex flex-col md:flex-row">
     <div className="order-2 w-full md:w-1/2 ">
      <img src={Abbout} className="w-62 h-68 px-30 pt-8" alt="" />
    </div>
    <div className="w-full order-1 md:order-1 md:w-1/2 mt-8 md:mt-8">
        <div className="space-y-2 md:space-y-8"> 

        <h1 className=" text-5xl sm:text-6xl text-black lg:text-7xl font-medium underline">ABOUT US</h1>
        <p className='text-black py-7'>gbuwieoihndcqXT M,NHTRFCJYVYHVVKUJUYFUTY dcumj,kih jyc,iug.boilkn hct,kuyg.oih. tc,ug.olj.n ytc,liugb.olnb mhfrxjytfliughkfutc h  jyvilugo;i;ouiyfvctcvbnkljhg vckuygohkjnbmgvbnk ytg,bknkknnjhuuuhug yhvyulib HGCTEXHTG KVYXEJY IYTXSEJYV,. VHYXYVI <br/> TRXTJCVKI XTEXJKU GFXY FKUJHB FFC  GB  TJKUIGBYUGUYFJHkhwdbjgejSMNDOFU</p>
        <button className="btn btn-active btn-secondary">Read More</button>
        </div>
    </div>
    </div>
   
    </div>
     </div>
     
    </>
  )
}

export default about