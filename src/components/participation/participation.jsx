import img6 from "../../img/IMAGE06.png";
import img7 from "../../img/IMAGE07.png";
const Participation = (prop) => {
  return (
    <section>
      <h2>How to Participate</h2>
      <div>
        <div>
          <h3>Staking</h3>
          <p>
            Stakers play an important role in the Olympus ecosystem. Stakers
            deposit their OHM into the protocol, which contributes to OHM’s
            long-term price stability. In exchange, stakers receive their pro
            rata share of rebases and governance rights.
          </p>
          <img src={img6} alt="circle with a pattern" />
          <p>
            Stake
            <span>Stake</span>
          </p>
        </div>
        <div>
          <h3>Bonding</h3>
          <p>
            Bonding allows you to trade various tokens for OHM at a discounted
            price. In exchange, bond sales provide additional liquidity and
            reserve assets to the Olympus treasury, contributing to the
            stability of the protocol. As a result, 99% of all liquidity is
            owned by Olympus.
          </p>
          <img src={img7} alt="circle with a pattern" />
          <p>
            Bond
            <span>Bond</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Participation;
