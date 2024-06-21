// https://api.github.com/repos/abrarfahim19/mdfile-to-blog-generator-source/contents
export async function generateStaticParams() {
  const posts = await fetch(
    "https://api.github.com/repos/abrarfahim19/mdfile-to-blog-generator-source/contents",
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.sha,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>My Page</h1>
    </div>
  );
}
