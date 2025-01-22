// Define the type for the image module
export type ImageModule = { default: string };

// Type guard for ImageModule
export function isImageModule(value: unknown): value is ImageModule {
    return typeof value === 'object' && value !== null && 'default' in value && typeof (value as ImageModule).default === 'string';
}

/**
 * @abstract used to avoid type assertions on unknown elements
 * @param elem is the HTML element to check 
 * @returns that the element is a button
 */
export function isButton(elem: HTMLElement): elem is HTMLButtonElement {
   return elem.tagName.toLowerCase() === 'button';
}

/**
 * @abstract this function is used to assert that a value cannot be reached.
 * @param x the value that should not be reached
 */
export function assertNever(x: string): never {
    throw new Error(`You have added a new button but not added it to the switch statement: ${x}`);
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