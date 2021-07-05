import axios from 'axios';

const url = 'api/post/'

class PostService {
    //Get Posts
  static getPosts() {
    return new Promise ((resolve, reject) => {
      axios.get(url).then((res)=>{
        const data = res.data;
        resolve (data)
      }).catch ((error) => {
        reject(error);
      })
    })
  }
  // Create Post
  static insertPost(text) {
    return axios.post(
      url, { text }
    );
  }
}

export default PostService