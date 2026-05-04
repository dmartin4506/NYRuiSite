/** Placeholder photography — replace with project assets. */
export const images = {
  quote1: 'https://picsum.photos/id/1018/1920/1080',
  quote2: 'https://picsum.photos/id/1015/1920/1080',
  quote3: 'https://picsum.photos/id/1036/1920/1080',
  p1a: '/xu-week-1b.jpg',
  p2large: '/Jin Week 2A 最早接触到性.jpg',
  p2b: '/Xu Week 3C 困惑.jpg',
  p2c: '/Jin Week 3C 不明确的事.jpg',
  p1c: '/Jin Homebar C.jpg',
  p2d: '/Xu Week 3A 健康信息空间.jpg',
  p2e: '/Shuyu Week 2C自己明白.jpg',
  p2f: '/Shuyu Week 3A 空间.jpg',
  p2g: '/Jin Week 3A 空间.jpg',
  p1d: '/99 Week 2A 创作空间.jpg',
  p2h: '/99 Week 1B 真实_工作.jpg',
  p2i: '/99 Week 2 Post Removed.JPG',
  p1e: '/Jin Week 1D 一个空间.jpg',
  p2j: '/Jin Week 1D 一个空间（喝酒和自然都让我很舒服，取舍不了）.JPG',
  p2k: '/Pink.jpeg',
  p2l: '/Xu Week 3D 清晰.jpg',
  p2m: '/Shuyu Week 2B.jpg',
  p1b: '/Jin Week 2B 外界的教导.JPG',
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
  title: 'Inheriting Silence',
  subtitle:
    'Being a queer woman can not escape the "woman" part.',
  caption:
    'For Z, the color difference in the tea garden represents the different selves she carries: the obedient daughter vs. the independent woman; heterosexual appearance vs. homosexual identity. \u201cThe tree is like me,\u201d she says. \u201cI\u2019m always at\u00a0intersections.\u201d',
}

export const p1SectionE = {
  title: 'The Stable Life',
  subtitle: '\u201cWe are all chasing the same result. Some of us cannot reach it.\u201d',
  caption: 'Jin travels to Tibet when she feels trapped by analysis and by the impossibility of changing the broader status quo. In nature, she finds another scale for the self.',
}

export const p1SectionD = {
  title: 'The Vanishing Word(s)',
  subtitle: 'The word remains. The traffic does not.',
  caption: '99\u2019s favorite work environment.',
}

export const p1SectionC = {
  title: 'Substitute Maps',
  subtitle: 'Some things survive the way a minority epic survives. Sung from one mouth to the next, or lost.',
  caption: 'Guests at Jin\u2019s Women-Only home bar celebrate International Women\u2019s Day. They place pads on the wall to confront the shame surrounding the menstrual cycle. On the pads it reads: \u201cKeep Bleeding, Keep Undying. Strong, Courage\u201d. Photographed by Jin.',
}

export const p1SectionB = {
  title: '',
  subtitle:
    'Photograph Jin sent for in response to the prompt \u201cSomething you were told from others the \u2018correct way\u2019 about your relationship or body that stayed with you\u201d. The image shows a type of oversized T-shirt she would no longer choose to wear.',
}

export const p2bCaption =
  'A handwritten letter posted at \u5a18\u4fe9\u7f8e\u98df\u5e97, a mother-daughter restaurant in Hangzhou. Photographed by Z.'

export const p2cCaption =
  'Jin messages a friend about her confusion over not feeling the emotional response she thought she should have.'

export const p2dCaption =
  'Z and Ming search for a tampon tutorial on Bilibili.'

export const p2eCaption =
  'Shuyu photographs a two-colored flower. \u201cThis type of flower is made up of two colors on one stem,\u201d she says. \u201cIt feels connected to both the brightness and darkness I face with my identity.\u201d'

export const p2fCaption =
  'Shuyu usually searches for sexual health information in bed. \u201cIt\u2019s more secluded\u201d.'

export const p2mCaption =
  'Shuyu is confused by the standard physical boundary between women. She describes panicking when her friend (left) accidentally touches her (middle).'

export const p2lCaption =
  'Z\u2019s favorite image from a recent trip she finally convinced her mother to take with her. Her mother took the photograph. For Z, the image symbolizes a new leap into a new life.'

export const p2kCaption =
  'Sunrise after 99\u2019s ICU shift.'

export const p2jCaption =
  'Jin identifies the bar as a space where she feels more able to be herself. For her, both nature and alcohol create temporary openings: one through distance, the other through intimacy.'

export const p2iCaption =
  '99\u2019s censored post (right), edited here to protect her identity, shown alongside the violation notice she received from Douyin (left).'

export const p2hCaption =
  '99 photographs her laptop beside alcohol in response to a prompt about the boundary between professional role and personal identity. As a doctor, she feels the expectations placed on medical professionalism often conflict with her queer identity, her visual style, and her desire for self-expression.'

export const p2gCaption =
  'Jin says her exchanges about sexual health usually happen in bars with friends. \u201cEven among the younger generation, most people still avoid this topic a little. It\u2019s not that I find it difficult to speak about. It\u2019s that I don\u2019t feel I can talk about it with friends in broad daylight, in the middle of a crowd. So the bar becomes a relatively private space for exchange.\u201d'

export const p2Caption =
  'Jin\u2019s first sexual encounter was in the college dorm in college with her then girlfriend, in the building\non the left of the image.'

/** ~250 words — wide column intro */
export const introWide = `
A record number of people across the country are experiencing homelessness or housing instability that never registers in a census form. They move through doubled homes, borrowed nights, and fragile arrangements that keep roofs overhead until one argument, one job loss, or one illness collapses the whole scaffolding. This project follows that invisible corridor between housed and unhoused, where resilience is less a trait than a daily negotiation with time.

You will read reporting shaped like an essay and essays shaped like reporting: charts become margins, interviews become chorus, and statistics become doorways into faces we usually blur for privacy. The aim is not to flatten complexity into a slogan. The aim is to keep enough friction in the narrative that policy cannot pretend it has solved what it has merely renamed.

If you have ever slept uneasily in a living room with your shoes beside the couch, you already understand part of this story. The rest belongs to organizers, outreach workers, tenants, and neighbors who turn spare keys into strategy. Listen for their verbs: stabilize, document, appeal, wait. Waiting is the cruel tax levied on almost everyone in this pipeline.

What follows is an invitation to move slowly. Scroll through image and text as you would walk a city block: pause at corners, read the fine print on signs, and refuse the shortcut that turns human detail into a moral lecture. The colors here are deliberately stark—black, white, and the gray space where most people actually live.
`.trim()

/** ~500 words — narrow column */
export const narrowLong = `
The Biology textbook had a diagram of the female reproductive system. Two ovaries, two long fallopian tubes curving upward like a wishbone. The uterus and cervix and vagina each labeled in small, dutiful print. Outside the body, where the diagram ended, there was nothing.

| “学校画的教科书上面画的关于身体，关于性这一方面的解剖图，它是子宫和卵巢，它不会去画[阴蒂]。” – The anatomical diagram in the school textbook, the one meant to teach bodies and of sex, shows the uterus and the ovaries. It did not show [the clitoris].

This was the textbook 小井 Jin was given in ninth grade to learn herself from. She is twenty-three now, a finance graduate in a small city in Zhejiang, China, sitting for the civil service exam. The textbook, she tells me, is still in print.

In middle school, on an otherwise ordinary afternoon, Jin’s teacher walked into the classroom and announced that all the girls were to go to the auditorium. The boys would remain in their seats. In the auditorium, the school’s mental-health counselor, gave what would become, for many of the girls, the only formal lesson on their body in their three years of middle school. It was on how to use a sanitary pad.

In the United States, the equivalent session might be called health, and might cover, depending on the state, sex, condoms, consent, pregnancy, contraception, STI and how the body works for both genders. In Jin’s school, the session was called “生理课”—physiology. But a class on physiology meant girls, and girls meant menstruation, and menstruation meant learning how to conceal blood. Nothing in the auditorium suggested that the body might also be a site of knowledge, agency, desire, or danger.

I asked Jin whether the boys had been given a corresponding lesson, something about male puberty or their own bodies. She said no. I asked whether she had received any formal sex education from school or from home. She said from pre-school to college, none. At this, the language itself seemed to become contraband. “我感觉安全套这个词在学校里面就很敏感,更别说性了” —I think the word condom is very sensitive inside school, let alone “sex”.

The boys, who had been left out of the auditorium, had their own sex curriculum sourced elsewhere – Japanese pornography, mostly, by the early 2010s.
`.trim()

/** ~250 words */
export const followShort = `
Years later, when Jin had her first sexual experience, she did not know where her or her partner’s clitoris was. “我连阴蒂在哪里都不知。就是如此贫瞇的知识。” — “I didn’t know where the clitoris was. That is how impoverished the knowledge was.”

What was missing from the auditorium that afternoon was a language for the body that belonged to the girl who lived in it. Into that absence came an ambient pedagogy of shame.
`.trim()

export const afterP2b = `
The letter is taped to the door of a small restaurant owned by a mother and her grown daughter in Hangzhou, the quiet city next to Shanghai, renowned for the tranquil West Lake. The daughter wrote the letter by hand on a piece of stationery that has yellowed slightly beneath the tape. It explains why the restaurant exists.

The daughter had watched her mother spend years inside the small repeating tasks of family life. Her mother sighed constantly — at silence, at the smallest interruption, at the act of sitting down. So the daughter opened the restaurant. She put her mother’s name on the door and gave her mother work that belonged to her.

妈妈是一个深陷家庭的琐事中而很少感到幸福的人，但她却常常想把我拉进去… 我的妈妈是唯一的妈妈，被困住的她也是唯一的她。” My mother is a person who has rarely felt happy, sunk deep into the small repeating tasks of family life, and she keeps trying to pull me in with her… My mother is the only mother I have. The trapped version of her is also the only her.

The daughter also wrote what she feared their relationship was being narrowed to: 嫁了没、生了没、养了没 — Are you married yet, have you had a child yet, are you raising one yet. Three questions that, in many Chinese families, replace the rest of a mother-daughter conversation by the time the daughter is twenty-five.

“事情真的发生了改变。过去她常常叹气，动不动就叹气，空气一安静就叹气。但最近，我很少听见了。” [After opening the restaurant] Things really changed. She used to sigh constantly. Sigh at the smallest thing. Sigh whenever the air went quiet. Lately, I rarely hear it.

Z is finishing her undergraduate degree at a Sino-foreign joint-venture university in southern China, photographed the letter on a trip to Hangzhou. The letter had become famous on rednote. Women came to photograph the letter and to leave notes of their own taped beside.

Z’s mother is similar, she says. Not depressed, not unhappy in any way she would describe to a doctor. Just tethered. Retired ten years ago and still goes to the office every day. Refusing to travel for leisure. “她打的旗号就是她现在还有精力，还有能力，还有这个脑子去工作。她要珍惜这段时间，创造一些价値，然后为我和我哥做铺垫.” — Her banner is that since she still has the energy, still has the ability, still has the mind for work. She wants to make the most of this time, to create value, to lay groundwork for my brother and me. Z is twenty-one. Her brother is in his thirties. The road has long since been paved.

In a separate conversation two weeks earlier, Jin told another version of the same inheritance. Her mother is, she says, controlling. Tracking every choice. Years of pushing Jin toward the civil service exam — the most stable career a Chinese parent can imagine for a daughter, the one Jin is currently studying for in a small city she does not want to live in. As the shape of the only acceptable life for a woman.

Both mothers are high-achieving women. One runs a manufacturing company, the other works inside the government. Both have spent their professional lives inside the glass ceiling. Both also know the other ceiling, the one without a name, where a woman’s ambitions are expected to bend toward family, then bend further. A devoted mother. A caring partner. Then if anything is left over, herself.

Both daughters want lives their mothers do not want them to want. Z is leaving for a graduate program in the United States that her mother tried, late in the process, to redirect toward a school in Hong Kong instead — “closer to home, safer, less of a risk”.

For years, in conversations with her mother, Z cries before she can finish a sentence. “我又是泪失禁体质。还没有开始反驳我就开始哭了.” — I have a tear-incontinent body. I started crying before I even started to argue back. The tears arrive faster than the argument can be assembled.
`.trim()

/** ~250 words before grid */
export const beforeGrid = `
In the years when the girls in Jin’s class began to develop, most of them, she remembers, started wearing oversized T-shirts. The shirts were strategic. “宽松，其实它会减掉你刚发育的曲线”. Looseness, she explains, could subtract the new curves of a body that has just started becoming one. Girls hunched their shoulders to fold their chests inward, to get rid of the non-innocent stares and the obscene jokes no adolescence should bear.

The internet of those years taught the rest. Dark knees, the rumor went, were evidence the girl had been kneeling for a particular sex act. Vulvas with deeper pigmentation were a record of what had been done with the body, or to it. A girl licking the lid of a yogurt cup was advertising. A girl eating a banana, the same. Whatever you did had already been read.

In high school, Jin ordered a chest binder. She had not yet decided what she was, but she had decided what she did not want to be. The binder, when it arrived, did not feel like revelation. “It presses you down. It’s like a cage.” Pressed flat enough that the front of her body looked level, tight enough that her ribs felt held. She wore it twice and put it away.

She cut her hair short. She switched to neutral clothing. She did not think of it, then, as anything resembling transition. She thought of it as a way to stop being looked at.

Then, slowly, the looking stopped, and a different kind of looking began.

重男轻女 (zhòng nán qīng nǚ) is a phrase unique to the patriarchal grammar of Chinese family life: literally, heavy on the male, light on the female. The phrase is old enough that it sits inside ordinary conversation without being marked as ideology. In its rural form, 重男轻女 is the reason daughters’ names were not on the family tree, the reason a family with two girls might quietly try for a third child. It is a family phrase, though it rarely stays inside the family.

In Jin’s high school there was a math teacher who openly preferred her male students. She refused to answer girls’ questions in class. She once called a female student a “妈女” (jì nǚ)—a prostitute—to her face. But the math teacher liked Jin. She greeted her in the hallways. She told her she looked sharp. The word she used was 帅 (shuài) — handsome, cool, a word with a masculine charge.

It took Jin years to register what had happened. She had not become a boy. She had become the resemblance of what the system was willing to read as one — short hair, masculine clothing, 帅 — and the system rewarded her for it. The girls around her, still legibly feminine, were still being called whores by the same math teacher. Jin, in her oversized t-shirts and short hair, was being praised.

那一段扮演另外一个性别的经历，让我对我自己的身体有了一个新的认识。” That period of performing another gender gave me a new way of understanding my own body.

The cover gave her, briefly, a confidence she had not been permitted while uncovered. The same system that had taught her to be ashamed of her chest decided, once she pressed it flat, that she could be respected.

“我吃到了一点那个性别的红利。” I got to taste a little bit of the dividend that gender pays out.

She says it lightly, the way one says something whose anger has been suppressed but not disappeared.

---

What is composed of a woman? What should a woman be in Chinese society? If the education were not given at school, I thought, perhaps the answer would be given by the female figures at home.
`.trim()

export const afterP2c = `
Jin trained herself out of it. She had noticed early that emotions defeated the argument before the argument could be made — that people hearing a woman cry stop hearing what she is saying. “我会刻意不哭，就尽量不哭.” — I would deliberately not cry. I tried as hard as I could not to cry. By extension she trained herself out of the rest. “包括我有时候想要大笑或者是怎样的时候，我也尽量避免太激烈的情绪.” — Including when I felt like laughing out loud, I tried to avoid any feelings that strong. Anything emotional became a risk.

Neither learned what to ask for, or how to argue back without being washed away or shut down.

The auditorium where the girls had been pulled aside to learn how to manage a body had not taught them how to defend one.

---
`.trim()

export const afterP1c = `
In the spring of 2024, Z and her then-best-friend Ming, both undergraduates on study abroad in England, walked into a UK supermarket and stopped at the menstrual products aisle. She had not seen tampons of this variety of brands, sizes, length in a supermarket. Neither of them had ever used one. In China, the supermarket aisle for menstrual products is almost entirely sanitary pads. The idea of inserting objects into the female body, even for periods, was relative to shame back home.

They bought a box. They heard tampons were good for athletic days, it can reduce the discomfort of the friction and moisture that pads bring along. They went back to Ming’s apartment. Sitting on the bed with the box between them, neither of them knew what to do with it.

“我俩就在他的公寓里面拿着他的电脑，现场B站搜索这个使用教程。” The two of us sat in her apartment with the laptop and searched, right then, on Bilibili [Chinese equivalent of Youtube] for a how-to-use tutorial. –Z
`.trim()

export const afterP2d = `
The video they found is the photograph Z later sent for this project. The thumbnail title reads 少女用卫生棉条险丧命，用人体模型教你用卫生棉条 — A girl nearly died using a tampon: let a human-body model teach you how to use one. The clickbait warning is part of the curriculum. To get past the algorithm, the educational content has to wear the costume of a near-death cautionary tale.

“B站上的科普视频就是我们的教科书。” The popular-science videos on Bilibili are our textbook. –Z

Z is now twenty-one. Ming is now her girlfriend. They have been together for nearly two years. At the time in the UK apartment, neither knew the other was queer. They were watching the tutorial because they were trying to use a tampon for the first time. The realization about each other came later, by other routes.

I asked Z, at the end of the session about the photograph, whether she had ever ended up using tampons regularly. She laughed. She did enjoy the “lightness” and “refreshment” that tampons brought over pads. Ming had never tried again.

---
`.trim()

export const afterP2f = `
Outside the supermarket, the curriculum gets stranger.

When Shuyu, just turned twenty, a finance undergraduate in Zhejiang, was asked where she first encountered information about sex, she pointed to two sources: Thai Lesbian shows and Chinese danmei novels. Both are arguably the most important queer-media phenomena of the last decade in mainland China. Both reach audiences of millions under censorship through private communication channels like QQ, WeChat, and shady websites.

泰百 (tài bǎi) refers to a genre of Thai television focused on relationships between two women. The dramas are produced in Thailand, where queer representation in mass media is more permissive than in most of East Asia, and they reach Chinese audiences through subtitle communities and platform circulation. For Shuyu, a particular Thai Bai series in high school was the first time she had ever seen, on a screen, the choreography of how two women might touch each other. “他这个电视剧里面就涉及到一些性知识” — that drama actually contained some sexual knowledge, she says — 形象化的具体性关系发生的那种情形 — the abstract visualized form of how a sexual encounter between women actually happens. The dramas were not pornography. The dramas were also not a health class. The dramas were the only place she had ever seen the information.

耻美 (dān měi) is the larger Chinese-language genre of male-male romance fiction, mostly written by women, mostly read by women, mostly published online. Both Shuyu and Jin name danmei novels as their first encounter with queer desire. Jin notes the strangeness of the inheritance. The most influential queer fiction tradition in modern China is about men. “国内其实更加偏向于男男文学，很少有写女女的. 女女其实并不是一个热门的话题.” — Domestically, it’s heavily skewed toward male-male literature. Very little is written about women-women. Women-women isn’t really a popular topic. Even the underground curriculum was sourced through the male body.

For Shuyu, the gap is still there now. She is in her third year of undergraduate study, and she is still learning what her body is. When she does, it is from television, from novels, from a girlfriend, from the internet. From every source available except the ones that, in a different country, might have been institutional.

---

In Shenzhen, a small Chinese female sex-toy company called “大人糖” — “Grown Up Candy” — opened a brick-and-mortar store in a shopping mall around 2022. Jin remembers walking past the storefront with her then-girlfriend and feeling that something had shifted. “我觉得中国有希望了” — I thought, China has hope.

Jin and her girlfriend went inside. They bought a vibrator. The purchase came with an automatic invitation: a female-customer-only group chat on WeChat, hosted by the company. The chat is, by Jin’s account, one of the most thorough sex-education resources she has ever encountered in Chinese. Inside the chat, the company’s staff explains how to use the products without injuring oneself. They explain in clinical Chinese terminology, where the clitoris is and female sexual response. They debunk many of the online stereotypes about what is defined as a natural process of the female body, including how darker pigmentation has nothing to do with anything. Members of the group would post questions: I bled the day after sex but my period is not for two weeks, is this normal? Other members, who have lived through the same questions, answer.

“感觉有点像那种少数民族的史诗一样，只能靠人与人之间口口相传才能流传下来。” It feels like the epic of an ethnic minority. The only way it survives is from one person’s mouth to another’s.
`.trim()

export const afterP2g = `
I asked Jin a question she has been thinking about ever since.

The group chat, I said, is only accessible if you’ve made the purchase. The people who can’t afford the product can’t access the curriculum about the female body. So where do they go.

Jin paused. She had not, until that moment, named it that way. The strict moderation rules of the chat — no explicit sexual language, no euphemisms for the product, only clinical language — keep the chat from being deleted by the platform. But the price of the membership is a vibrator. The price of a sexual health lesson is the price of a sex toy.

A few years earlier, Jin notes, there had been a 公众号—a WeChat public account—that had circulated the same information for free. The account was eventually shut down. The company behind it dissolved. The information disappeared.

---
`.trim()

export const afterLineBreak3 = `
99 is twenty-six. She is a final-year medical resident in a public hospital in Shenzhen, finishing the three-year mandatory clinical training. She is the only doctor in this project. She sees, every week, what happens at the last possible point in the chain — the clinical encounter, where a young woman who has never been given any of the sexual health language might, in theory, finally be given some of it.

In her rotation through the emergency department, over the course of two weeks, she received three women who came in with the same problem.

“我在急诊科遇到几个女生，她这个避孕套掘在她的里面去了，那这个时候她就会来医院，然后让你给他取出来.” In the ER I would get several young women who came in because the condom had come off inside them. They came in panic and asked you to take it out.

99 retrieved the condom. In the few minutes available, she tried to teach. “跟她交代两句，说下次要小心点.” — I’d give her a couple of sentences. I’d say be more careful next time. She had more she could have given them — how to prevent it next time, what size matched what partner, what to do about the day-after risks, how to think about sexual health as something other than damage control.

“他们一般就是不会接下来去问.” They generally don’t go on to ask. The patients turned and walked out fast. “恨不得赶紧走” the kind of desperate hurry where they couldn’t wait to be gone.

I asked 99 whether her medical training had covered how to raise sexual health topics with patients in situations like these. The general physician-patient communication module is required, she said, and tested on the licensing exam in both written and clinical-simulation form.

“但是针对这个性教学的这种沟通，他确实是没有.” — But for how to initiate the specific kind of patient communication around sexual health, no, there really isn’t anything.

The reason, she says, is that the broader environment does not produce the demand. “大环境确实没有病人会来问这个问题.” — In the broader environment, no patient would really ask the question.

The three young women in 99’s ER had been taught, since middle school, that the female body is something to be handled privately, without naming. They handled the condom the same way they had been taught to handle the pad. In silence, alone, and quickly out the door.

99 had the language. She had the will. She had the medical background. What she did not have was a patient who would stay in the room long enough to use any of it.
`.trim()

export const afterP1d = `
99 likes to shoot her content in bars. She prefers to shoot with red ambient lighting with a single overhead direct light. Outside of her resident life, she is a lesbian lifestyle creator. She has been making content for four years. Her audience, across Douyin and Xiaohongshu (rednote), is roughly three hundred thousand.

The content is queer lifestyle. A getting-ready video. A cocktail after a hospital shift. A satire scene showing difficult patients. A photograph of her and her girlfriend, held an inch apart. Her audience is, by her own count, almost entirely other queer women. “国内的拉拉比较腊豔” — Chinese lalas are pretty shy. Her comments section is almost all respectful and praiseful. The audience is not the problem.

Lala—拉拉—is the most common informal Chinese-language term for lesbian. For most of the years that 99 has been online, the word people used to find her or other lesbian influencers was not a word at all. It was #le, two letters, the front edge of lesbian, no Chinese referent, no obvious dictionary match. The shorthand spread inside the community before the platforms understood it. Around it, slowly, an entire vocabulary of queer women’s lives accumulated—accounts, hashtags, views, livestreams, the dense informal infrastructure of a quiet community.

Then the platform learned. #le on Douyin is now technically searchable and effectively dead. The hashtag returns posts. The hashtag does not return traffic.

“现在打出来只是单纯一个标签，就是没有引流的作用了，就是可能别人刷不到你。” Now when you type it [#le] out, it’s just a label. It doesn’t channel traffic anymore. People probably won’t see you in their feed. – Shuyu

After #le was censored, the women went on for further exploration. “女同” (nǚ tóng; female homosexual) is short for “女同性恋” (nǚ tóng xìng liàn; female homosexuality). Some users found the rare Chinese character 姛 (dòng), which originally used to describe a woman’s stiff neck posture in ancient Chinese, coincidentally composed of the two characters 女同 (nǚ tóng; female homosexual) in one, built from the female radical and a phonetic component. Hashtag #姛 it goes. The other character 銅 (tóng)—copper—has the same pronunciation as 同 (tóng), with a metal radical component. The women proudly adapt it to present their grit and collective unity, which are as defiant as copper under suppression and neglect.

To name the roles inside a queer-women relationship, the community had imported another set of borrowed letters: T, P, and H. T, short for tomboy, names the more masculine-presenting partner. P, short for 婆 (pó; wife), names the more feminine. H, usually glossed as half, names someone who does not sort neatly into either role. The trio carries no exact equivalent in English-speaking lesbian culture; the closest analog, butch/musc and femme, comes from a different history. T, P, and H are how a Chinese lesbian might describe herself to a friend or on a date. For example, TTL (short for T and T Love) would be used to describe when both partners are more gender-neutral or masculine; PPL (short for P and P Love) would be used to describe two traditionally feminine-looking partners. There’s also TPL, HHL, THL, and PHL. It is important to note that within the lesbian community, members are trying to push for a non-binary and non-traditional gender roles dynamic.

All letters are now essentially dead as hashtags because they reference lesbian relationships.
“现在一般带的就是那种闺密什么女生帅起来，就是这种暗示的这种东西，没有说在光明正大的那种比如说带个T.” Now what people [queer women] use are tags like ‘bestie’ or ‘when girls turn handsome’ — these kinds of suggestive things. Nobody openly tags T anymore.

The word that did the work disappears. The work is done by adjacent words. The adjacency itself becomes the language. Then the platform learns the adjacent words, and the work moves again.
`.trim()

export const afterRuleBreak4 = `
“[在平台上] 两个女生之间是不允许有这种接吻，你可以假装去接吻，但是嘴巴必须要在10厘米之外。” [On platform], Two women aren’t allowed to actually kiss. You can pretend to. But your mouths have to be at least ten centimeters apart.

I asked her if the platforms actually measured. She said yes. The moderation models calculate facial distance. Posts that fall under the threshold are flagged.

Ruisi: 他们拿个尺量吗？ Do they actually use a ruler?
99: 对，而且是你的动作跟穿着就是不能很暴露，动作也不能拥有任何性暗示的那种感觉. Yes — and your movements and clothing also can’t be too exposed, and the movements can’t carry any sexual implication.

The same shot taken with a man and a woman in it would not be flagged. “男女情侣它要宽松很多。有性暗示的都行。因为在国内，它属于一个正向的一个道德价値观.” — Hetero couples are held to a much looser standard. Even the ones with obvious sexual implications. Domestically, they fall inside the category of a positive moral value.

So queer creators learn to encode. Shuyu, in a separate conversation, describes a livestream by a popular queer-coded creator who was dared to do Truth or Dare. The dare was to put on hand cream, in close-up, while a sexually charged song played behind her. The audience read the gesture before the moderation could. Hand cream became briefly the word for lesbian sexual acts.

A queer photographer 99 knows tags every shoot with #cos — short for cosplay — to get past moderation. Her work is genuine portraiture of lesbian couples in love. The photographs borrow the visual grammar from mainstream television or films. A particular kind of lighting from a famous drama, a recognizable framing from a film, so that each image arrives wearing the citation of an existing, permitted scene. “伪装成一个相当于演戏一样的那种感觉.” — Disguise it so it feels like acting, like a costume. If it is performance, it is permitted. If it is desire, it is not.

A queer woman cannot tag her work with the word for what it is. She can tag it with the word for the performance of what it is.

---

In response to the prompt “The types of content you have to remove, revise, or avoid using due to platform restrictions/A post that you want the world to see, but algorithms thinks otherwise”, 99 shared with me a still image of herself on a couch. She is in a tailored suit, head tilted back. Her girlfriend’s hand reaches across the frame toward her face. 99 looks in the direction of her partner.

She told me she had been trying to capture the look of someone who shows immense desire towards another person, registered through eye contact. She avoided any exposed skin, physical contact, or implied props. The only physical contact in the image was the girlfriend’s hand gently lying on her right shoulder.

Douyin removed the post. The notification she received gave the following classification:
涉及色情低俗内容 Involves pornographic and vulgar content.
`.trim()

export const afterP2i = `
The notice listed four sub-categories of violation she might have committed. Translated:
Display of vulgar behavior: through performance, imitation, or mockery, displaying or implying sexual acts, sexual organs, or related movements.
Publication or dissemination of vulgar pornographic information: describing sexual topics, or publishing pornographic content involving private body parts or behaviors, in text, audio, or video form.
Dissemination of vulgar private techniques: deliberate display, boasting of relevant abilities, or promotion or instruction of such methods and experiences.
Sale of vulgar simulated objects: promotion or sale of highly realistic items modeled on private body parts or improper behaviors.

Below the violations was a section headed “suggestions for modification.”
The platform encourages content suitable for all ages. Please focus on healthy themes. Avoid the direct display of vulgar private content. Build a clear and bright cyberspace with us.

The look 99 photographed was not in any of the four sub-categories. The photograph contained no body part the platform claimed to be regulating. What had been classified as 涉及色情低俗内容 was the look between two women.

She filed an appeal. The appeal was denied.
`.trim()

export const afterP1e = `
There is a phrase in Chinese, used most often in education and in professional contexts, that names the ambient theory of how a person’s worth is established. 唯结果论—result-only-ism, or the doctrine that only outcomes matter. Effort that does not produce a measurable result is not effort. Process is private and absorbs no credit. What is visible to the system is what the system rewards.

Jin names it directly.
我觉得国内现在应该也就只剩下两种人了。一种就是很重视过程，很重视结果，不重视过程。然后要么就是两个都很重视，但是绝对不可能有人跟你说，你过程当中好了就怎样，然后结果是不重要的。” I think there are really only two kinds of people left in China now. The kind who deeply values both the process and the result, and the kind who only values the result. There is no longer anyone who will tell you that the process going well is enough, that the result doesn’t matter.

The result, in 2026, has a fairly stable shape. A degree. A stable job. A stable partner. A child. A home. Jin had a name for it.

“可能是因为大家追求的结果，其实可以把它笼统的称之为稳定的生活。” Maybe what everyone is chasing, when you boil it down, can just be called the stable life.

稳定生活. The stable life. It is the floor everyone is meant to reach. It is also, for most of the people in this project, the floor that takes extra effort to stand on.

---

Jin had failed the civil service exam once already. She had been studying for it for over a year when she sat the first time. “我那时候真的就是觉得我一整年就是白过.” — I really felt that the entire year was wasted. She had spent most of her waking hours, for that year, inside what she called the boot camp of preparation. She had not built a career, she had not earned income, she had not accumulated the work skills. The exam was the only thing the year was for. She did not pass it.
`.trim()

export const afterP2j = `
Her father had a theory of effort. The theory, in his framing, was that enough effort would produce the result. If the result had not arrived, the effort had not been enough.

She is preparing to sit again. If she passes this time, the role she is preparing to take is one in which her queer life will not be available to her. The civil service does not formally prohibit queer employees. Coworkers will introduce coworkers to dating prospects. Performance reviews will include observations on character. A woman who declines, year after year, to accept the men her colleagues set up will become a woman whose colleagues notice the decline.

“我如果不想再考，就基本上不能讲这个。” If I don’t want to retake the exam, I basically can’t talk about this.

She meant: I cannot say I am queer. Not at work. Not on the record. The acceptance has risen among the young in the platform spaces, she said, has not risen among the older decision makers inside the civil service. “对中年还有很大一部分人，他可能三十几岁、四十几岁、五十几岁，对他们来说这一块还完全就是陌生的. 他们不会刷到这些东西，他们也就不会在这上面表态.” — For the large middle-aged group—people in their thirties and forties and fifties—this whole subject is entirely unfamiliar. They never see this kind of content in their feeds. They never weigh in on it.

The civil service does not require its employees to be straight. It requires them to be silent on the question. The silence is the price of the stability.

---
`.trim()

export const afterP2k = `
99 had finished her three-year residency. I had just congratulated her on her degree defense. She had a path into a public-hospital surgical career — a 三甲, the highest tier, with a mentor who had moved to a new affiliate and was prepared to bring her along. Her mother wanted her to take it.

99 has decided, against her mother’s wishes and against the easier path, to leave for medical esthetics, a private specialty. The role was a step away from the prestige of the public-hospital track. It was also a step into a different uniform — private clinic, private hours, no overnight rotations.

She was leaving with full awareness of what she was leaving behind. Public hospitals absorb their physicians’ liability. “医疗事故的承担者只有你自己.” — In a medical accident, the only person carrying it is yourself. She was starting from scratch in a specialty she had not been trained in. “我相当于是一个小白. 我是零基础.” — I am basically a blank slate. Zero foundation.

The reason was not financial. She told me about a morning she had photographed, a morning that became one of the images she sent for this project. She had worked a 22-hour shift in the ICU. She had clocked out at 5:50 a.m. The sun was rising over Shenzhen.

“原来也可以看到朝阳.” — So this is what it looks like, the morning sun.

She told me what the photograph meant to her.

“这个日子不是我想要的东西.” — This is not the life I want.

---
`.trim()

export const afterP2l = `
Z was leaving China.

She had received her acceptance to UPenn in the spring. The decision had been in her mother’s eyes, the wrong one. Her mother had wanted her to take the Hong Kong Polytechnic University offer. Z asked a family friend, a renowned professor, to call her mother on her behalf. “他给我打回来说任务完成了.” He called me back and said: Mission Accomplished. The professor had succeeded where Z’s tear-incontinent body had not. UPenn was confirmed.

What her mother did not know was the rest of the calculation. Z had been long-distance from her girlfriend, Ming, for nearly two years — Ming is in Boston. The graduate program was Z’s professional life and also a vehicle for the kind of long-distance queer relationship that was not, in mainland China in 2026, easy to maintain. Moving away from her mother’s grip was the same gesture as moving toward Ming. They were one decision.

---
`.trim()

export const afterP2m = `
Shuyu’s version of the same constraint was smaller and quieter.

“其实我还有个小小的一个标准，就是不想异地. 对，都在xx市.” — I have one small criterion. I don’t want long-distance. We have to both be in [the same city].
`.trim()

export const afterP2m2 = `
---

By the last week of the project, I had been thinking about something with no clear shape yet. The country’s professional and educational systems run on result-only-ism. The result in its standard form is built around a heterosexual marriage and a child. If the system is structured so that only this result counts as the real result, then queer women are competing in a category whose finish line has been moved out of reach without the legal framework for same sex marriage.

I asked Jin whether she thought queer women’s emotional lives were structurally incompatible with result-only-ism.

She did not answer the way I expected.
“可能是因为大家追求的结果，其实可以把它笼统的称之为稳定的生活. 我说一系列，然后他们结婚生子，最后有了一段稳定的生活，相互依靠，稳定的感情，稳定的生活. 同样的，其实对于先少数来说，我觉得也是一样。也是找一个不错的伴侣，然后拥有一个稳定的生活. 然后两个人的关系可以被父母知道了解，支不支持另外说，就是知道了解，然后可以在一起居住生活.” Maybe the result everyone is chasing, when you boil it down, can just be called the stable life. The whole sequence — marriage, children, mutual reliance, a stable feeling, a stable life. For sexual minorities — I think it’s the same. Finding a good partner and having a stable life. Their parents knowing about it, knowing the relationship. The support is a separate matter, but at least the knowing — being able to live together.”

Jin had also been thinking about how the country is slowly changing.

“过去的几百年上千年都是比较同固定模式的一种压迫. 如果说你要在短期的五年、十年之内去做出改变，他没有办法很快的有反应.” For the past several hundred or thousand years it has been a fairly fixed pattern of suppression. To ask it to change within a short window — five years, ten years — it cannot respond that quickly.

She also knew the rate at which it was changing was not the rate at which her own life was being lived. Z would have, in Philadelphia, what Jin would not — a country where the relationship could be named at the door of any apartment without translation. Jin cannot leave. Jin was sitting for the civil service exam. Jin had been thinking about how to live in the meantime.

“我现在觉得佛教还挺好，就是一旦我接受了，人生下来就是为了受苦受难的话，那我对我现在经历的这一切我都毫无怨言. 真是毫无怨言. 然后就会让我稍微好受一点，因为我觉得这是我应得的. 虽然说我不信教，我只是觉得这个解释还没有没没没有蒓有实用意义.” I find Buddhism quite useful now. Once I accept that humans are born to suffer, I have no complaints about anything I am currently going through. Truly no complaints. It makes me feel slightly better, because I think this is what I deserve. I don’t believe in the religion. I just find the explanation has a kind of practical value.
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
