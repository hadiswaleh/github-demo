import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="page container">
      <h1>Services</h1>
      <p>
        Service blocks can be replaced with real copied content once extraction
        is available.
      </p>
      <div className="card-grid">
        {[1, 2, 3].map((item) => (
          <article key={item} className="service-card">
            <Image src="/placeholder-card.svg" alt={`Service placeholder ${item}`} width={800} height={500} className="card-image" />
            <h2>Service {item}</h2>
          </article>
        ))}
      </div>
    </main>
  );
}
