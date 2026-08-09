import Link from "next/link";
import { getPosts } from "../lib/api";

export default async function PostList() {
    const posts = await getPosts();

    return (
        <div className="post-list">
            {posts.map((post) => (
                <div className="post-item" key={post.id}>
                    <h2>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
}