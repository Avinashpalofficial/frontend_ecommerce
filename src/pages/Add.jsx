import { assets } from "../assets/assets";

function Add() {
  return (
    <form>
      <p className="text-sm font-light mb-2">Upload Image</p>
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
      <div className="w-full mt-2 ">
        <p className="text-sm font-light mb-2">Product name</p>
        <input
          type="text"
          className="border border-gray-400 w-full max-w-[500px] px-3 py-2 "
          placeholder="Enter product name"
        />
      </div>

      <div className="w-full mt-2 ">
        <p className="text-sm font-light mb-2">Product description</p>
        <input
          type="text"
          className="border border-gray-400 w-full max-w-[500px] px-4 py-6 "
          placeholder="Enter product description"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <div>
          <p className="text-sm font-light mb-2">Product category</p>
          <select
            name=""
            id=""
            className="border border-gray-400 w-full px-3 py-2 rounded-md"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="text-sm font-light mb-2">Sub category</p>
          <select
            name=""
            id=""
            className="border border-gray-400 w-full px-3 py-2 rounded-md"
          >
            <option value="topwear">topwear</option>
            <option value="bottomwear">bottomwear</option>
            <option value="footwear">footwear</option>
          </select>
        </div>

        <div>
          <p className="text-sm font-light mb-2">Product Price</p>
          <input
            type="number"
            className="border border-gray-400 w-full rounded-md px-3 py-2 "
            placeholder="2"
          />
        </div>
      </div>
        <div className="mt-4">
          <p>Product Sizes</p>

          <div className="flex gap-2 mt-2 mb-4">
              <div className="w-5 bg-slate-200 flex items-center justify-center px-5 py-2 cursor-pointer">
            <p>S</p>
          </div>
           <div className="w-5 bg-slate-200 flex items-center justify-center px-5 py-2 cursor-pointer">
            <p>M</p>
          </div>
           <div className="w-5 bg-slate-200 flex items-center justify-center px-5 py-2 cursor-pointer">
            <p>L</p>
          </div>
           <div className="w-5 bg-slate-200 flex items-center justify-center px-5 py-2 cursor-pointer">
            <p>Xl</p>
          </div>
           <div className="w-5 bg-slate-200 flex items-center justify-center px-5 py-2 cursor-pointer">
            <p>XXl</p>
          </div>
          </div>
        
        </div>
          <div>
            <input type="checkbox" id="best-sellers" />
            <label className="text-sm font-light ml-2 cursor-pointer" htmlFor="best-sellers">Add to best sellers</label>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 text-white w-40 px-4 py-2 rounded-md">ADD</button>
          </div>
    </form>
  );
}

export default Add;
