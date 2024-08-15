import { Space } from "nobox-client";
import { createRowSchema } from "../config";

interface updatePost {
    title: string;
    content: string;
    // id:string
}

export const updatePostStructure: Space<updatePost> = {
    space: "Post",
    description: "A Record Space for blog post",
    structure: {
        title: {
            description: "blog post title ",
            type: String,
            required: true
        },
        content: {
            description: " blog post content",
            type: String,
            required: true 
        },
        // id: {
        //     description: " identify blog items with id",
        //     type: String,
        //     required: true 
        // }
    }
}

export const updatePostModel = createRowSchema<updatePost>(updatePostStructure);