import { assets } from "../assets/assets"

function Add() {
  

  return (
         <form >
           <p>Upload Image</p>
         <div className="flex gap-2" >
         
        <div className=" ">
          <label htmlFor="image1" className=" mb-1 font-semibold">
          <input
            type="file"
            id="image1"
            hidden
          />
          <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
        <div>
          <label htmlFor="image2" className=" mb-1 font-semibold">
          <input
            type="file"
            id="image2"
            hidden
          />
          <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
        <div>
          <label htmlFor="image3" className=" mb-1 font-semibold">
          <input
            type="file"
            id="image3"
            hidden
          />
          <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
        <div>
          <label htmlFor="image4" className=" mb-1 font-semibold">
          <input
            type="file"
            id="image4"
            hidden
          />
          <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
         </div>
       </form>
       
   
  )
}

export default Add