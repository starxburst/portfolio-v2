import { client } from "../services/contentful";

export const getWorkingExperience = async () => {
  const response = await client.getEntries({
    content_type: "workingExperience",
  });
  // console.log('response', response);
  return response.items;
}

export const getProjects = async () => {
  const response = await client.getEntries({
    content_type: "projects",
  });
  console.log('response', response);
  return response.items;
}