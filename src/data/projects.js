// Projects shown on the Home and Work pages, and on each project's detail page (/work/:slug).
// Text in [brackets] is a placeholder — replace it with the real details.
// A shot is either a label (shows a placeholder) or { label, img } to show a screenshot.
// Desktop screenshots fill the slide; add mobile: true for a phone screenshot.
import nexuxMobile from '../assets/images/nexuximg.jpeg'
import nexuxhome from '../assets/images/nexuxhome.jpeg'
import nexuxservices from '../assets/images/nexuxservices.jpeg'
import nexuxinsights from '../assets/images/nexuxinsights.jpeg'

export const projects = [
  {
    slug: 'sportsconnect', name: 'SportsConnect', client: 'Student-athlete recruitment', cat: 'product', type: 'Platform', mono: 'Sc', tint: '#0F7A52',
    desc: 'Recruitment platform connecting Ghanaian student-athletes with opportunities.', stack: ['React', 'Tailwind'],
    tagline: 'Connecting Ghanaian student-athletes with recruiters and opportunities.',
    role: 'Frontend development', year: '[Year]',
    shots: ['Home', 'Athlete profile', 'Search & discovery', 'Mobile view'],
    story: [
      { label: 'Challenge', title: 'Talented student-athletes were hard for recruiters to find.', body: 'Student-athletes in Ghana needed a way to show their talent and get in front of schools, scouts and programmes — and recruiters needed a simple way to discover them.' },
      { label: 'Approach', title: 'Clear profiles and easy discovery.', body: 'I built the frontend in React and Tailwind around reusable components — athlete profiles, search and filters — so the platform stays fast and easy to use on any device.' },
      { label: 'Outcome', title: '[Headline result — e.g. what athletes and recruiters can now do.]', body: '[Add measurable results or client feedback once you have them: launch date, sign-ups, quotes.]' },
    ],
  },
  {
    slug: 'philgood-homes', name: 'PhilGood Homes', client: 'East Legon Hills, Accra', cat: 'booking', type: 'Booking', mono: 'Pg', tint: '#5B3FA0',
    desc: 'Short-stay apartment booking site with availability and enquiries.', stack: ['React', 'Tailwind'],
    tagline: 'Short-stay apartments in East Legon Hills, ready to book.',
    role: 'Frontend development', year: '[Year]',
    shots: ['Home', 'Apartments', 'Availability', 'Mobile view'],
    story: [
      { label: 'Challenge', title: 'Guests needed a simple way to check availability and get in touch.', body: 'PhilGood Homes wanted its own website where guests could browse the apartments, see when they are free and send an enquiry directly.' },
      { label: 'Approach', title: 'A clean, mobile-first booking experience.', body: 'I built the site in React and Tailwind with clear apartment listings, an availability view and a straightforward enquiry flow.' },
      { label: 'Outcome', title: '[Headline result — e.g. more direct bookings.]', body: '[Add measurable results or client feedback once you have them: launch date, enquiries, quotes.]' },
    ],
  },
  {
    slug: 'lm-auto-deals', name: 'LM Auto Deals', client: 'Car import dealership', cat: 'web', type: 'Website', mono: 'Lm', tint: '#222225',
    desc: 'Full frontend for a Ghana-based car import dealership — inventory, listings and enquiries.', stack: ['React', 'Vite', 'Tailwind'],
    tagline: 'Imported cars, listed clearly and easy to enquire about.',
    role: 'Frontend development', year: '[Year]',
    shots: ['Home', 'Inventory', 'Car listing', 'Mobile view'],
    story: [
      { label: 'Challenge', title: 'Buyers needed to see the stock and ask about it quickly.', body: 'LM Auto Deals, a Ghana-based car import dealership, needed a website that shows its inventory and makes it easy for buyers to enquire.' },
      { label: 'Approach', title: 'Inventory-first design.', body: 'I built the full frontend in React, Vite and Tailwind — inventory pages, detailed car listings and enquiry forms.' },
      { label: 'Outcome', title: '[Headline result — e.g. more enquiries from the website.]', body: '[Add measurable results or client feedback once you have them: launch date, enquiries, quotes.]' },
    ],
  },
  {
    slug: 'aklass-luxury-stay', name: 'Aklass Luxury Stay', client: 'Wolverhampton, UK', cat: 'booking', type: 'Booking', mono: 'Ak', tint: '#8A5A22',
    desc: 'Direct-booking website for an entire-home luxury stay in the UK.', stack: ['React', 'Booking flow'],
    tagline: 'A direct-booking home for an entire-home luxury stay in Wolverhampton.',
    role: 'Frontend development', year: '[Year]',
    shots: ['Home', 'The property', 'Booking flow', 'Mobile view'],
    story: [
      { label: 'Challenge', title: 'Bookings depended on third-party platforms.', body: 'Aklass Luxury Stay wanted its own website so guests could book the property directly.' },
      { label: 'Approach', title: 'Show the property, then make booking easy.', body: 'I built the site in React with a gallery-led property page and a simple direct-booking flow.' },
      { label: 'Outcome', title: '[Headline result — e.g. more direct bookings.]', body: '[Add measurable results or client feedback once you have them: launch date, bookings, quotes.]' },
    ],
  },
  {
    slug: 'ledge-rock', name: 'Ledge Rock', client: 'Lakeside development, Missouri', cat: 'web', type: 'Brand + web', mono: 'Lr', tint: '#3F5A3A',
    desc: 'Website and brand for a lakeside land development near Table Rock Lake.', stack: ['React', 'Branding'],
    tagline: 'Brand and website for a lakeside land development near Table Rock Lake.',
    role: 'Brand & frontend development', year: '[Year]',
    shots: ['Home', 'The land', 'Brand', 'Mobile view'],
    story: [
      { label: 'Challenge', title: 'A new development needed an identity and a home online.', body: 'Ledge Rock, a lakeside land development in Missouri, needed a brand and a website to introduce the project to buyers.' },
      { label: 'Approach', title: 'Brand and site designed together.', body: 'I created the brand and built the website in React, so the look and feel stay consistent from logo to landing page.' },
      { label: 'Outcome', title: '[Headline result — e.g. what the client can now do.]', body: '[Add measurable results or client feedback once you have them: launch date, enquiries, quotes.]' },
    ],
  },
  {
    slug: 'nexux', name: 'Nexux', client: 'Marketing technology agency', cat: 'web', type: 'Agency site', mono: 'Nx', tint: '#111111',
    desc: 'The website for Nexux, the agency I co-founded.', stack: ['React', 'Vite', 'Tailwind'],
    tagline: 'The website for Nexux, the marketing technology agency I co-founded.',
    role: 'Co-founder & frontend development', year: '[Year]',
    shots: [
      { label: 'Home', img: nexuxhome },
      { label: 'Services', img: nexuxservices },
      { label: 'Insights', img: nexuxinsights },
      { label: 'Mobile view', img: nexuxMobile, mobile: true },
    ],
    story: [
      { label: 'Challenge', title: 'A new agency needed to show what it does.', body: 'Nexux needed a website that explains its services clearly and gives potential clients a reason to get in touch.' },
      { label: 'Approach', title: 'Fast, focused and easy to update.', body: 'I built the site in React, Vite and Tailwind with reusable sections so new services and work can be added quickly.' },
      { label: 'Outcome', title: '[Headline result — e.g. what the agency can now do.]', body: '[Add measurable results or client feedback once you have them: launch date, leads, quotes.]' },
    ],
  },
]

export const projectHref = (p) => `/work/${p.slug}`

const featuredSlugs = ['sportsconnect', 'philgood-homes', 'aklass-luxury-stay']
export const featured = featuredSlugs.map((s) => projects.find((p) => p.slug === s))
