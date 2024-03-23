// import { FcLike } from "react-icons/fc";
// import { FaEye } from "react-icons/fa";
// import { MdOutlineComment } from "react-icons/md";
// import { FaShareNodes } from "react-icons/fa6";

// const PostCard = () => {
//     return (
//       <div className="bg-white rounded-lg shadow-md p-4 mb-4">
//         <div className="flex items-center mb-2">
//           <div className="w-12 h-12 rounded-full overflow-hidden">
//             {/* You can replace the src with your user's avatar image */}
//             <img src="/noavatar.png" alt="User Avatar" className="w-full h-full object-cover" />
//           </div>
//           <div className="ml-4 font-semibold text-black"><p>Aman</p></div>
//           <div className="ml-6 w-full flex justify-around gap-60">
//                 <button className="bg-blue-500 text-white py-1 px-2 rounded-full   top-4">Follow</button>
//                 <button className="bg-gray-300 text-gray-800 py-1 px-2 rounded-full top-4">Options</button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <p className="text-gray-800">this is the way every thing works and we need to do it any how !</p>
//         </div>
//         <div className="flex justify-between items-center text-black ">
//           <ul className="flex gap-40"> 
//             <li className="flex items-center">
//             <FcLike />
//               2
//             </li>
//             <li className="flex items-center">
//             <FaEye />
//               <span>2</span>
//             </li>
//             <li className="flex items-center">
//             <MdOutlineComment />
//             <span>5</span>
//             </li>
//             <li className="flex items-center">
//             <FaShareNodes />
//             <span>2</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   };
  
//   export default PostCard;
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { FaShareNodes } from "react-icons/fa6";

const PostCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex flex-row items-center mb-2">
        <div className="w-12 h-12 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-4">
          <img src="/noavatar.png" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="font-semibold text-black mb-2 sm:mb-0"><p>Aman</p></div>
        <div className="ml-auto flex">
          <button className="bg-blue-500 text-white py-1 px-2 rounded-full mr-2 sm:mr-0">Follow</button>
          <button className="bg-gray-300 text-gray-800 py-1 px-2 rounded-full">Options</button>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-800">this is the way every thing works and we need to do it any how !</p>
      </div>
      <div className="flex justify-between ml-10 items-center text-black">
        <ul className="flex gap-28 sm:gap-12">
          <li className="flex items-center">
            <FcLike />
            <span className="ml-1">2</span>
          </li>
          <li className="flex items-center">
            <FaEye />
            <span className="ml-1">2</span>
          </li>
          <li className="flex items-center">
            <MdOutlineComment />
            <span className="ml-1">5</span>
          </li>
          <li className="flex items-center">
            <FaShareNodes />
            <span className="ml-1">2</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostCard;
