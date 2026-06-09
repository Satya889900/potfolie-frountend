export default function CertificateGrid() {
  const certificates = [
    {
      title: "Java Programming",
      issuer: "Udemy",
      year: "2024",
    },
    {
      title: "Spring Boot",
      issuer: "Udemy",
      year: "2025",
    },
    {
      title: "React.js",
      issuer: "Coursera",
      year: "2025",
    },
    {
      title: "MERN Stack",
      issuer: "Udemy",
      year: "2025",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-12">
          Certifications
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">
                {certificate.title}
              </h2>

              <p className="mt-2 text-gray-500">
                {certificate.issuer}
              </p>

              <p className="mt-2 text-sm">
                {certificate.year}
              </p>

              <button className="mt-4 px-4 py-2 border rounded-lg">
                View Certificate
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}