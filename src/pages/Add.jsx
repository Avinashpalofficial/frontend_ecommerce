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
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
             <p className="text-sm font-light mb-2">Product category</p>
             <select name="" id="" className="border border-gray-400 w-full px-3 py-2 rounded-md">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
             </select>
        </div>
         <div>
             <p className="text-sm font-light mb-2">Sub category</p>
             <select name="" id="" className="border border-gray-400 w-full px-3 py-2 rounded-md"> 
              <option value="topwear">topwear</option>
              <option value="bottomwear">bottomwear</option>
              <option value="footwear">footwear</option>
             </select>
        </div>

         <div>
             <p className="text-sm font-light mb-2">Product Price</p>
             <input type="number" className="border border-gray-400 w-full rounded-md px-3 py-2 " placeholder="2" />
        </div>

         

      </div>

    </form>
  );
}

export default Add;
