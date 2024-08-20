import { Space } from "nobox-client";
import { createRowSchema } from "../config";

export interface Post {
    title: string;
    content: string;
}

export const PostStructure: Space<Post> = {
    space: "Post",
    description: "A Record Space for blog post",
    structure: {
        title: {
            description: "blog post title",
            type: String,
            required: true
        },
        content: {
            description: "blog post content",
            type: String,
            required: true 
        }
    }
}

export const PostModel = createRowSchema<Post>(PostStructure);