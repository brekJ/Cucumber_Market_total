//DetailItemScreen, NewItemScreen, SearchScreen, UpdateItemScreen에서 사용
import axios from 'axios';
import { Platform } from 'react-native';
import { getIosImageFd } from './ImageFunctions';

let API_BASE_URL = 'http://localhost:8080/api';
Platform.OS === 'ios'
  ? (API_BASE_URL = 'http://localhost:8080/api')
  : (API_BASE_URL = 'http://10.0.2.2:8080/api');

// let API_BASE_URL = 'http://13.125.0.174:8080/api';

//post
export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getPostsByPostTitle = async (postTitle) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/posts/search/${postTitle}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getPostsByCategory = async (categoryID) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/posts/search/category/${categoryID}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getPostsByTitleContent = async (text) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/posts/search/titlecontent/${text}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getPost = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts/create`, post, {
      headers: { 'content-type': 'multipart/formdata' },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (postId, updatedPost) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/posts/${postId}`,
      updatedPost,
      { headers: { 'content-type': 'multipart/formdata' } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
//user
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (userTableId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userTableId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const checkUserInfo = async (userId, password) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/check/${userId}/${password}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const checkUserID = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/check/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/create`, user, {
      headers: { 'content-type': 'multipart/formdata' },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userTableId, updatedUser) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/${userTableId}`,
      updatedUser,
      { headers: { 'content-type': 'multipart/formdata' } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userTableId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${userTableId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

//category
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/categories/${categoryId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createCategory = async (category) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/categories/create`,
      category,
      {
        headers: { 'content-type': 'multipart/formdata' },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChatContents = async (roomId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/chatcontents/${roomId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createChatContent = async (chatContent) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/chatcontents`,
      chatContent,
      {
        headers: { 'content-type': 'multipart/formdata' },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteChatContent = async (chatContentId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/chatcontents/${chatContentId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateChatContent = async (chatContentId, chatContent) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/chatcontents/${chatContentId}`,
      chatContent,
      {
        headers: { 'content-type': 'multipart/formdata' },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChatRooms = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/chatrooms/user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getChatRoom = async (chatRoomId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/chatrooms/${chatRoomId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createChatRoom = async (chatRoom) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chatrooms`, chatRoom, {
      header: { 'content-type': 'multipart/formdata' },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteChatRoom = async (chatRoomId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/chatrooms/${chatRoomId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateChatRoom = async (chatRoomId, chatRoom) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/chatrooms/${chatRoomId}`,
      chatRoom,
      {
        headers: { 'content-type': 'multipart/formdata' },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//image
export const uploadImage = async (images) => {
  return new Promise((resolve, reject) => {
    getIosImageFd(images[0].id, images[0].filename.split('.')[0])
      .then((res) => {
        axios
          .post(`${API_BASE_URL}/image`, res, {
            headers: { 'content-type': 'multipart/formdata' },
          })
          .then((res) => {
            resolve(res.data);
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
export const getFavoritePostIds = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/${userId}/favorite-posts`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addFavoritePostId = async (userId, postId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/${userId}/favorite-posts/${postId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const removeFavoritePostId = async (userId, postId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/users/${userId}/favorite-posts/${postId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
