
import React from "react";
import "./App.css";

// FOUR ITINERARY IMAGES
const itinerary = [
  {
    day: "DAY 1",
    date: "Friday, 20 November 2026",
    place: "Bengaluru to Murudeshwar",
    image:
      "https://images.openai.com/static-rsc-4/ihmI9NQF3B_IJTxy901aMM6aP9gX4Q4PFGhka9zo0KhTaL-y3GDWqgKYngNUCoGm7gh5oXbAq7DuObiFsTaLGJfZJSgWB__CuM47US3I8WnJbHCJtYG7S04VM4qyBoX8PMHRIndV0MJte7RKpPmA4AktrJHSv0rUuZRPkbem_ufsIcJGrf7ZvqeapbLwbnAG?purpose=fullsize",
    activities: [
      "Depart Bengaluru by regular non-sleeper seater bus, preferably in the evening.",
      "Overnight journey to Murudeshwar.",
      "Confirm arrival time and boarding point with the bus operator."
    ]
  },
  {
    day: "DAY 2",
    date: "Saturday, 21 November 2026",
    place: "Murudeshwar",
    image:
      "https://images.openai.com/static-rsc-4/ULPItKzjGxpQ3QrgAeVERUOyRF2_GLJjQCYE_Q779uZdV_VslbMEuxK50HH8Qacq5FrGCsJPn326kozHARjH5FXnIPt7l21OwfBNeDrBw7bxnjqFdMloYQnm-yd2iyX3oCJG1PYB7TWWDF3Sg-OrdZfeJywczbFaZ4PJ7EoE0fphyFLIDD4WNYacZCmEFt64?purpose=fullsize",
    activities: [
      "Arrive in Murudeshwar, freshen up and have breakfast.",
      "Scuba diving trip to Netrani Island, subject to operator availability, weather and sea conditions.",
      "Visit Murudeshwar Temple, Shiva statue and beach.",
      "Overnight stay in Murudeshwar."
    ]
  },
  {
    day: "DAY 3",
    date: "Sunday, 22 November 2026",
    place: "Honnavar and Kumta",
    image:
      "https://images.openai.com/static-rsc-4/WER4JIPtYQgbp8-tKa5Cu-I0MFabD0Tz27CRUPk62vN8AaKqOWTgNTt12GYPh4m0S6m5w3XpgWViwNrj8jNKDs-dBWXvaUhHHgPIWaDCVlMNMT2nzvg9hh_qZkpFFEcqGZoQlMfZxFiHYSZTmlp9NVIDo2J76e0Nw7DU5MvrMB18xTxqDGuwtfSLjkf0XcPH?purpose=fullsize",
    activities: [
      "Breakfast and check out.",
      "Travel to Honnavar for Sharavathi backwater / mangrove boating, subject to availability.",
      "Visit Kasarkod Eco Beach.",
      "Continue to Kumta for a beach visit and sunset, time permitting.",
      "Board a regular seater bus from Kumta to Bengaluru in the evening/night."
    ]
  },
  {
    day: "DAY 4",
    date: "Monday, 23 November 2026",
    place: "Return to Bengaluru",
    image:
      "https://images.openai.com/static-rsc-4/tFeiOrWh43qS3pSxP2KRtMVFC7PbvXOfgIqArqw9LTQTrb2OlfpsjdRt1BSDe2D80mYAOU4t6kBYxl-_pn1xo4WufEQFcoL1YAWSHnNA6FOKB0Nr5F63eClsb4Heu60tPfmezFJgAuW3wXZTokRRcuWZ7MGxcTEeIJsOE3W8Y3E?purpose=inline",
    activities: [
      "Arrive in Bengaluru on Monday morning.",
      "Arrival time depends on bus service and road conditions."
    ]
  }
];

const highlights = [
  {
    icon: "🤿",
    title: "Netrani Island",
    detail:
      "Scuba diving experience, subject to availability and sea conditions."
  },
  {
    icon: "🛕",
    title: "Murudeshwar",
    detail:
      "Visit the famous temple, Shiva statue and beach."
  },
  {
    icon: "🚣",
    title: "Honnavar",
    detail:
      "Sharavathi backwater and mangrove boating, subject to availability."
  },
  {
    icon: "🌅",
    title: "Kumta",
    detail:
      "Beach visit and sunset, time permitting."
  }
];

const brandValues = [
  {
    icon: "❤️",
    title: "Customer First",
    detail:
      "We believe every traveller deserves a welcoming and enjoyable travel experience."
  },
  {
    icon: "🧭",
    title: "Discover More",
    detail:
      "Explore beautiful destinations, exciting adventures and unforgettable journeys."
  },
  {
    icon: "🛡️",
    title: "Trust and Transparency",
    detail:
      "Clear information and honest communication at every step of your journey."
  },
  {
    icon: "🏡",
    title: "Feel at Home",
    detail:
      "A comfortable and friendly place to discover, plan and book your trips."
  }
];

function App() {
  const whatsappNumber = "91XXXXXXXXXX";

  const whatsappMessage = encodeURIComponent(
    "Hello TripNest! I am interested in the Coastal Karnataka Weekend Escape package, 20–23 November 2026. Please share the price and availability."
  );

  return (
    <div className="tripnest">

      {/* HEADER */}
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-symbol">⌁</span>
          Trip<span>Nest</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#package">Packages</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#brand-identity">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Enquire Now
        </a>
      </header>

      <main>

        {/* PACKAGE HERO */}
        <section className="package-hero" id="home">
          <div className="hero-shade"></div>

          <div className="hero-content">
            <span className="hero-tag">
              TRIPNEST FEATURED EXPERIENCE
            </span>

            <h1>
              Coastal Karnataka<br />
              Weekend Escape
            </h1>

            <p>
              Discover Murudeshwar, experience the beauty of
              Honnavar and enjoy the beaches of Kumta.
            </p>

            <div className="hero-meta">
              <span>📅 20–23 November 2026</span>
              <span>🚌 Regular Seater Bus</span>
              <span>🌴 4 Days / 3 Nights</span>
            </div>

            <a href="#itinerary" className="orange-button">
              Explore Itinerary ↓
            </a>
          </div>
        </section>

        {/* VISUAL DESTINATION ROUTE */}
        <section className="route-section" id="package">

          <div className="route-heading">
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Explore the Coastal Route</h2>
            <p>
              One journey, beautiful destinations and unforgettable memories.
            </p>
          </div>

          <div className="route-container">

            <div className="route-top-info">
              <div>
                <span>🗓️ TRAVEL DATES</span>
                <strong>20 – 23 November 2026</strong>
              </div>

              <div>
                <span>🚌 TRANSPORT</span>
                <strong>Regular Seater Bus</strong>
              </div>

              <div>
                <span>🌴 DURATION</span>
                <strong>4 Days / 3 Nights</strong>
              </div>
            </div>

            <div className="route-timeline">

              <article className="route-stop">
                <div className="route-marker start-marker">
                  <span>🏁</span>
                </div>

                <div className="route-stop-content">
                  <small>DAY 1 · FRIDAY</small>
                  <h3>Bengaluru</h3>
                  <p>Our journey begins</p>
                  <span className="route-label">STARTING POINT</span>
                </div>
              </article>

              <article className="route-stop">
                <div className="route-marker">
                  <span>🛕</span>
                </div>

                <div className="route-stop-content">
                  <small>DAY 2 · SATURDAY</small>
                  <h3>Murudeshwar</h3>
                  <p>
                    Temple, Shiva statue, beach and Netrani Island scuba diving.
                  </p>
                  <span className="route-label">COASTAL EXPERIENCE</span>
                </div>
              </article>

              <article className="route-stop">
                <div className="route-marker">
                  <span>🚣</span>
                </div>

                <div className="route-stop-content">
                  <small>DAY 3 · SUNDAY</small>
                  <h3>Honnavar</h3>
                  <p>
                    Explore Sharavathi backwaters and mangrove boating.
                  </p>
                  <span className="route-label">NATURE EXPERIENCE</span>
                </div>
              </article>

              <article className="route-stop">
                <div className="route-marker">
                  <span>🌅</span>
                </div>

                <div className="route-stop-content">
                  <small>DAY 3 · SUNDAY</small>
                  <h3>Kumta</h3>
                  <p>Enjoy beautiful beaches and a coastal sunset.</p>
                  <span className="route-label">BEACH EXPERIENCE</span>
                </div>
              </article>

              <article className="route-stop">
                <div className="route-marker end-marker">
                  <span>🏠</span>
                </div>

                <div className="route-stop-content">
                  <small>DAY 4 · MONDAY</small>
                  <h3>Bengaluru</h3>
                  <p>Return with beautiful memories.</p>
                  <span className="route-label">RETURN POINT</span>
                </div>
              </article>

            </div>

            <div className="route-bottom">
              <span>✦</span>
              <p>Explore More. Experience More.</p>
            </div>

          </div>
        </section>

        {/* TRIP HIGHLIGHTS */}
        <section className="content-section">

          <div className="section-title">
            <span>THE EXPERIENCE</span>
            <h2>Discover Coastal Karnataka</h2>
            <p>
              Four memorable days along Karnataka's beautiful coastline.
            </p>
          </div>

          <div className="highlight-grid">
            {highlights.map(item => (
              <article className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

        </section>

        {/* PREMIUM DAY-BY-DAY ITINERARY */}
        <section
          className="content-section itinerary-section"
          id="itinerary"
        >

          <div className="section-title">
            <span>YOUR TRAVEL PLAN</span>
            <h2>Day-by-Day Itinerary</h2>
            <p>
              Every destination has a story. Discover yours along the
              beautiful Karnataka coastline.
            </p>
          </div>

          <div className="premium-itinerary">

            {itinerary.map((item, index) => (
              <article className="premium-day-card" key={item.day}>

                <div className="premium-day-image">
                  <img
                    src={item.image}
                    alt={item.place}
                    loading="lazy"
                  />

                  <span className="premium-day-badge">
                    {item.day}
                  </span>
                </div>

                <div className="premium-day-details">

                  <div className="premium-day-date">
                    {item.date}
                  </div>

                  <h3>{item.place}</h3>

                  <ul>
                    {item.activities.map((activity, activityIndex) => (
                      <li key={activityIndex}>
                        <span className="activity-dot"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <div className="day-progress">
                    <span>JOURNEY DAY {index + 1} OF 4</span>
                  </div>

                </div>

              </article>
            ))}

          </div>
        </section>

        {/* IMPORTANT INFORMATION */}
        <section className="content-section">

          <div className="section-title">
            <span>IMPORTANT INFORMATION</span>
            <h2>Before You Book</h2>
          </div>

          <div className="information-grid">

            <article>
              <h3>🚌 Transport</h3>
              <p>
                Regular seater bus, not sleeper. Departure and arrival
                timings must be confirmed with the bus operator.
              </p>
            </article>

            <article>
              <h3>🤿 Scuba Diving</h3>
              <p>
                Subject to operator availability, weather and sea
                conditions. Confirm activity price and inclusions.
              </p>
            </article>

            <article>
              <h3>🚣 Boating</h3>
              <p>
                Sharavathi backwater / mangrove boating is subject
                to availability.
              </p>
            </article>

            <article>
              <h3>🏨 Accommodation</h3>
              <p>
                Overnight stay in Murudeshwar is mentioned in this
                itinerary. Other accommodation arrangements need
                confirmation.
              </p>
            </article>

          </div>
        </section>

        {/* TRIPNEST BRAND IDENTITY */}
        <section
          className="content-section brand-identity-section"
          id="brand-identity"
        >

          <div className="brand-identity-inner">

            <div className="brand-identity-heading">
              <span>GET TO KNOW US</span>

              <h2>Welcome to TripNest</h2>

              <h3>Your Journey, Our Passion</h3>

              <p className="brand-tagline">
                Explore <span>•</span> Experience <span>•</span> Enjoy
              </p>
            </div>

            <div className="brand-meaning">
              <h3>The Meaning Behind TripNest</h3>

              <div className="brand-meaning-grid">

                <article className="meaning-card">
                  <div className="meaning-letter">TRIP</div>

                  <h4>Travel and Adventure</h4>

                  <p>
                    Travel, holidays, adventures and unforgettable
                    journeys that create beautiful memories.
                  </p>
                </article>

                <article className="meaning-card">
                  <div className="meaning-letter">NEST</div>

                  <h4>Comfort and Belonging</h4>

                  <p>
                    A comfortable, welcoming place where you feel
                    at home while planning your next journey.
                  </p>
                </article>

              </div>
            </div>

            <div className="brand-main-meaning">
              <span>OUR BRAND MEANING</span>

              <h3>
                A welcoming place to plan, discover and book your journeys.
              </h3>

              <p>
                TripNest brings together the excitement of travelling
                and the comfort of feeling at home. We aim to make
                discovering destinations, planning holidays and
                booking travel experiences simple and enjoyable.
              </p>
            </div>

            <div className="brand-values">

              <div className="brand-values-heading">
                <span>WHAT WE BELIEVE IN</span>
                <h3>The TripNest Promise</h3>
              </div>

              <div className="brand-values-grid">
                {brandValues.map(item => (
                  <article
                    className="brand-value-card"
                    key={item.title}
                  >
                    <div className="brand-value-icon">
                      {item.icon}
                    </div>

                    <h4>{item.title}</h4>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>

            </div>

            <div className="brand-closing">
              <h3>Every Journey Begins with a Dream.</h3>
              <p>Let TripNest help you make it memorable.</p>
              <strong>Your Journey, Our Passion.</strong>
            </div>

          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="booking-section" id="contact">

          <span>READY FOR YOUR NEXT ADVENTURE?</span>

          <h2>
            Let's plan your Coastal Karnataka escape.
          </h2>

          <p>
            Contact TripNest for package pricing, availability
            and booking details.
          </p>

          <div className="booking-actions">

            <a
              className="orange-button"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Enquiry →
            </a>

            <a
              className="outline-button"
              href="mailto:bookings@tripnesttravel.com"
            >
              Email TripNest
            </a>

          </div>

          <small>
            Package price and availability are not yet confirmed.
          </small>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="site-footer">

        <a className="brand footer-brand" href="#home">
          Trip<span>Nest</span>
        </a>

        <p>Your Journey, Our Passion.</p>

        <p>Explore • Experience • Enjoy</p>

        <small>
          © {new Date().getFullYear()} TripNest. All rights reserved.
        </small>

      </footer>

    </div>
  );
}

export default App;
