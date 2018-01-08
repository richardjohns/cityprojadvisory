import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a className="btn" style={linkStyle}>
        Home
      </a>
    </Link>
    <Link href="/about">
      <a className="btn" style={linkStyle}>
        About
      </a>
    </Link>
  </div>
);

export default Header;
