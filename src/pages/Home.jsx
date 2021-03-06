import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import image from "./blog.png";

const Home = ({ isAuth }) => {
  const [postLists, setPostLists] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload(false);
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="homePage">
      <div className="hero">
        <div className="left">
          <h1>Stay curious.</h1>
          <p>Discover stories, thinking from writers on any topic</p>
          <a href="/createpost" className="readmore">
            Start writing
          </a>
        </div>
        <div className="right">
          <img src={image} alt="heroimg" />
        </div>
      </div>

      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h5>{date}</h5>
            <h5>@ {post.author.name}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
