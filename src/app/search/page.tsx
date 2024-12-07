import PostList from "@/components/PostsCreate/PostList";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: Promise<{
    term: string;
  }>;
}

async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = await searchParams;
  if (!term) redirect("/");
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}

export default SearchPage;
