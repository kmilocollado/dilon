import type { ProjectsCollection } from './projects-collection.model';
import client from '@/lib/clients';

export const getProjectsImage = async (): Promise<ProjectsCollection[]> => {
    try {
        const response = await client.getContentList<ProjectsCollection>({
            contentType: 'Projects collection',
        });
        // getContentList devuelve directamente un array
        return response || [];
    } catch (error) {
        console.error('❌ Error fetching featured images:', error);
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        return [];
    }
};
