import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { API } from "aws-amplify";
import { listPosts } from "../graphql/queries";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({ query: listPosts });
    console.log(postData);
    setPosts(postData.data.listPosts.items);
  }

  return (
    <div className="container mx-6">
      <h1 className="text-3xl font-semibold tracking-wide m-8">Posts</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`} passHref>
          <div className="m-6 pb-6 border-b border-gray-300">
            {post.coverImage && (
              <img
                alt={`${post.title}\'s image`}
                src={post.coverImage}
                className="w-56"
              />
            )}
            <div className="cursor-pointer mt-2">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 mt-2">Author: {post.username}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
