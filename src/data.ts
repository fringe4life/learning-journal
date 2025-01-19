export interface Post {
    imgSrc: string;
    imgAlt: string;
    title: string;
    date: string;
    body: string;
}

export const posts: Post[] = [
    {
        imgSrc: "/src/images/blog-1.png",
        imgAlt: "Laptop on a desk with code editor open",
        title: "My new journey as a bootcamp student.",
        date: "JULY 23, 2022",
        body: "After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers."
    },
    {
        imgSrc: "/src/images/blog-2.png",
        imgAlt: "Lightbulb illuminated on dark background",
        title: "How I stay committed to learning",
        date: "JULY 9, 2022",
        body: "I'm convinced that the best way to stay committed to learning is to set clear goals and create a structured learning plan. Consistency and daily practice, even if it's just for a short time, can lead to significant progress over time."
    },
    {
        imgSrc: "/src/images/blog-3.png",
        imgAlt: "Hand holding a glowing cube",
        title: "The unexpected benefits of learning to code",
        date: "JUNE 28, 2022",
        body: "When I started learning to code, I expected to gain technical skills. What I didn't anticipate were the soft skills I'd develop - problem-solving, logical thinking, and attention to detail. These skills have been invaluable not just in coding, but in all aspects of my life."
    }
];
