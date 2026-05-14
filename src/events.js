const events = [
  {
    id: 1,
    name: "Lagos Music Festival",
    category: "Music",
    location: "Lagos, Nigeria",
    date: "June 24, 2026",
    image:
      "https://images.unsplash.com/photo-1594122107402-e0a8ede4655d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fExhZ29zJTIwbmlnaHQlMjBNdXNpYyUyMEZlc3RpdmFsfGVufDB8fDB8fHww",
    description:
      "Experience Lagos nightlife with headline artists, DJs, and a packed festival crowd.",
    regularPrice: 5000,
    vipPrice: 10000,
  },
  {
    id: 2,
    name: "Tech Innovation Summit",
    category: "Technology",
    location: "Abuja, Nigeria",
    date: "July 10, 2026",
    image:
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGVjaCUyMElubm92YXRpb24lMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Join founders, engineers, and investors for talks on the future of African technology.",
    regularPrice: 8000,
    vipPrice: 16000,
  },
  {
    id: 3,
    name: "Fashion Week Lagos",
    category: "Fashion",
    location: "Lagos, Nigeria",
    date: "July 15, 2026",
    image:
      "https://images.unsplash.com/photo-1733322986999-2ce54a7c6d0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmFzaGlvbiUyMFdlZWslMjBMYWdvc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "See runway collections from emerging and established designers across West Africa.",
    regularPrice: 4000,
    vipPrice: 8000,
  },
  {
    id: 4,
    name: "Startup Pitch Day",
    category: "Business",
    location: "Port Harcourt, Nigeria",
    date: "June 30, 2026",
    image:
      "https://plus.unsplash.com/premium_photo-1664472642294-735deb0fbbe8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fFN0YXJ0dXAlMjBQaXRjaCUyMERheXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Watch promising startups pitch their ideas to mentors, angels, and venture partners.",
    regularPrice: 3500,
    vipPrice: 7000,
  },
  {
    id: 5,
    name: "Creative Arts Expo",
    category: "Arts",
    location: "Ibadan, Nigeria",
    date: "August 2, 2026",
    image:
      "https://images.unsplash.com/photo-1692689386358-910e46764d20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFmcmljYSUyMENyZWF0aXZlJTIwQXJ0cyUyMEV4cG98ZW58MHx8MHx8fDA%3D",
    description:
      "Explore paintings, installations, and live art sessions from local creative studios.",
    regularPrice: 4000,
    vipPrice: 8000,
  },
  {
    id: 6,
    name: "AI & Data Science Conference",
    category: "Technology",
    location: "Lagos, Nigeria",
    date: "September 5, 2026",
    image:
      "https://images.unsplash.com/photo-1558008322-9793c57cb73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxBSSUyMCUyNiUyMERhdGElMjBTY2llbmNlJTIwQ29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A full day of machine learning workshops, data talks, and practical AI demos.",
    regularPrice: 9000,
    vipPrice: 18000,
  },
  {
    id: 7,
    name: "Food & Culture Festival",
    category: "Lifestyle",
    location: "Benin City, Nigeria",
    date: "August 15, 2026",
    image:
      "https://images.unsplash.com/photo-1638059616867-16c03b4494b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fE5pZ2VyaWElMjBGb29kJTIwJTI2JTIwQ3VsdHVyZSUyMEZlc3RpdmFsfGVufDB8fDB8fHww",
    description:
      "Taste regional dishes, meet local vendors, and enjoy cultural performances.",
    regularPrice: 5000,
    vipPrice: 10000,
  },
  {
    id: 8,
    name: "Digital Marketing Summit",
    category: "Business",
    location: "Lagos, Nigeria",
    date: "September 15, 2026",
    image:
      "https://images.unsplash.com/photo-1699962699910-b2a5e9d44757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpZ2l0YWwlMjBNYXJrZXRpbmclMjBTdW1taXR8ZW58MHx8MHx8fDA%3D",
    description:
      "Learn campaign strategy, analytics, content planning, and growth from marketing leaders.",
    regularPrice: 6000,
    vipPrice: 12000,
  },
  {
    id: 9,
    name: "Street Music Jam Session",
    category: "Music",
    location: "Yaba, Lagos, Nigeria",
    date: "September 20, 2026",
    image:
      "https://images.unsplash.com/photo-1689864727821-e47577e88226?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEFmcmljYSUyMFN0cmVldCUyME11c2ljJTIwSmFtJTIwU2Vzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Catch live street performances, freestyle sessions, and acoustic sets from new artists.",
    regularPrice: 1500,
    vipPrice: 3000,
  },
  {
    id: 10,
    name: "Entrepreneurship Workshop",
    category: "Business",
    location: "Osogbo, Nigeria",
    date: "September 25, 2026",
    image:
      "https://images.unsplash.com/photo-1720700126957-769e2f2fc0fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxFbnRyZXByZW5ldXJzaGlwJTIwV29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    description:
      "Build better business plans, pricing models, and launch strategies with experienced mentors.",
    regularPrice: 3500,
    vipPrice: 7000,
  },
  {
    id: 11,
    name: "Photography Exhibition",
    category: "Arts",
    location: "Abeokuta, Nigeria",
    date: "October 10, 2026",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGhvdG9ncmFwaHklMjBFeGhpYml0aW9ufGVufDB8fDB8fHww",
    description:
      "View documentary, portrait, and street photography from rising Nigerian photographers.",
    regularPrice: 5000,
    vipPrice: 15000,
  },
  {
    id: 12,
    name: "University Tech Fair",
    category: "Technology",
    location: "Oyo, Nigeria",
    date: "November 20, 2026",
    image:
      "https://images.unsplash.com/photo-1776823300754-d67e731434f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGVjaCUyMEZhaXJ8ZW58MHx8MHx8fDA%3D",
    description:
      "Discover student-built apps, robotics demos, hackathon projects, and career booths.",
    regularPrice: 3000,
    vipPrice: 6000,
  },
  {
    id: 13,
    name: "Beach Music Party",
    category: "Music",
    location: "Lekki, Lagos, Nigeria",
    date: "December 15, 2026",
    image:
      "https://images.unsplash.com/photo-1767346828077-e44a29d67242?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fExhZ29zJTIwTXVzaWMlMjBGZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Dance by the shoreline with DJs, live performers, food stalls, and sunset views.",
    regularPrice: 5000,
    vipPrice: 15000,
  },
  {
    id: 14,
    name: "Comedy Night Live",
    category: "Comedy",
    location: "Ikeja, Lagos, Nigeria",
    date: "October 18, 2026",
    image:
      "https://images.unsplash.com/photo-1696946909069-2722be4172c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fENvbWVkeSUyME5pZ2h0JTIwTGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "A night of stand-up, improv, and special guest performances from crowd favorites.",
    regularPrice: 3000,
    vipPrice: 9000,
  },
  {
    id: 15,
    name: "Wellness Yoga Retreat",
    category: "Wellness",
    location: "Calabar, Nigeria",
    date: "October 24, 2026",
    image:
      "https://images.unsplash.com/photo-1644612105654-b6b0a941ecde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdlbGxuZXNzJTIwWW9nYSUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D",
    description:
      "Reset with guided yoga, breathwork, healthy meals, and calm outdoor sessions.",
    regularPrice: 7000,
    vipPrice: 14000,
  },
  {
    id: 16,
    name: "Indie Film Screening",
    category: "Film",
    location: "Victoria Island, Lagos",
    date: "November 2, 2026",
    image:
      "https://images.unsplash.com/photo-1586798237143-dabbf54f8904?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxJbmRpZSUyMEZpbG0lMjBTY3JlZW5pbmd8ZW58MHx8MHx8fDA%3D",
    description:
      "Watch independent short films and join a filmmaker Q&A after the screening.",
    regularPrice: 4500,
    vipPrice: 9000,
  },
  {
    id: 17,
    name: "Esports Gaming Arena",
    category: "Gaming",
    location: "Abuja, Nigeria",
    date: "November 7, 2026",
    image:
      "https://images.unsplash.com/photo-1633545505446-586bf83717f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RXNwb3J0cyUyMEdhbWluZyUyMEFyZW5hfGVufDB8fDB8fHww",
    description:
      "Compete in tournaments, watch finals live, and meet gaming creators.",
    regularPrice: 2500,
    vipPrice: 7500,
  },
  {
    id: 18,
    name: "Book Fair & Author Talks",
    category: "Literature",
    location: "Enugu, Nigeria",
    date: "November 14, 2026",
    image:
      "https://images.unsplash.com/photo-1759255258996-c944b8c23c5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJvb2slMjBmYWlyfGVufDB8fDB8fHww",
    description:
      "Browse new releases, meet authors, and attend writing conversations and readings.",
    regularPrice: 2000,
    vipPrice: 5000,
  },
  {
    id: 19,
    name: "Afro Dance Showcase",
    category: "Dance",
    location: "Surulere, Lagos",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFuY2UlMjBzaG93Y2FzZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Enjoy choreographed performances, dance battles, and guest showcases from top crews.",
    regularPrice: 3500,
    vipPrice: 8500,
  },
  {
    id: 20,
    name: "City Marathon Expo",
    category: "Sports",
    location: "Lagos, Nigeria",
    date: "December 5, 2026",
    image:
      "https://images.unsplash.com/photo-1771402900134-d55059668f04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYW4lMjBtYXJhdGhvbiUyMHJhY2V8ZW58MHx8MHx8fDA%3D",
    description:
      "Meet runners, shop fitness brands, and collect race kits before marathon weekend.",
    regularPrice: 3000,
    vipPrice: 8000,
  },
  {
    id: 21,
    name: "Charity Gala Dinner",
    category: "Charity",
    location: "Ikoyi, Lagos",
    date: "December 18, 2026",
    image:
      "https://images.unsplash.com/photo-1731476027156-bc1f19652412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGRpbm5lciUyMGV2ZW50fGVufDB8fDB8fHww",
    description:
      "An elegant fundraising evening with dinner, awards, music, and community impact stories.",
    regularPrice: 12000,
    vipPrice: 30000,
  },
];

export default events;
