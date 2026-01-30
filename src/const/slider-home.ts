const BASE_URL = import.meta.env.BASE_URL || '/';

// Ejemplo de imágenes (puedes modificar esto según tus necesidades)
export const images: Image[] = [
    { name: 'Image 1', alt: 'Slide 1', src: `${BASE_URL}images/slider-home/image-1.webp`},
    { name: 'Image 2', alt: 'Slide 2', src: `${BASE_URL}images/slider-home/image-2.jpg` },
    { name: 'Image 3', alt: 'Slide 3', src: `${BASE_URL}images/slider-home/image-3.jpg` },
    { name: 'Image 4', alt: 'Slide 4', src: `${BASE_URL}images/slider-home/image-4.png` },
    { name: 'Image 5', alt: 'Slide 5', src: `${BASE_URL}images/slider-home/image-5.png` },
];

// Definimos la interfaz para las imágenes
interface Image {
    name: string;
    alt: string;
    src: string;
}