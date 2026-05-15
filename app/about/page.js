import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="page container">
      <h1>About</h1>
      <p>
        This route uses placeholder media so layout work can proceed without live
        source asset downloads.
      </p>
      <Image src="/placeholder-card.svg" alt="Placeholder about" width={800} height={500} className="page-image" />
    </main>
  );
}
