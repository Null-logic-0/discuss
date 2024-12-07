import Link from "next/link";
import CommentList from "@/components/comments/comment-list";
import paths from "@/paths";
import PostShow from "@/components/PostsCreate/PostShow";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { Suspense } from "react";
import PostShowLoading from "@/components/PostsCreate/PostShowLoading";

interface PostShowPageProps {
  params: Promise<{
    slug: string;
    postId: string;
  }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = await params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
