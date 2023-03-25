<<<<<<< HEAD
import { Post } from "../post/Post";
import "./posts.scss"

const Posts = () => {

=======
import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
>>>>>>> ef40cc4537ab40fa5ed62a2216fb3f2c2746ebfb
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

<<<<<<< HEAD

  return (
    <div className="posts">
      {posts.map(post=>(
        <Post post = {post} key = {post.id}/>
      ))}
    </div>
  )
}
=======
  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

>>>>>>> ef40cc4537ab40fa5ed62a2216fb3f2c2746ebfb
export default Posts;
