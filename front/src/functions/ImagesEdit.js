import { getLocalUri } from "../components/ImagePicker";
import * as FileSystem from 'expo-file-system';

export const ImagesEdit = async (images) => {
    const formdata = new FormData()
    try {
        for(var i =0; i<images.length;i++){
      await getLocalUri(images[i].id)
        .then((localUri) => {
            formdata.append('image${i}', {uri:localUri, name: images[i].filename, type: images[i].type})
                  
                })
                .catch((err) => {
                    console.log(err);
                  })};
                }
                catch (error) {
                    console.error(error);
                };
                return formdata
            }
          
    