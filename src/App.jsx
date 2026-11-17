
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from "react-router-dom";
import "./App.css";

/* =========================================
   TRIPNEST CONTENT
========================================= */

const itinerary = [
  {
    day: "DAY 1",
    date: "Friday, 20 November 2026",
    place: "Bengaluru to Murudeshwar",
    slug: "murudeshwar-journey",
    image: "https://images.openai.com/static-rsc-4/ihmI9NQF3B_IJTxy901aMM6aP9gX4Q4PFGhka9zo0KhTaL-y3GDWqgKYngNUCoGm7gh5oXbAq7DuObiFsTaLGJfZJSgWB__CuM47US3I8WnJbHCJtYG7S04VM4qyBoX8PMHRIndV0MJte7RKpPmA4AktrJHSv0rUuZRPkbem_ufsIcJGrf7ZvqeapbLwbnAG?purpose=fullsize",
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
    slug: "murudeshwar",
    image: "https://images.openai.com/static-rsc-4/ULPItKzjGxpQ3QrgAeVERUOyRF2_GLJjQCYE_Q779uZdV_VslbMEuxK50HH8Qacq5FrGCsJPn326kozHARjH5FXnIPt7l21OwfBNeDrBw7bxnjqFdMloYQnm-yd2iyX3oCJG1PYB7TWWDF3Sg-OrdZfeJywczbFaZ4PJ7EoE0fphyFLIDD4WNYacZCmEFt64?purpose=fullsize",
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
    slug: "honnavar-kumta",
    image: "https://images.openai.com/static-rsc-4/WER4JIPtYQgbp8-tKa5Cu-I0MFabD0Tz27CRUPk62vN8AaKqOWTgNTt12GYPh4m0S6m5w3XpgWViwNrj8jNKDs-dBWXvaUhHHgPIWaDCVlMNMT2nzvg9hh_qZkpFFEcqGZoQlMfZxFiHYSZTmlp9NVIDo2J76e0Nw7DU5MvrMB18xTxqDGuwtfSLjkf0XcPH?purpose=fullsize",
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
    slug: "return-to-bengaluru",
    image: "https://images.openai.com/static-rsc-4/tFeiOrWh43qS3pSxP2KRtMVFC7PbvXOfgIqArqw9LTQTrb2OlfpsjdRt1BSDe2D80mYAOU4t6kBYxl-_pn1xo4WufEQFcoL1YAWSHnNA6FOKB0Nr5F63eClsb4Heu60tPfmezFJgAuW3wXZTokRRcuWZ7MGxcTEeIJsOE3W8Y3E?purpose=inline",
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
    detail: "Scuba diving experience, subject to availability and sea conditions.",
    slug: "netrani-island"
  },
  {
    icon: "🛕",
    title: "Murudeshwar",
    detail: "Visit the famous temple, Shiva statue and beach.",
    slug: "murudeshwar"
  },
  {
    icon: "🚣",
    title: "Honnavar",
    detail: "Sharavathi backwater and mangrove boating, subject to availability.",
    slug: "honnavar"
  },
  {
    icon: "🌅",
    title: "Kumta",
    detail: "Beach visit and sunset, time permitting.",
    slug: "kumta"
  }
];

const brandValues = [
  {
    icon: "❤️",
    title: "Customer First",
    detail: "We believe every traveller deserves a welcoming and enjoyable travel experience."
  },
  {
    icon: "🧭",
    title: "Discover More",
    detail: "Explore beautiful destinations, exciting adventures and unforgettable journeys."
  },
  {
    icon: "🛡️",
    title: "Trust and Transparency",
    detail: "Clear information and honest communication at every step of your journey."
  },
  {
    icon: "🏡",
    title: "Feel at Home",
    detail: "A comfortable and friendly place to discover, plan and book your trips."
  }
];

/* =========================================
   DETAIL PAGE CONTENT
   Add more destinations here when needed.
========================================= */

const destinationDetails = {
  "murudeshwar-journey": {
    title: "Bengaluru to Murudeshwar",
    subtitle: "Begin your Coastal Karnataka escape",
    category: "THE JOURNEY",
    location: "Bengaluru to Murudeshwar, Karnataka",
    duration: "Overnight bus journey",
    image: itinerary[0].image,
    gallery: [
      itinerary[0].image,
      itinerary[1].image,
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
    ],
    description: "Start your coastal holiday with an overnight journey from Bengaluru to Murudeshwar. Travel by regular non-sleeper seater bus and arrive ready to explore Karnataka's beautiful coastline.",
    highlights: [
      "Depart Bengaluru preferably in the evening.",
      "Travel by regular non-sleeper seater bus.",
      "Confirm your boarding point and departure time with the bus operator.",
      "Arrival time depends on the selected bus service and road conditions."
    ],
    activities: ["Overnight bus journey", "Coastal holiday begins", "Arrival and transfer arrangements"],
    note: "Bus timings, ticket prices and boarding points must be confirmed with the bus operator."
  },

  "murudeshwar": {
    title: "Discover Murudeshwar",
    subtitle: "Temple, ocean views and coastal adventures",
    category: "COASTAL DESTINATION",
    location: "Murudeshwar, Uttara Kannada, Karnataka",
    duration: "Day 2 of your trip",
    image: itinerary[1].image,
    gallery: [
      itinerary[1].image,
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200"
    ],
    description: "Murudeshwar is a coastal destination known for its seaside temple, towering Shiva statue and scenic beach. It is also the starting point for excursions to Netrani Island.",
    highlights: [
      "Visit Murudeshwar Temple.",
      "See the famous Shiva statue and coastal views.",
      "Enjoy time at Murudeshwar Beach.",
      "Explore the possibility of a Netrani Island scuba diving trip."
    ],
    activities: ["Temple visit", "Shiva statue viewpoint", "Beach time", "Optional scuba diving excursion"],
    note: "Scuba diving is subject to operator availability, weather and sea conditions. Confirm the price, inclusions and safety requirements before booking."
  },

  "netrani-island": {
    title: "Netrani Island Adventure",
    subtitle: "Explore the underwater world of the Arabian Sea",
    category: "ADVENTURE EXPERIENCE",
    location: "Netrani Island, off the Karnataka coast",
    duration: "Day trip from the Murudeshwar area",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
      "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1200",
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1200"
    ],
    description: "Netrani Island is known for its marine environment and diving experiences. A scuba diving excursion can be a memorable addition to a Murudeshwar coastal holiday.",
    highlights: [
      "Ask local operators about available scuba diving sessions.",
      "Check weather and sea conditions before departure.",
      "Confirm equipment, instructor support and safety arrangements.",
      "Check age, health and swimming requirements with the operator."
    ],
    activities: ["Scuba diving enquiry", "Boat transfer, if available", "Marine-life experience"],
    note: "This is an optional activity, not a confirmed inclusion. Availability, pricing and sea conditions must be verified with the operator."
  },

  "honnavar": {
    title: "Explore Honnavar",
    subtitle: "Backwaters, mangroves and peaceful coastal scenery",
    category: "NATURE DESTINATION",
    location: "Honnavar, Uttara Kannada, Karnataka",
    duration: "Day 3 of your trip",
    image: itinerary[2].image,
    gallery: [
      itinerary[2].image,
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200"
    ],
    description: "Honnavar offers a beautiful mix of river landscapes, coastal scenery and peaceful natural surroundings. The Sharavathi backwater area is a popular setting for boating experiences.",
    highlights: [
      "Explore Sharavathi backwater scenery.",
      "Ask about mangrove boating availability.",
      "Visit Kasarkod Eco Beach if time permits.",
      "Enjoy the natural beauty of the Honnavar coastline."
    ],
    activities: ["Backwater sightseeing", "Optional mangrove boating", "Kasarkod Eco Beach visit"],
    note: "Boating depends on local operator availability, weather, water conditions and the day's schedule."
  },

  "kumta": {
    title: "Experience Kumta",
    subtitle: "Relax by the beach and enjoy the coastal sunset",
    category: "BEACH DESTINATION",
    location: "Kumta, Uttara Kannada, Karnataka",
    duration: "Day 3 of your trip",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200"
    ],
    description: "Kumta is a coastal town with beautiful beaches and relaxed seaside scenery. Enjoy a beach visit and, if time permits, watch the sunset before beginning the return journey.",
    highlights: [
      "Enjoy a coastal beach visit.",
      "Take time for photographs and a relaxed walk.",
      "Enjoy the sunset if the schedule allows.",
      "Proceed to the confirmed bus boarding point."
    ],
    activities: ["Beach visit", "Coastal photography", "Sunset, time permitting", "Return bus boarding"],
    note: "The Kumta visit and sunset are subject to the day's travel schedule and bus departure time."
  },

  "honnavar-kumta": {
    title: "Honnavar and Kumta Coastal Trail",
    subtitle: "A day of backwaters, beaches and coastal scenery",
    category: "COASTAL EXPERIENCE",
    location: "Honnavar and Kumta, Karnataka",
    duration: "Day 3 of your trip",
    image: itinerary[2].image,
    gallery: [
      itinerary[2].image,
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
    ],
    description: "Discover two beautiful coastal areas in one day. Begin with the backwater scenery around Honnavar, visit Kasarkod Eco Beach and continue towards Kumta for a beach visit.",
    highlights: [
      "Breakfast and check out from your accommodation.",
      "Travel to Honnavar for backwater sightseeing.",
      "Consider mangrove boating if available.",
      "Visit Kasarkod Eco Beach.",
      "Continue to Kumta for a beach visit and sunset, time permitting."
    ],
    activities: ["Honnavar backwaters", "Optional mangrove boating", "Kasarkod Eco Beach", "Kumta beach visit"],
    note: "The schedule is subject to local activity availability, road conditions and the return bus departure."
  },

  "return-to-bengaluru": {
    title: "Return to Bengaluru",
    subtitle: "Take home memories from the Karnataka coast",
    category: "RETURN JOURNEY",
    location: "Kumta to Bengaluru, Karnataka",
    duration: "Day 4 of your trip",
    image: itinerary[3].image,
    gallery: [
      itinerary[3].image,
      itinerary[2].image,
      itinerary[1].image
    ],
    description: "After exploring the Karnataka coastline, board your regular seater bus from Kumta and travel back to Bengaluru. Your arrival is expected on Monday morning, depending on the selected service.",
    highlights: [
      "Board the confirmed bus from Kumta.",
      "Keep your ticket and identification ready.",
      "Arrival in Bengaluru is expected Monday morning.",
      "Confirm the final arrival point and time with the bus operator."
    ],
    activities: ["Return bus journey", "Arrival in Bengaluru", "End of the coastal escape"],
    note: "Arrival time depends on the bus service, traffic and road conditions."
  }
};

/* =========================================
   SHARED HELPERS
========================================= */

const whatsappNumber = "91XXXXXXXXXX";

function WhatsAppButton({ title = "Coastal Karnataka Weekend Escape" }) {
  const message = encodeURIComponent(
    `Hello TripNest! I am interested in ${title}. Please share the price and availability.`
  );

  return (
    <a
      className="orange-button"
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp Enquiry →
    </a>
  );
}

/* =========================================
   HOMEPAGE
========================================= */

function HomePage() {
  return (
    <div className="tripnest">
      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-symbol">⌁</span>
          Trip<span>Nest</span>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <a href="#package">Packages</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#brand-identity">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">Enquire Now</a>
      </header>

      <main>
        {/* HERO */}
        <section className="package-hero" id="home">
          <div className="hero-shade"></div>
          <div className="hero-content">
            <span className="hero-tag">TRIPNEST FEATURED EXPERIENCE</span>
            <h1>Coastal Karnataka<br />Weekend Escape</h1>
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

        {/* ROUTE */}
        <section className="route-section" id="package">
          <div className="route-heading">
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Explore the Coastal Route</h2>
            <p>One journey, beautiful destinations and unforgettable memories.</p>
          </div>

          <div className="route-container">
            <div className="route-top-info">
              <div>
                <span>🗓️ TRAVEL DATES</span>
                <strong>20–23 November 2026</strong>
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
              {[
                {
                  day: "DAY 1 · FRIDAY",
                  place: "Bengaluru",
                  icon: "🏁",
                  detail: "Our journey begins.",
                  label: "STARTING POINT"
                },
                {
                  day: "DAY 2 · SATURDAY",
                  place: "Murudeshwar",
                  icon: "🛕",
                  detail: "Temple, Shiva statue, beach and Netrani Island scuba diving.",
                  label: "COASTAL EXPERIENCE"
                },
                {
                  day: "DAY 3 · SUNDAY",
                  place: "Honnavar",
                  icon: "🚣",
                  detail: "Explore Sharavathi backwaters and mangrove boating.",
                  label: "NATURE EXPERIENCE"
                },
                {
                  day: "DAY 3 · SUNDAY",
                  place: "Kumta",
                  icon: "🌅",
                  detail: "Enjoy beautiful beaches and a coastal sunset.",
                  label: "BEACH EXPERIENCE"
                },
                {
                  day: "DAY 4 · MONDAY",
                  place: "Bengaluru",
                  icon: "🏠",
                  detail: "Return with beautiful memories.",
                  label: "RETURN POINT"
                }
              ].map((stop, index) => (
                <article className="route-stop" key={stop.place + index}>
                  <div className={`route-marker ${index === 0 ? "start-marker" : ""} ${index === 4 ? "end-marker" : ""}`}>
                    {stop.icon}
                  </div>
                  <div className="route-stop-content">
                    <small>{stop.day}</small>
                    <h3>{stop.place}</h3>
                    <p>{stop.detail}</p>
                    <span className="route-label">{stop.label}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="route-bottom">
              <span>✦</span>
              <p>Explore More. Experience More.</p>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS - NOW CLICKABLE */}
        <section className="content-section">
          <div className="section-title">
            <span>THE EXPERIENCE</span>
            <h2>Discover Coastal Karnataka</h2>
            <p>Four memorable days along Karnataka's beautiful coastline.</p>
          </div>

          <div className="highlight-grid">
            {highlights.map(item => (
              <Link
                className="highlight-card highlight-card-link"
                to={`/destinations/${item.slug}`}
                key={item.title}
                aria-label={`Explore ${item.title}`}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="card-explore-link">Explore details ↗</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ITINERARY - NOW CLICKABLE */}
        <section className="content-section itinerary-section" id="itinerary">
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
              <Link
                className="premium-day-card premium-day-card-link"
                key={item.day}
                to={`/experiences/${item.slug}`}
                aria-label={`View details for ${item.place}`}
              >
                <div className="premium-day-image">
                  <img src={item.image} alt={item.place} loading="lazy" />
                  <span className="premium-day-badge">{item.day}</span>
                  <span className="image-view-label">View details ↗</span>
                </div>

                <div className="premium-day-details">
                  <div className="premium-day-date">{item.date}</div>
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
                  <span className="day-details-link">Explore this day <span>→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* INFORMATION */}
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
                itinerary. Other accommodation arrangements need confirmation.
              </p>
            </article>
          </div>
        </section>

        {/* BRAND IDENTITY */}
        <section className="content-section brand-identity-section" id="brand-identity">
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
              <h3>A welcoming place to plan, discover and book your journeys.</h3>
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
                  <article className="brand-value-card" key={item.title}>
                    <div className="brand-value-icon">{item.icon}</div>
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

        {/* BOOKING */}
        <section className="booking-section" id="contact">
          <span>READY FOR YOUR NEXT ADVENTURE?</span>
          <h2>Let's plan your Coastal Karnataka escape.</h2>
          <p>Contact TripNest for package pricing, availability and booking details.</p>

          <div className="booking-actions">
            <WhatsAppButton />
            <a className="outline-button" href="mailto:bookings@tripnesttravel.com">
              Email TripNest
            </a>
          </div>

          <small>Package price and availability are not yet confirmed.</small>
        </section>
      </main>

      <footer className="site-footer">
        <Link className="brand footer-brand" to="/">
          Trip<span>Nest</span>
        </Link>
        <p>Your Journey, Our Passion.</p>
        <p>Explore • Experience • Enjoy</p>
        <small>© {new Date().getFullYear()} TripNest. All rights reserved.</small>
      </footer>
    </div>
  );
}

/* =========================================
   DESTINATION / EXPERIENCE DETAIL PAGE
========================================= */

function DetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const detail = destinationDetails[slug];

  if (!detail) {
    return (
      <div className="tripnest detail-not-found">
        <h1>Destination not found</h1>
        <p>We couldn't find the page you're looking for.</p>
        <Link className="orange-button" to="/">Return to TripNest</Link>
      </div>
    );
  }

  return (
    <div className="tripnest detail-page">
      <header className="topbar detail-topbar">
        <Link className="brand" to="/">
          <span className="brand-symbol">⌁</span>
          Trip<span>Nest</span>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/#itinerary">Itinerary</Link>
          <Link to="/#brand-identity">About Us</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <Link to="/#contact" className="nav-button">Enquire Now</Link>
      </header>

      <main>
        {/* DETAIL HERO */}
        <section
          className="detail-hero"
          style={{ backgroundImage: `url("${detail.image}")` }}
        >
          <div className="detail-hero-shade"></div>

          <div className="detail-hero-content">
            <button className="back-button" onClick={() => navigate(-1)}>
              ← Back
            </button>

            <span className="detail-category">{detail.category}</span>
            <h1>{detail.title}</h1>
            <p>{detail.subtitle}</p>

            <div className="detail-meta">
              <span>📍 {detail.location}</span>
              <span>🗓️ {detail.duration}</span>
            </div>

            <a href="#detail-information" className="orange-button">
              Discover More ↓
            </a>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="detail-overview content-section" id="detail-information">
          <div className="detail-overview-copy">
            <span className="detail-eyebrow">DISCOVER WITH TRIPNEST</span>
            <h2>Experience {detail.title}</h2>
            <p>{detail.description}</p>
            <div className="detail-overview-note">
              <span>✦</span>
              <p>{detail.note}</p>
            </div>
          </div>

          <div className="detail-overview-image">
            <img src={detail.image} alt={detail.title} />
          </div>
        </section>

        {/* GALLERY */}
        <section className="detail-gallery-section">
          <div className="section-title">
            <span>PHOTO GALLERY</span>
            <h2>A Glimpse of the Experience</h2>
            <p>Explore the beauty of this coastal experience.</p>
          </div>

          <div className="detail-gallery">
            {detail.gallery.map((image, index) => (
              <a
                className={`detail-gallery-image detail-gallery-image-${index + 1}`}
                href={image}
                target="_blank"
                rel="noreferrer"
                key={`${slug}-gallery-${index}`}
                aria-label={`Open photo ${index + 1}`}
              >
                <img src={image} alt={`${detail.title} view ${index + 1}`} loading="lazy" />
                <span>View photo ↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="content-section detail-highlights-section">
          <div className="section-title">
            <span>WHAT TO EXPECT</span>
            <h2>Experience Highlights</h2>
          </div>

          <div className="detail-highlight-grid">
            {detail.highlights.map((item, index) => (
              <article className="detail-highlight-card" key={index}>
                <span className="detail-highlight-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="content-section detail-activities-section">
          <div className="section-title">
            <span>MAKE THE MOST OF YOUR VISIT</span>
            <h2>Things to Explore</h2>
          </div>

          <div className="detail-activity-list">
            {detail.activities.map((activity, index) => (
              <div className="detail-activity-item" key={index}>
                <span>✦</span>
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="detail-booking">
          <span>PLAN YOUR NEXT EXPERIENCE</span>
          <h2>Ready to explore {detail.title}?</h2>
          <p>
            Contact TripNest for details, availability and package information.
          </p>
          <div className="booking-actions">
            <WhatsAppButton title={detail.title} />
            <Link to="/#itinerary" className="outline-button">
              View Full Itinerary
            </Link>
          </div>
          <small>Availability, activity prices and inclusions must be confirmed before booking.</small>
        </section>

        {/* MORE DESTINATIONS */}
        <section className="content-section related-section">
          <div className="section-title">
            <span>KEEP EXPLORING</span>
            <h2>More Coastal Experiences</h2>
          </div>

          <div className="related-grid">
            {[
              { slug: "murudeshwar", name: "Murudeshwar", image: itinerary[1].image },
              { slug: "honnavar", name: "Honnavar", image: itinerary[2].image },
              { slug: "kumta", name: "Kumta", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900" },
              { slug: "netrani-island", name: "Netrani Island", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900" }
            ]
              .filter(item => item.slug !== slug)
              .map(item => (
                <Link
                  className="related-card"
                  to={`/destinations/${item.slug}`}
                  key={item.slug}
                >
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div>
                    <h3>{item.name}</h3>
                    <span>Explore destination ↗</span>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Link className="brand footer-brand" to="/">
          Trip<span>Nest</span>
        </Link>
        <p>Your Journey, Our Passion.</p>
        <p>Explore • Experience • Enjoy</p>
        <small>© {new Date().getFullYear()} TripNest. All rights reserved.</small>
      </footer>
    </div>
  );
}

/* =========================================
   ROUTER
========================================= */

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destinations/:slug" element={<DetailPage />} />
      <Route path="/experiences/:slug" element={<DetailPage />} />
      <Route path="*" element={<DetailPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
