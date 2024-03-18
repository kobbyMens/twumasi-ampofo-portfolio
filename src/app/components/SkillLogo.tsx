import Image from "next/image";

function SkillLogo({ imageSrc, years }: { imageSrc: string; years: string }) {
  return (
    <div className="relative group">
      <div className="absolute w-full h-full rounded-full top-0 left-0 bg-gray-500 hidden group-hover:flex items-center justify-center transition-all opacity-90 ">
        <span className="font-semibold text-2xl md:text-3xl">{years}</span>
      </div>
      <Image
        src={imageSrc}
        alt="Logo"
        width={100}
        height={100}
        className="object-cover rounded-full border-2 border-gray-500"
      />
    </div>
  );
}

export default SkillLogo;
