import { getPosts } from "@/lib/posts"
import Post from "@/ui/post"

export default async function Page() {
    const posts = await getPosts();
    
    return (
        <ul>
            {posts.map((post) => {
                <Post id={post.id} post={post}></Post>
            })}
        </ul>
    );
}