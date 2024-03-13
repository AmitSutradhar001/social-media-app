import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container } from "../components/c_index";

export default function Post() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  const userData = useSelector((state) => state.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post?.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full block p-4 rounded-xl m-2">
          <div className="flex-row p-5">
            {isAuthor && (
              <div className="absolate right-6 top-6">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button className="mr-3 bg-green-500 hover:bg-green-700">
                    Edit
                  </Button>
                </Link>
                <Button
                  className="bg-red-500 hover:bg-red-700"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl "
          />
        </div>
        <div className="flex items-center justify-center flex-col h-auto">
          <div className="mb-6">
            <h1 className="text-lg text-gray-700 font-semibold">
              {post.title}
            </h1>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
