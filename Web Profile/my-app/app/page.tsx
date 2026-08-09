import Image from "next/image";
import Link from "next/link";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getLashPost(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: Post[] = await res.json();
  return posts; 
}

export default async function Home() {
  const posts = await getLashPost();
  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di Web AKSSI</h1>
        <div className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Voluptatum consectetur tempora minus blanditiis autem rerum suscipit maxime sequi beatae voluptatibus!</div>
      </div>
      <div className="post-list">
        {posts.map((post)=>(
            <div className="post-item" key={post.id}>
              <h2><Link href="/">{post.title}</Link></h2>
            </div>
          ))
}
      </div>
    </>
  );
}