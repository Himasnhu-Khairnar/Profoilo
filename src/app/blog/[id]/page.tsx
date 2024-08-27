import { Topic } from "@/components/BlogFetch";
import { getTopics } from "@/lib/blog.actions";
import Image from "next/image";

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let topic: Topic | undefined;

  try {
    const response = await getTopics();
    if (response && response.blogs) {
      topic = response.blogs.find((t) => t._id === id);
    }
  } catch (error) {
    console.error("Failed to fetch topics:", error);
  }

  if (!topic) {
    return (
      <div className="bg-neutral-800 h-screen flex items-center justify-center">
        <p className="text-neutral-400 text-lg">No topic found</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-neutral-900 h-full  rounded-lg shadow-lg p-6 mb-6 mx-auto max-w-2xl">
        <h1 className="text-3xl font-extrabold text-white mb-4">{topic.title}</h1>
        <div className="relative w-full aspect-video mb-6">
          <Image
            src={topic.image}
            alt={topic.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div 
          className="text-neutral-300 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: topic.description }}
        />
      </div>
    </div>
  );
};

export default BlogPage;