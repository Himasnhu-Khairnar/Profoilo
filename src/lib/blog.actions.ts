"use server";

export const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/upload", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return await res.json(); 
  } catch (error) {
    console.log(error);
    return []; 
  }
};
