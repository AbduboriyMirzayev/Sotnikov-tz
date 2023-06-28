import React, { useEffect } from "react";
import Page from "ui/Page";
import Title from "ui/Title";
import { useQuery } from "react-query";
import { getComments, getPosts } from "queries/posts";
import { getPaginatedDocs } from "helpers/pagination";
import Card from "./components/Card";
import Style from "./Posts.style";
import CustomPagination from "components/Pagination";
import { EPaginationStateKeys } from "store/reducers/pagination";
import { useAppSelector } from "hooks/redux";

export interface IPost {
  title: string;
  body: string;
  userId: number;
  id: number;
}

function Posts() {
  const { posts } = useAppSelector((state) => state.pagination);

  const { isLoading, error, data = [] } = useQuery("posts", getPosts);
  const { error: commentsError, data: commentsData = [] } = useQuery(
    "comments",
    getComments
  );

  const paginatedPosts: any = getPaginatedDocs(
    data,
    posts.currentPage,
    posts.pageSize
  );

  useEffect(() => {
    if (commentsError) console.log(commentsError);
    if (error) console.log(error);
  }, [error, commentsError]);

  return (
    <Page>
      <Style>
        {isLoading ? "loading...." : ""}
        <div className="posts__header">
          <Title>Посты</Title>
        </div>
        <div className="posts__wrapper">
          {paginatedPosts.length
            ? paginatedPosts.map((post: any) => (
                <Card
                  key={post?.id}
                  {...post}
                  userName="Aleksey Debilov"
                  comments={commentsData.filter(
                    (comment: any) => comment.postId === post.id
                  )}
                />
              ))
            : ""}
        </div>
        <CustomPagination
          pageName={EPaginationStateKeys.posts}
          totalDocs={data.length}
        />
      </Style>
    </Page>
  );
}

export default Posts;
