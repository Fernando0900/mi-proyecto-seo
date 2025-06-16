import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

// Componente cargado con Lazy Loading
const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false, // evita renderizado en el servidor
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="google-site-verification" content="8AnMSYksRkTuWCVKRJY7zJwAV5FrTvciDdYJBllUFx0" />
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>

      <Image
        src="/images/seo-image.png"
        width={800}
        height={400}
        alt="Ejemplo de imagen optimizada"
        priority
      />

      {/* Componente cargado dinámicamente */}
      <DynamicComponent />
    </>
  );
}
