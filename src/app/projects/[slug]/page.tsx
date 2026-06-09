interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold">
        Project {slug}
      </h1>

      <p className="mt-6 text-lg">
        Detailed project information goes here.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">
        Features
      </h2>

      <ul className="list-disc ml-6 mt-4">
        <li>Authentication</li>
        <li>CRUD Operations</li>
        <li>Responsive UI</li>
        <li>REST APIs</li>
      </ul>

    </main>
  );
}