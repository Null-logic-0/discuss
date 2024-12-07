import TopicCreateForm from "@/components/Topics/TopicCreateForm";
import TopicsList from "@/components/Topics/TopicsList";
import { Divider } from "@nextui-org/react";
import PostList from "@/components/PostsCreate/PostList";
import { fetchTopPosts } from "@/db/queries/posts";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-3xl m-2 font-bold">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-3" />
        <h3 className="text-lg mb-2 font-bold">Topics</h3>
        <TopicsList />
      </div>
    </div>
  );
}
