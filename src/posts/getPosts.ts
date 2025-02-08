import { PostData } from './types';

export async function getPosts() {
  const response = await fetch('http://localhost:5000/submissions/');
  const body = (await response.json()) as unknown;
  
  return body;
}