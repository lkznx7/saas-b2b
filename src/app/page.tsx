import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">SaaS B2B</h1>
      <p className="text-xl text-gray-600 mb-8">Plataforma empresarial em desenvolvimento</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Coming Soon
      </Link>
    </main>
  );
}