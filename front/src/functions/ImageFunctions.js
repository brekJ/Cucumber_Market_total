import { getLocalUri } from '../components/ImagePicker';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

export const getIosImageFd = (imageId, fileName) => {
  return new Promise((resolve, reject) => {
    getLocalUri(imageId)
      .then((localUri) => {
        FileSystem.readAsStringAsync(localUri, { encoding: 'base64' })
          .then((res) => {
            const heicBase64 = 'data:image/heic;base64,' + res;
            manipulateAsync(heicBase64, [], { format: SaveFormat.JPEG }).then(
              (res) => {
                FileSystem.readAsStringAsync(res.uri, {
                  encoding: 'base64',
                })
                  .then((res) => {
                    const jpgBase64 = 'data:image/jpg;base64,' + res;
                    const fd = new FormData();
                    fd.append('image', jpgBase64);
                    fd.append('fileName', fileName);
                    resolve(fd);
                  })
                  .catch((err) => {
                    reject(err);
                  });
              }
            );
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAndroidImageFd = (imageId, fileName) => {
  return new Promise((resolve, reject) => {
    getLocalUri(imageId)
      .then((localUri) => {
        FileSystem.readAsStringAsync(localUri, {
          encoding: 'base64',
        })
          .then((res) => {
            const jpgBase64 = 'data:image/jpg;base64,' + res;
            const fd = new FormData();
            fd.append('image', jpgBase64);
            fd.append('fileName', fileName);
            resolve(fd);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
