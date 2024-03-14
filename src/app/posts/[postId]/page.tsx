"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getPost } from "@/app/services/postServices";

const Post = ({ params: { postId } }: { params: { postId: string } }) => {
  const router = useRouter();
  const {
    isLoading,
    isFetching,
    data: post,
    error,
  } = useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(postId),
  });

  const prevPostId = parseInt(postId, 10) - 1;
  const nextPostId = parseInt(postId, 10) + 1;

  if (isLoading || isFetching)
    return <p className="text-center my-10">Loading...</p>;

  if (error)
    return (
      <div className="text-center mt-10">
        <p className="mb-5">{error.message}</p>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-bold py-2 px-4 mr-1 rounded"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );

  if (!post) return <p className="text-center my-10">No post found.</p>;

  return (
    <div className="py-10">
      <h3 className="text-center">{post.title}</h3>

      <div className="mt-5 flex justify-center">
        <button
          disabled={Number(postId) === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-bold py-2 px-4 mr-1 rounded"
          onClick={() => router.push(`/posts/${prevPostId}`)}
        >
          Previous
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 ml-1 rounded"
          onClick={() => router.push(`/posts/${nextPostId}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Post;
