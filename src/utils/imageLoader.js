import heic2any from 'heic2any';

/**
 * Loads an image File into an HTMLImageElement, converting HEIC/HEIF format if needed.
 * 
 * @param {File} file - The uploaded image File object from input element or drag event.
 * @returns {Promise<HTMLImageElement>} Resolved with the loaded HTMLImageElement.
 * @throws {Error} Throws an error if image file reading or HEIC conversion fails.
 */
export async function loadImageFromFile(file) {
  return new Promise(async (resolve, reject) => {
    try {
      let targetFile = file;

      // Detect HEIC or HEIF files by file extension or MIME type
      const fileName = file.name.toLowerCase();
      if (
        fileName.endsWith('.heic') || 
        fileName.endsWith('.heif') || 
        file.type.includes('heic') || 
        file.type.includes('heif')
      ) {
        console.log('[ImageLoader] HEIC file detected. Converting client-side to JPEG...');
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.92
        });

        const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        targetFile = new File([blob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), { 
          type: 'image/jpeg' 
        });
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(new Error('Failed to load image element from data URL.'));
        img.src = e.target.result;
      };
      reader.onerror = (err) => reject(new Error('Failed to read file from disk.'));
      reader.readAsDataURL(targetFile);

    } catch (err) {
      console.error('[ImageLoader] Error processing image file:', err);
      reject(err);
    }
  });
}
