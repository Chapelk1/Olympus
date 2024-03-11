import sprite from "../../img/olympus.svg";

const Faq = () => {
  return (
    <section>
      <h2>FAQ</h2>
      <ul>
        <li>
          <h3>What is Olympus?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
            officiis eaque. Voluptatum, officiis?
          </p>
          <svg>
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </li>
        <li>
          <h3>What is the goal of Olympus?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis?</p>
          <svg>
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </li>
        <li>
          <h3>Why do we need Olympus in the first place?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            architecto deserunt ut sint alias assumenda nulla quas voluptatum
            illo, ipsam magnam quos temporibus.
          </p>
          <svg>
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </li>
        <li>
          <h3>Is OHM a stable coin?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id
            velit suscipit? Maiores recusandae nam sapiente accusantium?
          </p>
          <svg>
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </li>
        <li>
          <h3>Is OHM pegged?</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            autem facere, est voluptas natus, totam placeat eveniet pariatur
            quam molestiae dicta veniam impedit praesentium dolorem obcaecati
            quae tempore id odio?
          </p>
          <svg>
            <use href={sprite + "#icon-plus"}></use>
          </svg>
        </li>
      </ul>
    </section>
  );
};

export default Faq;
