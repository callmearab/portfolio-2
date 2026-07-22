// Blog / articles data.
//
// To publish a new post, add a new object to this array. Each `content`
// entry is one paragraph (rendered as its own <p>). `slug` becomes the
// URL at /blog/<slug> and must be unique.

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string[]
  tag: string
  date: string
  readTime: string
}

export const posts: Post[] = [
  {
    slug: 'lessons-from-a-student-management-system-at-2000-users',
    title: 'What I Learned Shipping a Student Management System to 2,000+ Users',
    excerpt: 'Leading the front-end for a real, production non-profit system — and the two-day debugging sprint that taught me more than any course could.',
    tag: 'Web Development',
    date: 'Jul 2026',
    readTime: '5 min read',
    content: [
      "When our team set out to build a Student Management System for Future Bridge, it stopped being a classroom exercise the moment real students started depending on it. Over 2,000 active students now use the system we shipped, and that changes how you write code — every edge case is a real person's data, not a hypothetical test.",
      "As front-end lead, my job was to make the system feel simple even though the backend — JavaScript, PHP, Node.js, and MySQL working together — was anything but. I spent most of my time on two things: making sure the interface stayed usable under real network conditions, and making sure our CRUD operations didn't quietly get slower as more students joined.",
      "The hardest problem hit us during the final phase: student ID cards, generated as PDFs, started failing intermittently right before deployment. There's no elegant story here — I read through thousands of lines of code, isolated the failure to a formatting edge case in the generation pipeline, and fixed it in two days of focused, occasionally frustrating work.",
      "What stuck with me afterward wasn't the fix itself, but what the process taught me about staying calm under a deadline. Our project ended up evaluated as the best among 25 competing submissions, and I optimized our CRUD operations to run roughly 40% more efficiently than the baseline approach most peers used. But the real win was proving to myself that I could take ownership of a problem nobody else wanted to touch, and see it through.",
    ],
  },
  {
    slug: 'teaching-databases-to-people-older-than-me',
    title: 'Teaching Databases to Students Older Than Me',
    excerpt: 'A few honest notes on stepping into a classroom as a teenage instructor, and what actually earns trust when you\'re the youngest person in the room.',
    tag: 'Education',
    date: 'Jun 2026',
    readTime: '4 min read',
    content: [
      "Walking into a room to teach MySQL, SQL, and database architecture to university students — most of them older than me — was not something I eased into. The first few sessions, I over-prepared out of nerves: extra slides, backup explanations, more examples than anyone needed.",
      "What actually earned trust wasn't the extra preparation. It was being honest when a query didn't behave the way I expected, and debugging it live instead of pretending I already knew the answer. Students relax the moment they see you treat a mistake as something to solve, not something to hide.",
      "Ten hours a week, week after week, is also just a different kind of discipline than building something once and moving on. Curriculum has to get better every cycle — the same explanation that clicks for one student falls flat for the next, so I've learned to keep two or three different ways of explaining the same concept ready.",
      "I still don't think age is really the variable that matters in a classroom. Clarity is. If I can make a foreign key constraint or a normalized schema click for someone, it doesn't matter whether I'm older or younger than they are.",
    ],
  },
  {
    slug: 'why-i-lead-volunteer-organizations-alongside-a-full-course-load',
    title: 'Why I Keep Leading Volunteer Organizations Alongside a Full Course Load',
    excerpt: 'On juggling technical work with youth leadership roles, and why I don\'t think of them as competing for the same hours.',
    tag: 'Leadership',
    date: 'May 2026',
    readTime: '4 min read',
    content: [
      "People sometimes ask how I manage teaching, freelance database work, and several volunteer leadership roles at the same time. The honest answer is that I stopped treating them as separate categories competing for the same hours a while ago.",
      "Coordinating an astronomy and space science conference for 250+ students, for instance, used exactly the same project-management muscle as scoping a client's database migration — timelines, dependencies, people who need a clear ask instead of a vague one. The skills transfer both directions.",
      "What I actually had to learn, and I'm still learning it, is when to say no. Early on I said yes to almost everything, and quality suffered across the board. Now I ask a simple question before taking anything on: does this genuinely expand access to technology or education for someone who wouldn't otherwise have it? If not, it waits.",
      "The organizations I lead all point at the same underlying goal — closing the gap between the opportunities that exist globally and the ones that reach students in under-resourced communities like where I grew up. That shared purpose is what makes juggling all of it feel like one job instead of five.",
    ],
  },
]
