import ky from "ky";
import { Post } from "@/app/types";

import { POSTS_API_URL } from "../utils/config";

export async function getPosts(): Promise<Post[]> {
  try {
    if (!POSTS_API_URL) throw new Error("Service URL is not defined!");
    return await ky(POSTS_API_URL).json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getPost(postId: string): Promise<Post> {
  try {
    return await ky(`${POSTS_API_URL}/${postId}`).json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}