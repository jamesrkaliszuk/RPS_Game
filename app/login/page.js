import Link from "next/link";

export default function page() {
  return (
    <>
      <Link href={"/"} className="homeLink">
        Game Page
      </Link>
    </>
  );
}
