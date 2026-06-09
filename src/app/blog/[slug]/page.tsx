interface BlogDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsProps) {
  const { slug } = await params;

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold">
        {slug.replaceAll("-", " ")}
      </h1>

      <p className="mt-6 text-lg text-gray-500">
        Blog details page content goes here.
      </p>

    </main>
  );
}