import { useState } from "react";

const pizzaSizes = [
  {
    size: "Large",
    price: "Rs. 700",
    note: "Big appetite energy",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
  },
  {
    size: "Medium",
    price: "Rs. 500",
    note: "The everyday favourite",
    image:
      "https://images.unsplash.com/photo-1585778718569-2efde6c55c80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
  },
  {
    size: "Small",
    price: "Rs. 300",
    note: "Solo slice mission",
    image:
      "https://images.unsplash.com/photo-1655562378704-d5d0a8c3d442?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=900",
  },
];

const deals = [
  {
    number: "02",
    title: "Double Medium",
    items: ["2 medium pizzas"],
    price: "Rs. 900",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "03",
    title: "Double Large",
    items: ["2 large pizzas"],
    price: "Rs. 1,300",
    image:
      "https://images.unsplash.com/photo-1717251211808-e1382fc30592?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "04",
    title: "Big Sip",
    items: ["2 large pizzas", "1 litre cold drink"],
    price: "Rs. 1,450",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "05",
    title: "Medium Combo",
    items: ["2 medium pizzas", "1 litre cold drink"],
    price: "Rs. 1,099",
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "08",
    title: "Mix It Up",
    items: ["1 large pizza", "1 medium pizza", "1 litre cold drink"],
    price: "Rs. 1,250",
    image:
      "https://images.unsplash.com/photo-1682013951761-4a17efe5abc4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "09",
    title: "Pasta Break",
    items: ["1 chicken pasta", "345ml cold drink"],
    price: "Rs. 549",
    image:
      "https://images.unsplash.com/photo-1570549986390-6bd150ac3515?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "10",
    title: "Quick Combo",
    items: ["1 medium pizza", "345ml cold drink"],
    price: "Rs. 550",
    image:
      "https://images.unsplash.com/photo-1544982503-9f984c14501a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "11",
    title: "Full House",
    items: ["2 large pizzas", "1 chicken cheese sandwich", "1 litre cold drink"],
    price: "Rs. 1,700",
    image:
      "https://images.unsplash.com/photo-1717251211808-e1382fc30592?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "15",
    title: "All-Rounder",
    items: ["1 large pizza", "1 pasta", "1 sandwich"],
    price: "Rs. 1,450",
    image:
      "https://images.unsplash.com/photo-1552580715-4d9bc27f1e2f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
  {
    number: "16",
    title: "Large + Medium",
    items: ["1 large pizza", "1 medium pizza"],
    price: "Rs. 1,150",
    image:
      "https://images.unsplash.com/photo-1571407906723-2d8feeb7b155?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=700",
  },
];

const orderPhoneDisplay = "0342-2455974";
const orderPhoneLink = "tel:+923422455974";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
      <path d="M4 12h15M14 6l6 6-6 6" />
    </svg>
  );
}

function PizzaLogo() {
  return (
    <span className="logo-lockup">
      <span className="logo-main">BUDDY’S</span>
      <span className="logo-sub">PIZZA</span>
    </span>
  );
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 90" className={`squiggle ${className}`}>
      <path d="M2 61c30-57 52 24 78-13s52-30 54 2 37 42 51 4 36-45 53-28" />
    </svg>
  );
}

function OrderButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "order-button compact" : "order-button"} href={orderPhoneLink}>
      Order now <ArrowIcon />
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Buddy's Pizza home">
          <PizzaLogo />
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#menu" onClick={closeMenu}>
            Pizza menu
          </a>
          <a href="#deals" onClick={closeMenu}>
            Hot deals
          </a>
          <a href="#takeaway" onClick={closeMenu}>
            How it works
          </a>
          <a href={orderPhoneLink} className="nav-order">
            Order now
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1655562378704-d5d0a8c3d442?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=92&w=2000"
            alt="Freshly baked cheese and basil pizza"
          />
          <div className="round-sticker">
            <span>PICK UP OR</span>
            <strong>GET IT</strong>
            <span>DELIVERED</span>
          </div>
          <div className="hero-price">
            <small>Pizza from</small>
            <strong>Rs. 300</strong>
          </div>
        </div>

        <div className="hero-copy texture">
          <div className="micro-row">
            <span>Fresh from the oven</span>
            <span>Takeaway + delivery</span>
          </div>
          <h1>
            HOT.
            <br />
            FRESH.
            <br />
            <span>PIZZA.</span>
          </h1>
          <div className="fulfillment-options" aria-label="Order options">
            <a href={orderPhoneLink}>
              <small>01</small>
              <strong>Takeaway</strong>
              <span>Call ahead & collect</span>
            </a>
            <a href={orderPhoneLink}>
              <small>02</small>
              <strong>Delivery</strong>
              <span>Call to your doorstep</span>
            </a>
          </div>
          <div className="hero-bottom">
            <p>
              Freshly baked, fully loaded, and made to move. Pick it up hot or have the good stuff
              brought to your door.
            </p>
            <OrderButton />
          </div>
          <Squiggle className="hero-squiggle" />
        </div>
      </section>

      <div className="marquee" aria-label="Buddy's Pizza highlights">
        <div>
          <span>CRISPY CRUSTS</span>
          <b>✦</b>
          <span>HYPER FRESH</span>
          <b>✦</b>
          <span>TAKEAWAY + DELIVERY</span>
          <b>✦</b>
          <span>CRISPY CRUSTS</span>
          <b>✦</b>
          <span>HYPER FRESH</span>
          <b>✦</b>
          <span>TAKEAWAY + DELIVERY</span>
          <b>✦</b>
        </div>
      </div>

      <section className="pizza-menu texture" id="menu">
        <div className="menu-heading">
          <p className="overline">Pizza price menu</p>
          <h2>
            PICK YOUR
            <br />
            <span>PLAYER.</span>
          </h2>
          <p className="menu-intro">
            One pizza, three sizes. Same hot crust, cheesy top, and fresh-out-the-oven feeling.
          </p>
        </div>

        <div className="size-grid">
          {pizzaSizes.map((pizza, index) => (
            <article className={`size-card size-card-${index + 1}`} key={pizza.size}>
              <div className="pizza-photo">
                <img src={pizza.image} alt={`${pizza.size} freshly baked pizza`} />
                <span className="price-bubble">{pizza.price}</span>
              </div>
              <div className="size-copy">
                <span>0{index + 1}</span>
                <h3>{pizza.size}</h3>
                <p>{pizza.note}</p>
              </div>
              <a href={orderPhoneLink} aria-label={`Order a ${pizza.size} pizza`}>
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <div className="stuffed-banner">
          <span>Want more?</span>
          <strong>STUFFED CRUST PIZZA</strong>
          <b>from Rs. 999</b>
          <OrderButton compact />
        </div>
      </section>

      <section className="deals-section texture" id="deals">
        <div className="deals-heading">
          <div>
            <p className="overline">Straight from the Buddy’s menu</p>
            <h2>
              BIG DEALS.
              <br />
              <i>ZERO DRAMA.</i>
            </h2>
          </div>
          <div className="deals-note">
            <span>10</span>
            <p>clear-cut combos for quick pickup</p>
          </div>
        </div>

        <div className="deals-grid">
          {deals.map((deal, index) => (
            <article
              className={index === 3 || index === 8 ? "deal-card acid" : "deal-card"}
              key={deal.number}
            >
              <div className="deal-image">
                <img src={deal.image} alt={`${deal.title} food deal`} />
                <div className="deal-top">
                  <span>DEAL—{deal.number}</span>
                  <a href={orderPhoneLink} aria-label={`Order deal ${deal.number}`}>
                    <ArrowIcon />
                  </a>
                </div>
              </div>
              <div className="deal-content">
                <h3>{deal.title}</h3>
                <ul>
                  {deal.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <strong>{deal.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="takeaway-section" id="takeaway">
        <div className="takeaway-photo">
          <img
            src="https://images.unsplash.com/photo-1634055789731-c73fbbe3e0dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1400"
            alt="Friends enjoying takeaway pizza from boxes"
          />
          <span className="photo-label">Made to go</span>
        </div>
        <div className="takeaway-copy texture">
          <p className="overline">A quick heads-up</p>
          <h2>
            NO SEATS.
            <br />
            <span>ALL FLAVOUR.</span>
          </h2>
          <p className="lead">
            Buddy’s is a compact neighbourhood pizza cafeteria built for takeaway and delivery.
          </p>
          <p>
            We don’t have dine-in seating right now. Call us, choose your pizza or deal, then pick
            it up hot or ask us to arrange delivery.
          </p>
          <div className="steps">
            <div>
              <b>01</b>
              <span>Pick your food</span>
            </div>
            <div>
              <b>02</b>
              <span>Call to order</span>
            </div>
            <div>
              <b>03</b>
              <span>Collect or deliver</span>
            </div>
          </div>
          <OrderButton />
        </div>
      </section>

      <section className="final-cta texture">
        <Squiggle className="cta-squiggle" />
        <p>Craving sorted?</p>
        <h2>CALL. COLLECT. CRUNCH.</h2>
        <a href={orderPhoneLink}>{orderPhoneDisplay}</a>
        <span>Buddy’s Pizza · Takeaway + delivery</span>
      </section>

      <footer>
        <PizzaLogo />
        <p>Hot pizza for wherever you’re headed.</p>
        <div>
          <a href="#menu">Menu</a>
          <a href="#deals">Deals</a>
          <a href={orderPhoneLink}>Call {orderPhoneDisplay}</a>
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">
            Photos: Unsplash
          </a>
        </div>
      </footer>

      <a className="mobile-order" href={orderPhoneLink}>
        Order now <span>{orderPhoneDisplay}</span>
      </a>
    </main>
  );
}
