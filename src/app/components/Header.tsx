import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
function Header() {
  return (
    <header className="sticky top-0  flex justify-between z-20 items-center p-8 max-w-6xl  mx-auto">
      <div className="hover">
        <Link className="group flex items-center gap-2 " href={"#contact"}>
          <span className="opacity-50 group-hover:opacity-100">
            <MailOutlineIcon />
          </span>
          <span className=" opacity-50 text-sm group-hover:opacity-100">
            CONTACT ME
          </span>
        </Link>
      </div>
      <div className="socials flex flex-row items-center gap-6">
        <Link
          href={"https://github.com/kobbyMens"}
          className="hover:opacity-100 opacity-50"
        >
          <GitHubIcon fontSize={"large"} />
        </Link>
        <Link
          href={"linkedin.com/in/twumasi-ampofo-100"}
          className="hover:opacity-100 opacity-50"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
