import React, { useState } from 'react';
import placeholder from '../../images/image-placeholder.png';

function Image(props) {
  const [loading, setLoading] = useState(true);

  // Функция обратного вызова, вызываемая при загрузке изображения
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        // Картинка-плейсхолдер пока изображение загружается
        <img src={placeholder} alt="placeholder" onLoad={handleImageLoad} />
      ) : (
        // Источник изображения, загрузка завершена
        <img alt="" {...props} />
      )}
    </div>
  );
}

export default Image;
