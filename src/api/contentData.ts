import { client } from "../services/contentful";

export const getWorkingExperience = async () => {
  const response = await client.getEntries({
    content_type: "workingExperience",
  });
  // console.log('response', response);
  return response.items;
}