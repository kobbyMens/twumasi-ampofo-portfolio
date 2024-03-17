import Link from "next/link";

function Navlink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      className="font-thin tracking-[3px] border border-transparent transition-all text-[##57d6a5] hover:border-[#57d6a5] px-4 py-1 rounded-lg"
      href={href}
    >
      {text}
    </Link>
  );
}

export default Navlink;
