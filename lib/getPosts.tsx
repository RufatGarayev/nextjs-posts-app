import ky from "ky";
import { Post } from "@/app/types";

const postsUrl = process.env.NEXT_PUBLIC_POSTS_URL;

export default async function getPosts(): Promise<Post[]> {
  try {
    if (!postsUrl) throw new Error("Service URL not found!");
    return await ky(postsUrl).json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}