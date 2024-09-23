// getCroppedImg.js

export const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.src = url;
    });
  
  // Function to crop the image based on the selected area
  export const getCroppedImg = async (imageSrc, pixelCrop) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Set the canvas dimensions to the size of the crop area
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
  
    // Draw the cropped image onto the canvas
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
  
    // Convert the canvas to a Blob and return it as a URL
    return new Promise((resolve, reject) => {
      canvas.toBlob((file) => {
        if (file) {
          file.name = 'cropped-image.png';
          resolve(URL.createObjectURL(file));
        } else {
          reject('Error cropping the image.');
        }
      }, 'image/png');
    });
  };
