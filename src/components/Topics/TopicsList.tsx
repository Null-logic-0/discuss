import Link from "next/link";
import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";

async function TopicsList() {
  const topics = await db.topic.findMany();
  const renderTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex gap-2 flex-wrap">{renderTopics}</div>;
}

export default TopicsList;
