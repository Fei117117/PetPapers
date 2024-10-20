import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex -ml-9" aria-label="Cruip">
      <Image
        src="/images/dog-03.png" // Path to your PNG file in the public folder
        alt="Logo"
        width={250} // Adjust width as necessary
        height={200} // Adjust height as necessary
      />
    </Link>
  );
}
