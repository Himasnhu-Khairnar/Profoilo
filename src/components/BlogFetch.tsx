import { getTopics } from "@/lib/blog.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Topic = {
  _id: string;
  title: string;
  image: string;
  description: string;
  updatedAt: string;
};

const BlogPage = async () => {
  let topics: Topic[] = [];

  try {
    const response = await getTopics();
    if (response && response.blogs) {
      topics = response.blogs;
      
    }
  } catch (error) {
    console.error("Failed to fetch topics:", error);
    // You might want to set an error state here to show an error message
  }

  return (
    <div className="p-6 bg-neutral-900 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics.length > 0 ? (
          topics.map((topic) => (
            <Link href={`/blog/${topic._id}`}
              key={topic._id}
              className="bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-white">{topic.title}</h2>
              <div
    className="text-neutral-300 mt-2"
    dangerouslySetInnerHTML={{ __html: topic.description }}
  />
              {topic.image && (
                <div className="mt-4">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              )}
              <p className="text-neutral-400 text-sm mt-4">
                {new Date(topic.updatedAt).toLocaleDateString()}
              </p>
            </Link>
          ))
        ) : (
          <p className="text-neutral-300">No topics available</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
