import NavigationIcon from "@mui/icons-material/Navigation";
import Link from "next/link";

function ScrollTopButton() {
  return (
    <span className="sticky bottom-10  ml-4">
      <Link
        href={"#heroSection"}
        className=" text-[#57d6a5]"
        aria-label="scroll to top"
      >
        <NavigationIcon className="animate-bounce" />
      </Link>
    </span>
  );
}

export default ScrollTopButton;
