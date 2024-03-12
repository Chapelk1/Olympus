import { Section } from "./news.styled";
import sprite from "../../img/olympus.svg";

const News = () => {
  return (
    <Section>
      <h2>In The News</h2>
      <p>
        VIEW ALL ARTICLES
        <span>VIEW ALL ARTICLES</span>
      </p>
      <ul>
        <li>
          <h3>Olympus H1 2022 Report</h3>
          <div>
            <span>Aug 4, 2022</span>
            <p>
              Over the last year, Olympus DAO has implemented a number of
              initiatives to improve understanding of how the DAO is executing
              on community authorized and mandated initiatives.
            </p>
          </div>
          <svg>
            <use href={sprite + "#icon-d-arrow-right"}></use>
          </svg>
        </li>
        <li>
          <h3>Mint & Sync</h3>
          <div>
            <span>Jul 30, 2022</span>
            <p>
              One of the primary objectives outlined in the Olympus12 Action
              Plan is to bootstrap deep OHM liquidity.
            </p>
          </div>
          <svg>
            <use href={sprite + "#icon-d-arrow-right"}></use>
          </svg>
        </li>
        <li>
          <h3>
            Fundamentals: Encouraging Usability Through The Utility Pillar
          </h3>
          <div>
            <span>Mar 31, 2022</span>
            <p>
              Welcome back to the final part of the Olympus Fundamental Series.
              If you’re new or need a refresher, read the first Olympus
              Foundations article!
            </p>
          </div>
          <svg>
            <use href={sprite + "#icon-d-arrow-right"}></use>
          </svg>
        </li>
      </ul>
    </Section>
  );
};

export default News;
