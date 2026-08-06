import heic2any from 'heic2any';

/**
 * Loads an image File into an HTMLImageElement, converting HEIC/HEIF if needed.
 */
export async function loadImageFromFile(file) {
  return new Promise(async (resolve, reject) => {
    try {
      let targetFile = file;

      // Detect HEIC or HEIF files
      const fileName = file.name.toLowerCase();
      if (fileName.endsWith('.heic') || fileName.endsWith('.heif') || file.type.includes('heic') || file.type.includes('heif')) {
        console.log('Converting HEIC file to JPEG...');
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.92
        });

        const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        targetFile = new File([blob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), { type: 'image/jpeg' });
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = e.target.result;
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(targetFile);

    } catch (err) {
      console.error('Error loading image file:', err);
      reject(err);
    }
  });
}
