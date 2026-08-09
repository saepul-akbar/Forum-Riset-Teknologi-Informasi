export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function getPosts(): Promise<Post[]> {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );

    if (!res.ok) {
        throw new Error("Gagal mengambil data posts");
    }

    const posts: Post[] = await res.json();

    return posts;
}

export async function getPostById(id: number): Promise<Post> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!res.ok) {
        throw new Error("Gagal mengambil data post");
    }

    const post: Post = await res.json();

    return post;
}