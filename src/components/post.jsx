import React from "react";
import naturePhoto from "../assests/nature";

export const Post = () => {
  return (
    <div className="posts">
      <div>
        <img src={naturePhoto} alt="" />
      </div>
      <div className="post-content">
        <h2 className="post-title">
          Taking a full month off with the nature and breeze
        </h2>
        <div className="post-info">
          <div className="post-author-picture">
            <img src={naturePhoto} alt="" />
          </div>
          <div className="post-author">Kum Somi</div>
          <span className="separator"></span>
          <div>Jan 18</div>
        </div>

        <p className="post-body">
          Hi this is the content of the post.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Commodi pariatur obcaecati impedit
          deleniti, ex earum sit suscipit, aliquam ad nulla nemo quasi officiis
          ut culpa aspernatur officia et omnis possimus!. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Omnis magni deleniti tenetur
          repellat. Non, repellendus! Dolorum fuga reprehenderit magni nulla
          laboriosam ratione vero, earum ipsa aliquam iure exercitationem,
          commodi expedita?
        </p>
        <div className="post-label">
          <div>vacation</div>
          <div>nature</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
