import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-14 bg-auth-gradient">
      <div className="max-w-5xl mx-auto px-4 lg:px-0 flex justify-between items-center">
        <div>FlexPoint</div>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="#">Blogs</Link>
          </li>
          <li>
            <Link href="/terms">Terms of service</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy & policy</Link>
          </li>
        </ul>

        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
