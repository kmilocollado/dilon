import type { FeaturedImage } from './featured-image.model';
import client from '@/lib/clients';

export const getFeaturedImage = async (): Promise<FeaturedImage[]> => {
    try {
        const response = await client.getContentList<FeaturedImage>({
            contentType: 'Featured Image',
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
