import appwriteService from "../appwrite/config";
import { useState, useEffect } from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center p-8">
      <div className="columns-1  sm:columns-2 gap-5 lg:gap-8 md:columns-3 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child)]:mt-8 ">
        {posts.map((post) => (
          <div key={post.$id} className="block m-4">
            <img
              className="rounded-md"
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
            />
            <h2 className="text-xl font-semibold overflow-hidden text-gray-700 whitespace-nowrap overflow-ellipsis">
              {post.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
