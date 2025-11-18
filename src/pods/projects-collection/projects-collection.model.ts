import type { Media } from '@content-island/api-client';

export interface ImagesCollection {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  namecollection: string;
  images: Media[];
}

export interface ProjectsCollection {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  project: ImagesCollection;
  slug: string;
}