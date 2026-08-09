import Link from "next/link";
import { getPosts } from "@/app/lib/api";
import PostList from './components/PostList'

export default async function Home() {
    const posts = await getPosts();

    return (
        <>
          <div className="main-heading">
            <h1>Selamat Datang di Web AKSSI</h1>
            <div className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem earum molestiae nemo.
              Aliquid aperiam a natus consectetur. Magni, commodi.
            </div>
          </div>
          <PostList/>
        </>
    );
}