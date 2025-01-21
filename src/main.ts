import './style.css'
import {type Post, posts } from './data.ts'
// import images in to make build process as simple as possible

const images = import.meta.glob('/src/images/*.(png|jpg|jpeg|svg|gif)', { eager: true });

/**
 * @abstract this function is used to assert that a value cannot be reached.
 * @param x the value that should not be reached
 * */
function assertNever(x: string): never {
    throw new Error(`You have added a new button but not added it to the switch statement: ${x}`);
}

document.addEventListener('click', (e)=> {
    const target = e.target as HTMLElement
    if(isButton(target)) {
        // we now know this is a button
        switch(target.id){
            case 'view-more':
                renderPosts(posts,target)
                break;
            default:
                assertNever(target.id)
        }
    } //else clicked on something else
    else {
        console.log(`clicked on ${target.tagName} element, not a button.`);
    }
})


function renderPosts(posts: Post[],button: HTMLButtonElement): void {
    //need to create the HTML elements and append them to the DOM
    const postsContainer = document.querySelector('.posts');
    if (!postsContainer) return;
    button.disabled = true;
    for (const post of posts) {
        const article = document.createElement('article');
        article.classList.add('post');

        const img = document.createElement('img');
        const imagePath = `/src/images/${post.imgSrc}`;
        img.src = (images[imagePath] as { default: string }).default;
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
    }

    console.log('Rendering posts...');
}

/**
 * @abstract used to avoid type assertions on unknown elements
 * @param elem is the HTML element to check 
 * @returns that the element is a button
 */
function isButton(elem: HTMLElement): elem is HTMLButtonElement{
   return  elem.tagName.toLowerCase() === 'button'
}

// practise
/**
 * @abstract used to avoid type assertions on unknown objects
 * @param post is the post to check 
 * @returns that the post is a valid post
//  * */
// export function isPost(post: unknown): post is Post {
//     return (
//         typeof post === 'object' &&
//         post !== null &&
//         'imgSrc' in post &&
//         'imgAlt' in post &&
//         'title' in post &&
//         'date' in post &&
//         'body' in post &&
//         typeof (post ).imgSrc === 'string' &&
//         typeof (post ).imgAlt === 'string' &&
//         typeof (post ).title === 'string' &&
//         typeof (post ).date === 'string' &&
//         typeof (post ).body === 'string'
//     );
// }