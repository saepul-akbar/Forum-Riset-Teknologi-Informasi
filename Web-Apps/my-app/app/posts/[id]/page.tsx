import { getPostById } from "@/app/lib/api";

export default async function PostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const post = await getPostById(id);

    return (
        <main>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );
}