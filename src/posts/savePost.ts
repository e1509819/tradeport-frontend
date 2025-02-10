import { Product } from './types';


export async function savePost(newPostData: Product) {
  //const apiUrl = process.env.REACT_APP_API_URL + '/submissions';
  //http://localhost:3016/api/Product
  //const apiUrl='http://localhost:3016/submissions/';
  try {
    
    const response = await fetch('http://localhost:3016/api/Product/', {
      method: 'POST',
      body: JSON.stringify(newPostData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await response.json();
    //assertIsSavedPost(body);
    return { body };
  } catch (error) {
    console.error('Error saving post:', error);
    return { error };
  }
}

/*
function assertIsSavedPost(post: any): asserts post is SavedPostData {
  if (!('id' in post)) {
    throw new Error("post doesn't contain id");
  }
  if (typeof post.id !== 'number') {
    throw new Error('id is not a number');
  }
}
*/