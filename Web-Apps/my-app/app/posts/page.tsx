import Link from "next/link";
import { getAllPosts } from "@/app/lib/api";
import PostList from '@/app/components/PostList'

export default async function Home() {
    const posts = await getAllPosts();

    return (
        <>
          <div className="main-heading">
            <h2>Daftar Berita</h2>
            <div className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident autem earum molestiae nemo.
              Aliquid aperiam a natus consectetur. Magni, commodi.
            </div>
          </div>
          <PostList/>
        </>
    );
}