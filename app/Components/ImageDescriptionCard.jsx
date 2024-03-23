import React from 'react';

const ImageDescriptionCard = ({ imageUrl, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border w-auto h-52  border-gray-200  p-4 mt-3">
      <img src={imageUrl} alt="Image" className=" w-40 h-24 object-cover rounded-t-lg " />
      <div className="p-4">
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default ImageDescriptionCard;
