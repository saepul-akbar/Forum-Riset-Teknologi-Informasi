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

    return res.json();
}

export async function getPostById(id: string): Promise<Post> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!res.ok) {
        throw new Error("Artikel tidak ditemukan");
    }

    return res.json();
}