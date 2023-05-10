//NewItemScreen, UpdateItemScreen에서 사용
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ImageContext = createContext({});

const ImageProvider = ({ children }) => {
  const [image, setImage] = useState({});
  return (
    <ImageContext.Provider value={[image, setImage]}>
      {children}
    </ImageContext.Provider>
  );
};

ImageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useImageState = () => useContext(ImageContext);

export { useImageState, ImageProvider };
