import sprite from "../../img/olympus.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <svg>
          <use href={sprite + "#icon-twit"}></use>
        </svg>
        <svg>
          <use href={sprite + "#icon-youtube"}></use>
        </svg>
      </div>
      <ul>
        <li>
          <h2>Products</h2>
          <a href="/">Olympus Pro</a>
          <a href="/">STAKING</a>
          <a href="/">BONDS</a>
        </li>
        <li>
          <h2>Learn</h2>
          <a href="/">DOCUMENTATION</a>
          <a href="/">BLOG</a>
          <a href="/">MEDIUM</a>
        </li>
        <li>
          <h2>Contact us</h2>
          <a href="/">JOIN OLYMPUS DISCORD</a>
          <a href="/">Media inquiries</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;