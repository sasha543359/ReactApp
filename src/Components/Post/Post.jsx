import React from "react";
import s from "./Post.module.css";

function Post(props) {
  
  return (
    <div>
      
      <div>
        <p>
          <img src={props.Image} className={s.img} />
          {props.Name}
          <div>{props.Message}</div>
        </p>
      </div>
    </div>
  );
}

export default Post;
