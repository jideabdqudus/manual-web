import Link from "next/link";
import Image from "next/image";
export const Navbar = () => {
  return (
    <div className="pt-8">
      <Link href="https://www.manual.co/" target="_blank">
        <Image
          src="/assets/images/logo.svg"
          width={40}
          height={40}
          alt="Manual Logo"
        />
      </Link>
    </div>
  );
};
