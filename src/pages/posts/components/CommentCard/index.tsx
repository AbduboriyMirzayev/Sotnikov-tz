import React from "react";
import Style from "./CommentCard.style";
import Text from "ui/Text";

type Props = {
  name: string;
  body: string;
  email: string;
  id: number;
  postId: number;
};

function CommentCard({ body, email, name }: Props) {
  return (
    <Style>
      <h6 className="comments__title">{name}</h6>
      <p className="comments__email">{email}</p>
      <Text className="comments__body">{body}</Text>
    </Style>
  );
}

export default React.memo(CommentCard);
