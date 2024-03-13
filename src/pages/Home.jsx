import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { Container } from "../components/c_index";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await appwriteService.getPosts();
        if (data) {
          setPosts(data.documents);
        }
      } catch (error) {
        console.error("Error retrieving posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const userState = useSelector((state) => state.status);

  if (!userState) {
    return (
      <div className="w-full min-h-64 py-8 mt-4 text-center">
        <Container>
          <div className="flex items-center justify-center h-screen overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                    Welcome to Your App
                  </h1>
                  <p className="text-lg text-gray-700 mb-8">
                    Explore and share content with the community! To get
                    started, please log in or sign up. If you do not have an
                    account yet , click on Sign Up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  } else if (userState && !loading && posts.length === 0) {
    return (
      <div className="flex flex-wrap bg-slate-50 p-4">
        <div className="p-2 w-full">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">No Posts Available</h1>
            <p className="text-lg mb-4">
              It seems there are no posts available at the moment. to explore
              more content or consider creating your own post to share with the
              community.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            <h2 className="text-lg font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
              {post.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
