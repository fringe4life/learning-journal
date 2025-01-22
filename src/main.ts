import './style.css'
import { type Post, posts } from './data.ts'
import {type ImageModule, isImageModule, isButton, assertNever } from './typeHelpers.ts'

// Update the type of the images import
const images: Record<string, ImageModule> = import.meta.glob('/src/images/*.(png|jpg|jpeg|svg|gif)', { eager: true });

/**
 * listens for click events on the document
 */
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    console.log('Clicked element:', target);
    console.log('Clicked element tag:', target.tagName);
    console.log('Clicked element id:', target.id);

    if (isButton(target)) {
        console.log('Is button, entering switch statement');
        switch (target.id) {
            case 'view-more':
                console.log('View more button clicked');
                renderPosts(posts, target);
                break;
            default:
                console.log('Unknown button id:', target.id);
                assertNever(target.id);
        }
    } else {
        console.log(`Clicked on ${target.tagName} element, not a button.`);
    }
});


export function renderPosts(posts: Post[], button: HTMLButtonElement): void {
    console.log('renderPosts function called');
    //need to create the HTML elements and append them to the DOM
    const postsContainer = document.querySelector('.cards');
    if (!postsContainer) {
        console.log('Posts container not found');
        return;
    }
    console.log('Posts container found');
    button.disabled = true;
    console.log('Button disabled');
    for (const post of posts) {
        console.log('Creating post:', post.title);
        const article = document.createElement('article');
        article.classList.add('post--card');

        const img = document.createElement('img');
        img.classList.add('border-radius-small');
        const imagePath = `/src/images/${post.imgSrc}`;
        console.log('Attempting to load image:', imagePath);
        console.log('Available images:', Object.keys(images));

        const imageModule = images[imagePath];
        if (isImageModule(imageModule)) {
            img.src = imageModule.default;
            console.log('Image loaded successfully:', img.src);
        } else {
            console.error('Image not found or invalid:', imagePath);
            img.src = '/src/images/placeholder.jpg'; // Replace with an actual placeholder image path
        }
        img.alt = post.imgAlt;

        const dateP = document.createElement('p');
        dateP.textContent = post.date;

        const titleH2 = document.createElement('h2');
        titleH2.textContent = post.title;

        const bodyP = document.createElement('p');
        bodyP.textContent = post.body;

        article.appendChild(img);
        article.appendChild(dateP);
        article.appendChild(titleH2);
        article.appendChild(bodyP);

        // inserts before the button..
        postsContainer.insertBefore(article, button);
        console.log('Post inserted:', post.title);
    }

    console.log('All posts rendered');
}

// If you have any other functions or variables that need to be tested, export them here
