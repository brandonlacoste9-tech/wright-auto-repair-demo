const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "480 440-4098",
  "hero.kicker": "Mesa, Arizona · Honest, affordable, reliable",
  "hero.title": "Honest. Affordable.<br>Reliable.",
  "hero.sub": "5.0-star rated (53 reviews): fair prices, quick service and exceptional customer care — the Mesa shop customers recommend to their friends.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Fri",
  "stats.hours": "Open weekdays 8 – 5",
  "stats.makesNum": "5.0",
  "stats.makes": "rating · 53 reviews",
  "stats.diagNum": "Fair",
  "stats.diag": "prices, quick service",
  "stats.quoteNum": "Trusted",
  "stats.quote": "Mesa's honest shop",
  "services.kicker": "What we do",
  "services.title": "Dependable auto repair",
  "services.s1t": "Oil changes & maintenance",
  "services.s1d": "Fast, affordable oil changes and scheduled maintenance.",
  "services.s2t": "A/C repair",
  "services.s2d": "Mesa heat is no joke — A/C diagnosed and repaired quickly.",
  "services.s3t": "Brake service & repair",
  "services.s3d": "Pads, rotors and brake work at fair, transparent prices.",
  "services.s4t": "Engine repair & overhaul",
  "services.s4d": "From diagnostics to full engine overhauls — dependable work.",
  "services.s5t": "Electrical service",
  "services.s5d": "Auto electrical diagnosis and repair done right.",
  "services.s6t": "General auto repair",
  "services.s6d": "Whatever your car needs — honest advice and your choice of options.",
  "walkin.w1t": "Honest & reliable",
  "walkin.w1d": "Customers' words, not ours",
  "walkin.w2t": "Fair prices",
  "walkin.w2d": "Never let a customer down",
  "walkin.w3t": "Quick service",
  "walkin.w3d": "Back on the road fast",
  "makes.kicker": "All makes and models",
  "makes.title": "Your car is welcome here",
  "makes.sub": "Cars, SUVs and light trucks — domestic and import, we service them all.",
  "why.kicker": "Why choose us",
  "why.title": "Mesa's integrity-based shop",
  "why.intro": "Busy for a good reason: fair prices, quick service, transparent communication — and customers who've trusted Wright Auto Repair for years.",
  "why.l1t": "Integrity-based service",
  "why.l1d": "Transparent communication and dependable work, every visit.",
  "why.l2t": "5.0-star rated",
  "why.l2d": "53 reviews, every one of them glowing.",
  "why.l3t": "Your choice of work",
  "why.l3d": "You choose the level of work you want done — no pressure.",
  "why.l4t": "16 years in business",
  "why.l4d": "Serving Mesa drivers since 2010.",
  "products.kicker": "We install",
  "products.title": "Quality parts we trust",
  "products.sub": "The same quality parts we install every day — ask us what's right for your car.",
  "products.p1t": "Brake pads & rotors",
  "products.p1d": "Quality brake components for every make — installed right.",
  "products.p2t": "Car batteries",
  "products.p2d": "Reliable batteries tested and installed while you wait.",
  "products.p3t": "A/C components",
  "products.p3d": "Compressors and A/C parts that beat the Arizona heat.",
  "products.note": "Call us to check availability for your vehicle.",
  "products.cta": "Call to ask",
  "gallery.kicker": "The shop in action",
  "gallery.title": "Fair prices, careful work",
  "gallery.c1": "A/C service for Arizona heat",
  "gallery.c2": "Clean, careful oil service",
  "gallery.c3": "Brake inspection done right",
  "reviews.kicker": "Word on the street",
  "reviews.title": "5.0 stars from 53 reviews",
  "reviews.more": "<strong>5.0 rating · 53 reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Are your prices really fair?",
  "faq.a1": "Customers consistently praise our fair prices and transparent communication — you'll approve the work before we start.",
  "faq.q2": "Do I get to choose how much work is done?",
  "faq.a2": "Yes — we explain your options and you choose the level of work you want.",
  "faq.q3": "Do you do engine overhauls?",
  "faq.a3": "Yes — from oil changes and A/C repair to full engine overhauls.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday, 8:00 AM to 5:00 PM. Closed weekends.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Customer favorite",
  "promo.title": "Fair prices, quick service",
  "promo.text": "Oil changes to full engine overhauls — transparent communication, your choice of how much work to do, and prices that respect your budget.",
  "promo.cta": "Call Wright Auto Repair",
  "footer.tag": "Honest auto repair · Mesa, Arizona"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
