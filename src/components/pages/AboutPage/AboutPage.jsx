const founders = [
  {
    name: 'Akhil Meppath',
    title: 'Co-Founder',
    image: '/images/people/Akhil Meppath.jpeg',
    imageClass: 'object-center',
  },
  {
    name: 'Mufeedha',
    title: 'Co-Founder',
    image: '/images/people/Mufeedha.jpeg',
    imageClass: 'object-center',
  },
  {
    name: 'Nissam Muhammad',
    title: 'Co-Founder',
    image: '/images/people/Nissam muhammad.jpeg',
    imageClass: 'object-center',
  },
  {
    name: 'Sabith NP',
    title: 'Co-Founder',
    image: '/images/people/Sabith NP.jpeg',
    imageClass: 'object-[50%_22%] brightness-110 contrast-110',
  },
  {
    name: 'Sreedevi',
    title: 'Co-Founder',
    image: '/images/people/Sreedevi.jpeg',
    imageClass: 'object-center',
  },
];

const tripFlow = [
  {
    title: 'Plan',
    description: 'We design the itinerary, stays, and local experiences with safety and comfort first.',
  },
  {
    title: 'Connect',
    description: 'Travelers meet before the trip so everyone starts as a group, not as strangers.',
  },
  {
    title: 'Explore',
    description: 'From scenic spots to hidden gems, every day is built for memories and stories.',
  },
  {
    title: 'Belong',
    description: 'You return with a real travel circle that often continues to the next adventure.',
  },
];

const AboutPage = () => {
  return (
    <main className="bg-[#f4f6f2]" style={{ fontFamily: "'Urbanist', sans-serif" }}>
      <section className="relative w-full min-h-[720px] overflow-hidden text-white md:h-screen">
        <img
          src="/images/LandingPage/hero-bg.webp"
          alt="Milemakers travel backdrop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,16,12,0.86)_20%,rgba(25,38,30,0.72)_55%,rgba(9,14,11,0.8)_100%)]" />
        <div className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl" />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6 pt-28 md:px-16 md:pt-20">
          <div>
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs tracking-[0.25em] text-white/90 uppercase">
            About Milemakers
          </p>
          <h1
            className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We started as strangers on the road and built a travel family.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 md:text-xl">
            Milemakers was founded in Kerala on August 2, 2025, to make group travel feel safe, social, and full of
            real stories. We design every trip so solo travelers and friends can explore together without the stress
            of planning.
          </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#dce5d7] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#172319]">What We Build</h2>
            <p className="mt-3 text-[#334135]">
              Curated group journeys where transport, stays, and experiences are planned with care.
            </p>
          </div>
          <div className="rounded-3xl border border-[#dce5d7] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#172319]">What We Believe</h2>
            <p className="mt-3 text-[#334135]">
              The best part of travel is the people. We turn unknown faces into trusted travel buddies.
            </p>
          </div>
          <div className="rounded-3xl border border-[#dce5d7] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#172319]">Why It Works</h2>
            <p className="mt-3 text-[#334135]">
              Thoughtful itineraries, hidden local gems, and a community-first vibe from day one.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 md:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[#172319] md:text-5xl">The Founders of Milemakers</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[#394a3e] md:text-lg">
            Milemakers was founded by this team to create honest, people-first travel experiences that are exciting,
            inclusive, and memorable.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="group overflow-hidden rounded-[28px] border border-[#dce5d7] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className={`h-72 w-full object-cover transition duration-500 group-hover:scale-105 ${founder.imageClass || 'object-center'}`}
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#152216]">{founder.name}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-[#5d6f61]">{founder.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#dce5d7] bg-white p-8 md:p-10">
          <h2 className="text-3xl font-bold text-[#172319] md:text-4xl">How a Milemakers Trip Flows</h2>
          <p className="mt-3 max-w-3xl text-[#3e5043]">
            We keep every journey simple, social, and memorable so you can focus on the experience.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {tripFlow.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[#dbe7d8] bg-[linear-gradient(140deg,#f5faf3_0%,#edf4ea_100%)] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5a705d]">Step</p>
                <h3 className="mt-2 text-2xl font-bold text-[#172319]">{step.title}</h3>
                <p className="mt-3 text-[#3f5442]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
