import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="page container">
      <h1>Contact</h1>
      <p>
        Contact form/details placeholders are in place to preserve responsive
        spacing and section rhythm.
      </p>
      <Image src="/placeholder-card.svg" alt="Placeholder contact section" width={800} height={500} className="page-image" />
    </main>
  );
}
