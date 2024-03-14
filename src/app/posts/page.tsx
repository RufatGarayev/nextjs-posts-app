"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { Post } from "../types";
import { getPosts } from "../services/postServices";

export const Posts = () => {
  const {
    isLoading,
    data: postList,
    error,
  } = useQuery({
    queryKey: ["postList"],
    queryFn: getPosts,
  });

  if (isLoading) return <p className="text-center my-10">Loading...</p>;

  if (error) return <p className="mb-5">{error.message}</p>;

  if (!postList?.length)
    return <p className="text-center my-10">No posts found.</p>;

  return (
    <div className="py-10">
      <h2 className="text-center text-2xl mb-5">Posts</h2>

      <ul className="flex flex-col items-center">
        {postList.map((post: Post) => (
          <li
            key={post.id}
            className="my-1 text-center w-max text-blue-600 dark:text-blue-500 hover:underline"
          >
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
