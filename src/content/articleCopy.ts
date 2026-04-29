/** Placeholder photography — replace with project assets. */
export const images = {
  quote1: 'https://picsum.photos/id/1018/1920/1080',
  quote2: 'https://picsum.photos/id/1015/1920/1080',
  quote3: 'https://picsum.photos/id/1036/1920/1080',
  p1a: 'https://picsum.photos/id/1043/1920/1080',
  p2large: 'https://picsum.photos/id/1047/1920/1080',
  p1b: 'https://picsum.photos/id/1054/1920/1080',
  grid: [
    'https://picsum.photos/id/1062/800/600',
    'https://picsum.photos/id/1074/800/600',
    'https://picsum.photos/id/1083/800/600',
    'https://picsum.photos/id/1084/800/600',
  ] as const,
} as const

/** Split doubled-newline blocks into paragraphs for `<p>` mapping. */
export function toParagraphs(text: string): string[] {
  return text
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

export const quotes = [
  '“Home is not a place you find once; it is the quiet work of showing up for strangers until they become kin.”',
  '“We measure policy in budgets, but dignity lives in doorways, couches, and the patience of a spare room.”',
  '“If the story begins with judgment, we never reach the question that saves anyone: what would help tomorrow?”',
] as const

export const overallTitle =
  'When Stability Vanishes, Stories Become the Map We Share'

export const p1SectionA = {
  title: 'Lines at shelters do not tell the whole truth',
  subtitle:
    'They count bodies under roofs for one night, but they miss the hidden geography of generosity that keeps families off the street.',
}

export const p1SectionB = {
  title: 'Four windows into one impossible week',
  subtitle:
    'Parallel photographs remind us that hardship rarely arrives as a single headline; it arrives as four errands and one cracked phone screen.',
}

export const p2Caption =
  'Morning light on empty bedding: the scene stays calm while the week ahead refuses to hold still.'

/** ~250 words — wide column intro */
export const introWide = `
A record number of people across the country are experiencing homelessness or housing instability that never registers in a census form. They move through doubled homes, borrowed nights, and fragile arrangements that keep roofs overhead until one argument, one job loss, or one illness collapses the whole scaffolding. This project follows that invisible corridor between housed and unhoused, where resilience is less a trait than a daily negotiation with time.

You will read reporting shaped like an essay and essays shaped like reporting: charts become margins, interviews become chorus, and statistics become doorways into faces we usually blur for privacy. The aim is not to flatten complexity into a slogan. The aim is to keep enough friction in the narrative that policy cannot pretend it has solved what it has merely renamed.

If you have ever slept uneasily in a living room with your shoes beside the couch, you already understand part of this story. The rest belongs to organizers, outreach workers, tenants, and neighbors who turn spare keys into strategy. Listen for their verbs: stabilize, document, appeal, wait. Waiting is the cruel tax levied on almost everyone in this pipeline.

What follows is an invitation to move slowly. Scroll through image and text as you would walk a city block: pause at corners, read the fine print on signs, and refuse the shortcut that turns human detail into a moral lecture. The colors here are deliberately stark—black, white, and the gray space where most people actually live.
`.trim()

/** ~500 words — narrow column */
export const narrowLong = `
Crashing at someone’s house, doubling up, couch surfing: the vocabulary sounds casual because shame encourages euphemism. In kitchens where three generations share two bedrooms, the rent has become a weather system. You track it the way farmers track frost—when it arrives early, you lose more than you thought you had planted.

Emergency shelter was designed as a short bridge, but bridges freeze when the river underneath keeps widening. Families rotate through relatives until relatives exhaust patience and boundaries harden into eviction-by-silence. Young adults return to childhood bedrooms that no longer fit their bodies or their schedules. Older adults hide precarity from children who have children of their own, swallowing pride because pride does not renew a lease.

The official counts struggle because instability refuses to stand still for a survey. Someone might be housed on paper while sleeping in a car between shifts. Someone might be “housed” in a hotel paid by a voucher that expires on a date circled in red. Someone might be camping because shelters separate partners, ban pets, or trigger panic in ways that a nylon tent by the river does not. Policy loves binary categories; lived experience prefers a gradient.

Yet gradients do not erase urgency. When winter arrives, gradients kill as efficiently as cliffs do. That is why mutual aid networks matter—not as replacements for public obligation, but as proof that neighbors still recognize obligation when governments stall. A warm meal is data. A ride to an appointment is data. A donated phone with minutes left is data about what survival actually costs.

If you want to understand housing instability, ask people what they did last Tuesday. Tuesday is where plans survive or dissolve. Tuesday is groceries, childcare, shift changes, court dates, and the moment you discover your paperwork vanished in a bag stolen from a laundromat. Large narratives ride on Thursdays; survival rides on Tuesday.

This section keeps the column narrow on purpose. It asks your eyes to move line by line instead of skimming. It asks your attention to behave like a bench in a busy hallway: stay put for a minute, let bodies pass, notice what the hallway tries not to name.
`.trim()

/** ~250 words */
export const followShort = `
After the wide paragraphs compress, the story still breathes. Relief is not always release; sometimes it is simply the absence of a new crisis until sundown. Photographs will widen again soon, filling your screen the way a sudden weather front fills a horizon—first as rumor, then as fact.

Until then, hold onto one practical truth: listening changes what gets counted. When outreach workers record names without rushing spelling, when reporters quote tenants without turning pain into spectacle, when landlords face cameras without hiding behind LLC fog, the map becomes sharper. A sharper map does not guarantee justice, but it makes injustice harder to confuse with fate.

If you are reading this as policy, ask what Tuesday looks like in your district. If you are reading this as a neighbor, ask what you can stabilize—not as charity theater, but as infrastructure with memory. If you are reading this while unstable yourself, we hope the layout feels respectful: large type when you need air, narrow columns when you need precision, and silence between sections because silence is also a form of room.
`.trim()

/** ~250 words before grid */
export const beforeGrid = `
The next grid asks your scroll to do editorial work. Four images will compete for attention; one will brighten while the others recede, mimicking the way memory crowds some faces forward and lets others blur. It is a mechanical metaphor, but metaphors are sometimes honest machines.

None of the photographs here claims to stand for “the homeless.” They are placeholders—literal stock images—waiting for your reporting to replace them with names you have permission to speak and contexts you have earned the right to describe. Until then, treat them as lacunae: shaped emptiness that marks where evidence should go.

When you replace images, replace captions with specifics: cross streets, seasons, the sound of a bus line, the texture of a policy acronym when spoken aloud by someone who must live inside it. Specificity is not decoration; it is accountability wearing sensible shoes.

Read the grid slowly. Let your eyes argue with the highlight. Notice how quickly your brain wants a winner, a face, a single story to carry the weight of many. Resist that shortcut until the essay earns it.
`.trim()

/** ~600 words — closing */
export const closingLong = `
Closing essays often pretend closure exists. This one will not. Housing justice is not a ribbon-cutting; it is a ledger kept across years—rent boards, bond campaigns, tenant unions, code inspections, court watchers, social workers with impossible caseloads, and residents who know which elevator stalls and which stairwell lights lie. If this site leaves you with one actionable feeling, let it be stubborn curiosity about that ledger in your own town.

Start with public records that sound boring until they become biographies: eviction filings, code violations, building permits, shelter bed counts, outreach logs. Boring is sometimes a costume that power wears to avoid scrutiny. Learn to read through it the way you learn to read tide charts—not because you love numbers, but because you love someone standing at the shoreline.

Then move toward organizations doing material work without demanding gratitude theater. Mutual aid is not a vibe; it is logistics. Labor is not “heartwarming”; it is scheduling, transportation, translation, childcare, and storage. When you donate, ask what recurring need exists. When you volunteer, ask who trains you so you do not harm the people you intend to help. Good intentions are not infrastructure; boundaries and budgets are.

Journalism here should follow the same discipline. Quote people with context. Protect identities when safety requires it, but do not erase individuality behind adjectives like “vulnerable,” a word that often functions as a polite wall. Pay freelancers on time. Credit photographers. Link primary documents. If you cannot verify a claim, say so plainly; speculation should wear its name tag.

Design matters because dignity includes readability. High contrast is not an aesthetic flex; it makes text legible for tired eyes. Large scroll moments are not vanity; they offer rest stops for attention. A narrow column is not elitist; it reduces line length so comprehension stays human-scaled. If you adapt this template, keep testing with real readers—especially readers using screen readers, keyboards only, or older phones.

Finally, return to Tuesday. Policy proposals live in hearings; families live in minutes. If your project moves money, move it toward stability that lasts longer than a press cycle. If your project moves narratives, move them toward precision that protects people rather than polishing reputations. And if you are living this story rather than writing about it, may the next door you open—literal or bureaucratic—lead somewhere drier, warmer, and freer than the last.

Thank you for reading. Replace this paragraph first; it is only scaffolding. Keep the margins honest.
`.trim()
