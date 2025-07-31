import { assets } from "../assets/assets";

function Add() {
  return (
    <form>
      <p>Upload Image</p>
      <div className="flex gap-2">
        <div className=" ">
          <label htmlFor="image1" className=" mb-1 font-semibold">
            <input type="file" id="image1" hidden />
            <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
        <div>
          <label htmlFor="image2" className=" mb-1 font-semibold">
            <input type="file" id="image2" hidden />
            <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
        <div>
          <label htmlFor="image3" className=" mb-1 font-semibold">
            <input type="file" id="image3" hidden />
            <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
        <div>
          <label htmlFor="image4" className=" mb-1 font-semibold">
            <input type="file" id="image4" hidden />
            <img src={assets.upload_area} alt="" className="w-20" />
          </label>
        </div>
      </div>
      <div className="w-full ">
        <p className="text-sm font-light mb-2">Product name</p>
        <input
          type="text"
          className="border border-gray-400 w-full max-w-[500px] px-3 py-2 "
          placeholder="Enter product name"
        />
      </div>

      <div className="w-full ">
        <p className="text-sm font-light mb-2">Product description</p>
        <input
          type="text"
          className="border border-gray-400 w-full max-w-[500px] px-4 py-6 "
          placeholder="Enter product description"
        />
      </div>
      <div>
        <div>
             <p className="text-sm font-light mb-2">Product category</p>
             <select name="" id="" className="border border-gray-400 w-full max-w-[500px] px-3 py-2 ">
              <option value="">Men</option>
              <option value="">Women</option>
              <option value="">Kids</option>
             </select>
        </div>

         

      </div>

    </form>
  );
}

export default Add;
