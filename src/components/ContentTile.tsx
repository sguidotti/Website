import React from 'react';

interface ContentTileProps {
  name: string;
  description: string;
  contentLogo?: JSX.Element;
}

const ContentTile: React.FC<ContentTileProps> = ({ name, description, contentLogo}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden container md:container md:mx-auto">
          <div className="py-4 px-6">
            {contentLogo}
            <h3 className="font-semibold text-lg mb-2">{name}</h3>
            <p className="text-gray-700 leading-tight">{description}</p>
          </div>
        </div>
      );
}

export default ContentTile;