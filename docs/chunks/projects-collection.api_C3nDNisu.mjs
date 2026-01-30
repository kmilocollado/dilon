import { c as client } from './clients_FyQUIrzN.mjs';

const getProjectsImage = async () => {
  try {
    const projectsCollectionResponse = await client.getContentList({
      contentType: "Projects collection"
    });
    const imagesCollectionResponse = await client.getContentList({
      contentType: "Images collection"
    });
    const projectsWithImages = projectsCollectionResponse.map((projectCollection) => {
      const projectId = typeof projectCollection.project === "string" ? projectCollection.project : projectCollection.project?.id;
      const imagesCollection = imagesCollectionResponse.find(
        (img) => img.id === projectId
      );
      return {
        ...projectCollection,
        project: imagesCollection || projectCollection.project
      };
    });
    return projectsWithImages || [];
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return [];
  }
};

export { getProjectsImage as g };
