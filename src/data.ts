export interface Post {
    imgSrc: string;
    imgAlt: string;
    title: string;
    date: string;
    body: string;
}

export const posts: Post[] = [
    {
        imgSrc: "image1.jpg", // Just the filename, not the full path
        imgAlt: "Alt text for image 1",
        title: "Blog Post 1",
        date: "July 23, 2022",
        body: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path."
    },
    {
        imgSrc: "blog-2.png",
        imgAlt: "Lightbulb illuminated on dark background",
        title: "How I stay committed to learning",
        date: "JULY 9, 2022",
        body: "I'm convinced that the best way to stay committed to learning is to set clear goals and create a structured learning plan. Consistency and daily practice, even if it's just for a short time, can lead to significant progress over time."
    },
    {
        imgSrc: "blog-3.png",
        imgAlt: "Hand holding a glowing cube",
        title: "The unexpected benefits of learning to code",
        date: "JUNE 28, 2022",
        body: "When I started learning to code, I expected to gain technical skills. What I didn't anticipate were the soft skills I'd develop - problem-solving, logical thinking, and attention to detail. These skills have been invaluable not just in coding, but in all aspects of my life."
    }
];
