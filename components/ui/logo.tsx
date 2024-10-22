import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex -ml-9" aria-label="Cruip">
      <img
        src={`${basePath}/images/dog-03.png`} // Path to your PNG file in the public folder
        alt="Logo"
        width={250} // Adjust width as necessary
        height={200} // Adjust height as necessary
      />
    </Link>
  );
}
