import type { ProjectsCollection, ImagesCollection } from './projects-collection.model';
import client from '@/lib/clients';

export const getProjectsImage = async (): Promise<ProjectsCollection[]> => {
    try {
        // Primero obtener todas las colecciones de proyectos
        const projectsCollectionResponse = await client.getContentList<ProjectsCollection>({
            contentType: 'Projects collection',
        });
        
        // Obtener todas las colecciones de imágenes
        const imagesCollectionResponse = await client.getContentList<ImagesCollection>({
            contentType: 'Images collection',
        });
        
        // Mapear los proyectos con sus imágenes correspondientes
        const projectsWithImages = projectsCollectionResponse.map((projectCollection: any) => {
            // Buscar la colección de imágenes correspondiente
            const projectId = typeof projectCollection.project === 'string' 
                ? projectCollection.project 
                : projectCollection.project?.id;
            
            const imagesCollection = imagesCollectionResponse.find(
                (img: any) => img.id === projectId
            );
            
            return {
                ...projectCollection,
                project: imagesCollection || projectCollection.project
            };
        });
        
        return projectsWithImages || [];
    } catch (error) {
        console.error('❌ Error fetching projects:', error);
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        return [];
    }
};
