import { IPost } from "pages/posts";
import React, { useState } from "react";
import Style from "./Card.style";
import { CommentsIcon } from "assets/icons";
import Text from "ui/Text";
import { Checkbox } from "@mui/material";
import colors from "styles/colors";
import CommentCard from "../CommentCard";

interface IProps extends IPost {
  userName: string;
  comments: [];
}

function Card({ id, title, body, userName, comments }: IProps) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const commentsVisibleHandler = () => setIsCommentsVisible((prev) => !prev);

  return (
    <Style>
      <div className="post__wrapper">
        <p className="post__subtitle">{userName}</p>
        <Checkbox
          sx={{
            color: colors.main,
            "&.Mui-checked": {
              color: colors.main,
            },
          }}
        />
      </div>
      <h4 className="post__title">{title}</h4>
      <Text className="post__text">{body}</Text>
      <div className="post__wrapper post__footer">
        <button
          className={`posts__button ${
            isCommentsVisible ? "posts__button--active" : ""
          }`}
          onClick={commentsVisibleHandler}
        >
          <CommentsIcon />
          <span className="post__text">Коментарии({comments.length})</span>
        </button>
        <div></div>
      </div>
      {isCommentsVisible ? (
        <div className="comments">
          {comments.map((comment: any) => (
            <CommentCard {...comment} />
          ))}
        </div>
      ) : null}
    </Style>
  );
}

export default React.memo(Card);
