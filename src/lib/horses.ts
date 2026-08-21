export type HorseStatus = "Permanent Resident" | "Future Rehoming Candidate" | "Available for Adoption";

export type Horse = {
  id: string;
  name: string;
  status: HorseStatus;
  sex: string;
  breed: string;
  journeyBegan: string;
  tagline: string;
  description: string;
  storyTitle: string;
  fullStory: string;
  lookingForward: string;
  riderLevel: string;
  height: string;
  age: string;
  colour: string;
  disciplines?: string[];
  image: string;
};

export const HORSES: Horse[] = [
  {
    id: "rip",
    name: "Rip",
    status: "Permanent Resident",
    sex: "Gelding",
    breed: "Thoroughbred",
    journeyBegan: "2021",
    tagline: "The horse who inspired it all.",
    description: "The horse who inspired Hawkez Haven and remains at the heart of the rescue.",
    storyTitle: "Rip - The Horse That Started It All",
    fullStory: `Rip arrived at our home in August 2021 after a seven-hour journey from Upper Hutt back to Gisborne. He had been advertised simply as a "project horse," but it didn't take long to realize that Rip was so much more than that.

When he arrived, his condition told a story that words could never fully explain. He suffered from severe rain rot, brittle and neglected feet, teeth that desperately needed attention, worms, and was significantly underweight. His tailbone carried a painful infection, and overall, he was in poor condition. But perhaps the hardest wounds to see were the ones he carried inside.

Rip was troubled, insecure, and unsure of the world around him. Trust did not come easily to him.

So, we asked nothing of him.

There were no expectations. No demands. Just feed, warm rugs, gentle words, and the simple act of being present. Days were spent sitting with him, learning who he was, and allowing him to learn who we were.

It only took about a week for Rip to begin to realize that life was changing. For the first time in a long time, he was safe.

Rip soon became part of our daily life alongside our beloved horse, Turbo. The two shared our days, our routines, and our hearts. Then, exactly one year later, our world changed forever when we lost Turbo.

The grief that followed was immense.

Somewhere in the middle of that heartbreak, Rip and I found ourselves leaning on one another. We poured our grief into each other, and through that shared loss, an unbreakable bond was formed.

Rip was no longer the weak, frightened, and unwell horse that had stepped off the float in 2021. He had become strong, steady, and deeply understanding. In his own way, Rip knew grief. He understood loss, and somehow, he taught us that horses understand far more than we often give them credit for.

Rip taught me that a horse is never "just a horse."

He taught me about patience, trust, and resilience. He taught me to pay attention to the smallest changes in behavior and to recognize that horses carry emotions, memories, and experiences with them. He showed me that healing is not always physical and that sometimes the greatest gift we can give another living being is simply our time.

As difficult as losing Turbo was, Hawkez Haven would not exist without Rip.

He is the reason we do what we do.

He is the reason we look beyond the surface and ask, "What happened to you?" instead of "What's wrong with you?"

Rip is our foundation, our teacher, and the heart behind Hawkez Haven. Every horse that has walked through our gates since carries a piece of the lessons he gave us.

His story is not one of rescue.

It is a story of second chances.

And in many ways, Rip didn't just find a home at Hawkez Haven — he helped build it.`,
    lookingForward: "Rip will always call Hawkez Haven home. He continues to help us shape the way we care for and understand every horse who arrives after him.",
    riderLevel: "Intermediate+. Rip is not a beginner lesson horse. He is used within Hawkez Haven only and is suitable for intermediate riders under Hawkez Haven supervision.",
    height: "16.2hh",
    age: "10 years",
    colour: "Bay",
    image: "/images/rip.jpg",
  },
  {
    id: "haven",
    name: "Haven",
    status: "Permanent Resident",
    sex: "Mare",
    breed: "Thoroughbred",
    journeyBegan: "2026",
    tagline: "Sweet, trustworthy, and endlessly kind.",
    description: "A confidence-building horse who is sweet and trustworthy within Hawkez Haven.",
    storyTitle: "Haven - The Horse Who Found Her Place",
    fullStory: `Not all horses that arrive at Hawkez Haven have been neglected or mistreated.

Some simply find themselves in the wrong hands, misunderstood, or placed in homes that are not equipped to understand who they truly are.

Haven's story is one of those stories.

Like many Thoroughbreds, Haven came from a racing background. She carried with her the experiences of life on the track and the intelligence, sensitivity, and presence that Thoroughbreds are so well known for. Somewhere along the way, however, the relationship between Haven and her humans had become one built on uncertainty.

Haven had learned that if she was the strongest in the relationship, she would remain in control.

When Haven arrived at Hawkez Haven, she was confident in all the wrong ways. She would charge at us while seemingly protecting the herd, walk through our personal space, and attempt to dominate every interaction. It was as if she hoped to turn our confidence into fear before we had the chance to understand her.

But we saw something different.

Underneath the bold exterior was a horse looking for leadership.

Rather than meeting force with force, we chose another approach. We showed Haven that humans could be both gentle and firm. That boundaries could exist alongside kindness. That trust and respect are not things that are demanded, they are things that are earned.

For the first few weeks, Haven kept us at a distance. She gave us the cold shoulder and made it clear that she wasn't interested in forming a friendship.

So, we waited.

Day by day, interaction by interaction, Haven began to understand that one human working alongside her could become her greatest ally rather than her greatest challenge.

That was the moment everything changed.

Over the following months, Haven transformed into a completely different horse. The mare who once met us with defiance began greeting us with affection. The horse who once challenged every interaction began looking to us for guidance.

Before long, Haven was happily heading out for rides on the road and eventually helping to teach others through riding lessons here and there.

Today, Haven is one of our forever girls.

She reminds us that not every horse needs saving from physical hardship. Sometimes, they simply need someone willing to understand them, to believe in them, and to show them that partnership is possible.

Haven has taught us that leadership is not about dominance, it is about trust.

Her loyalty is something that cannot be measured, and her journey continues to shape Hawkez Haven every single day.

She arrived believing she needed to carry the weight of the world on her shoulders.

Today, she knows she doesn't have to.

She is home.

And she will always have a place at Hawkez Haven.`,
    lookingForward: "Haven remains a permanent resident of Hawkez Haven, helping riders build confidence and connection at home.",
    riderLevel: "Confident rider. Haven requires a calm, confident rider in unfamiliar environments and trail situations.",
    height: "16hh",
    age: "13 years",
    colour: "Dark Bay",
    image: "/images/haven.jpg",
  },
  {
    id: "pedro",
    name: "Pedro",
    status: "Permanent Resident",
    sex: "Gelding",
    breed: "Thoroughbred",
    journeyBegan: "2025",
    tagline: "Our gentle teacher.",
    description: "One of our teaching horses, used for groundwork, horsemanship and confidence building.",
    storyTitle: "Pedro - The Horse Who Chose Partnership",
    fullStory: `Not every horse that arrives at Hawkez Haven has suffered neglect.

Some arrive carrying something much harder to see — a lifetime of habits, opinions, and a belief that they have to rely only on themselves.

Pedro was one of those horses.

Like many Off-The-Track Thoroughbreds, Pedro came with a story written in his character. Quiet and observant, he wasn't a horse that immediately sought affection. In fact, Pedro made it very clear from the beginning that he had his preferences.

Pedro was a man's horse.

He showed little interest in listening to women and certainly didn't believe he owed anyone his respect. Beneath his calm exterior was a chestnut Thoroughbred with a look in his eye that said, "I'm the boss here."

If Pedro wanted to do something, he was going to do it.

And if you happened to be in the way, he was more than willing to use his size and strength to push the issue.

Like Haven, Pedro wasn't a horse that needed punishment or force. He needed understanding, consistency, and someone willing to work with him instead of against him.

So, that became our approach.

We showed Pedro that life didn't have to be a constant battle of wills. That working together as a team was far more rewarding than ending every interaction with frustration. Slowly, the arguments became conversations, and the conversations became trust.

Over time, Pedro began to change.

The pig-headed Thoroughbred who threw tantrums and carried a larger-than-life ego slowly became one of the most placid chestnut Thoroughbreds you could ever hope to meet.

Today, Pedro is gentle, kind, and possesses a heart as big as his personality once was. He has always looked after his riders and has a way of making people feel safe around him. The horse that once insisted on leading every interaction now happily walks beside those he trusts.

Pedro has become a huge part of Hawkez Haven.

And Hawkez Haven has become a huge part of Pedro.

While Pedro will never be offered for adoption, his story isn't ending here. One of the greatest things a rescue horse can do is continue helping others, and Pedro has spent his time at Hawkez Haven doing exactly that.

He has helped people rebuild confidence, find companionship, and discover the quiet magic that horses can bring into our lives.

Now, Pedro is preparing for his next chapter.

He will be heading off on a long-term lease to help another human along in their own journey. This isn't goodbye, nor is it the end of his story. Pedro will always have a home at Hawkez Haven, and our gates will always remain open for him.

We aren't letting Pedro go.

We're simply cheering him on as he continues doing what he has always done best — changing lives.

Some horses come to Hawkez Haven to be saved.

Others come here to become teachers.

Pedro became both.

And wherever his hooves may take him next, he will always carry a piece of Hawkez Haven with him.

Just as Hawkez Haven will always carry a piece of Pedro.`,
    lookingForward: "Pedro will remain part of the Hawkez Haven Teaching Team, quietly guiding the humans and horses who need him.",
    riderLevel: "Beginner to Intermediate.",
    height: "16.1hh",
    age: "10 years",
    colour: "Chestnut",
    image: "/images/pedro.jpg",
  },
  {
    id: "diablo",
    name: "Diablo",
    status: "Permanent Resident",
    sex: "Colt",
    breed: "Thoroughbred",
    journeyBegan: "2025",
    tagline: "Our tiny little rebel.",
    description: "Our young horse in education, learning trust, groundwork and life skills at his own pace.",
    storyTitle: "Diablo - The Little Rebel",
    fullStory: `Diablo arrived at Hawkez Haven as a tiny two-year-old colt.

He wasn't quite filled out. He hadn't reached his full height. He wasn't trained, and he certainly wasn't polished. In many ways, Diablo arrived as a blank canvas — unnamed, unraced, unregistered, and still trying to find where he belonged in the world.

Diablo wasn't neglected.

He was simply unwanted.

For many, his height determined his worth. He wasn't going to become the big, athletic Thoroughbred people had hoped for, and so his future became uncertain before it had really begun.

But Hawkez Haven has never believed that worth can be measured in hands high.

From the moment Diablo arrived, he made it abundantly clear that he intended to stay.

Now three years old, Diablo has grown a little taller, though he still hasn't matured into the horse many expected him to become. Truthfully, we don't think he ever will — and that's perfectly okay.

Because Diablo has already found exactly where he belongs.

He is Hawkez Haven's tiny little rebel.

He has the cheek, the attitude, and an endless desire to play. He keeps us on our toes and has somehow mastered the art of being both adorable and incredibly frustrating at the same time.

Of course, every rebel has their quirks.

Diablo developed a habit of windsucking, and despite our best efforts to discourage it, he has always managed to find a way around every obstacle we've put in his path. While it may drive us up the wall some days, it has never once changed how we feel about him.

He isn't going anywhere.

Then, in January 2026, everything changed.

Diablo developed a severe case of colic.

Thankfully, we got to him just in time, but those hours were some of the longest we have ever experienced. There were tears, uncertainty, and moments where we genuinely didn't know if he would survive. Even after the veterinarians had done everything they could, we were left waiting and hoping.

And then something shifted.

There was something in Diablo's eyes that day — as if he knew what we knew.

As if he understood that his time might be running out.

For a moment, it felt like his story was ending before it had really begun.

But Diablo had other plans.

He survived.

He chose to fight.

And from that day forward, he made sure every single person at Hawkez Haven knew that his story was far from over.

Today, Diablo is bigger than ever in the hearts of everyone around him. He has secured his place within the Hawkez Haven family, not because of his height, his breeding, or his potential — but simply because he is Diablo.

He has already been backed under saddle with his handler riding him, and despite his nickname as our "little devil," he has never offered a buck. Beneath the cheeky personality is a horse full of gratitude and loyalty, especially toward the person he trusts most.

At the moment, Diablo spends his days grazing, growing, and enjoying life exactly as a young horse should.

His future doesn't need to be decided today.

He doesn't need to become something extraordinary.

He already is.

Diablo reminds us that every horse deserves a place in this world, regardless of their size, their papers, or the expectations others place upon them.

His story is still being written.

And if there's one thing Diablo has taught us, it's this:

Never underestimate the smallest horse in the paddock.

Because sometimes, they leave the biggest hoofprints on your heart.`,
    lookingForward: "Diablo will remain part of Hawkez Haven as he grows up alongside our herd.",
    riderLevel: "Not applicable. Diablo is a young horse in education and is not currently ridden.",
    height: "14.1hh",
    age: "3 years",
    colour: "Redwood Bay",
    image: "/images/diablo.jpg",
  },
  {
    id: "khan",
    name: "Khan",
    status: "Permanent Resident",
    sex: "Gelding",
    breed: "Thoroughbred",
    journeyBegan: "2025",
    tagline: "The horse who taught us scars tell a story of survival.",
    description: "A strong-willed gelding used within our riding and education programme.",
    storyTitle: "Khan - The Bling Buster",
    fullStory: `Khan is the kind of horse that turns heads.

With his striking looks and gentle presence, people are immediately drawn to him. But it isn't long before their eyes wander to the scars he carries, and that's when we learned an unfortunate truth:

Khan isn't meant for everyone.

People often say, "Scars don't matter."

But over the years, we've learned that words are just words. And when it comes to the futures of our horses, words are not something we can afford to rely on.

Khan came to Hawkez Haven carrying more than physical wounds.

He arrived with a major open wound on the bulb of his front hoof that required immediate care and attention. We were initially told the injury was only a week old. However, after having it professionally assessed, we learned the truth — Khan had likely been living with that wound for close to a year.

And that was only the beginning.

Khan carried significant scarring on his lower front legs and his hind legs. He had lost condition, was underweight, and suffered from rain rot after wearing a rug that had long since stopped being waterproof. It's no surprise that, to this day, Khan isn't particularly fond of wearing rugs during the colder months.

And honestly?

We don't blame him.

Months passed as Khan slowly healed, both physically and emotionally. His wounds began to close, his condition improved, and little by little, the horse underneath began to shine through.

Like many of our horses, we hoped Khan would eventually find a home suited to who he was.

He isn't an arena superstar, and while he can jump, it isn't where his heart lies. Khan is happiest being a farm hack, enjoying quiet adventures and simply spending time with his people.

For a while, it seemed like we'd found exactly that.

Then came the conversation about his scars.

Somewhere along the way, Khan's value became attached to his appearance. He was referred to as "just a rescue," and suddenly his worth was being measured by the marks left behind on his body.

That was the moment we knew.

Khan deserved better.

Because Khan has never been "just" anything.

He is the paddock Labrador. He follows you wherever you go, waits patiently at the gate long after you've left, and somehow manages to still be standing there watching as you drive away.

Khan is the horse you can trust with your heart and your safety. He is the horse that understands emotions before you've spoken a single word.

And perhaps most importantly, Khan is the horse who taught us that scars do not diminish worth — they tell a story of survival.

Today, Khan remains exactly where he belongs.

He is a forever horse.

He found his person here at Hawkez Haven, and if you spend enough time watching him, you'll realize something else:

He knows it.

Khan no longer needs to prove himself to anyone.

His scars are not something to hide.

They are a reminder of where he has been, how far he has come, and why he will always have a place here.

At Hawkez Haven, we don't see the scars.

We see Khan.

And that has always been more than enough.`,
    lookingForward: "Khan will continue as part of the Hawkez Haven Teaching Team, working with riders who match his honest, thoughtful nature.",
    riderLevel: "Confident rider. Khan does not require an advanced rider but appreciates confidence and consistency.",
    height: "16.2hh",
    age: "10 years",
    colour: "Bay",
    image: "/images/khan.jpg",
  },
  {
    id: "kahu",
    name: "Kahu",
    status: "Future Rehoming Candidate",
    sex: "Gelding",
    breed: "Thoroughbred",
    journeyBegan: "2025",
    tagline: "The horse who chose to live again.",
    description: "A former eventing prospect, kind and dependable, working towards being ready for his future home.",
    storyTitle: "Kahu - The Horse Who Chose to Live Again",
    disciplines: ["Jumping", "Dressage", "Cross Country", "Pleasure Riding"],
    fullStory: `Kahu came to Hawkez Haven alongside Khan, but while the two horses arrived from the same place, their journeys could not have been more different.

Kahu arrived in poor condition.

He was undernourished and significantly underweight. His coat was dull, his skin was rough, and his body told the story of a horse that had simply been surviving for far too long.

But it wasn't his physical condition that concerned us the most.

It was his eyes.

There was no spark behind them.

Kahu wasn't angry. He wasn't frightened. He wasn't even particularly interested in the world around him.

He had simply given up.

He barely grazed. He showed little interest in his feed and would often allow the other horses to walk over and help themselves while he quietly wandered away to stand alone at the far end of the paddock.

Food didn't seem to matter.

Companionship didn't seem to matter.

Life itself didn't seem to matter.

And that was perhaps the hardest thing of all to witness.

If anything, Kahu preferred to be by himself.

Days turned into weeks, and weeks turned into months. During that time, Hawkez Haven's youngest member spent countless hours grooming him, carefully brushing over his skeletal frame with the gentleness only a child can offer.

Slowly, something began to change.

With every brush stroke, Kahu seemed to soften just a little more.

Because Kahu struggled to eat larger meals, we began feeding him small amounts multiple times a day, every single day, for months. There were no dramatic overnight changes, only the quiet and patient commitment of showing up for him day after day.

Then one day, something happened that none of us will ever forget.

Most of the Hawkez Haven horses had gone out on a road ride. When we returned home, Kahu was standing in the back paddock.

As we approached, he let out a whinny.

Then he began to trot.

The trot became a canter.

And before we knew it, Kahu was tearing around the paddock with joyful zoomies, calling out happily as if to say, "You're home!"

For the first time, we saw it.

The sparkle.

The life.

The horse we had been waiting to meet.

In that moment, Kahu showed us something extraordinary — that even a horse who has given up can learn to want again.

He reminded us that healing doesn't always happen loudly. Sometimes it happens quietly, over months of feed buckets, gentle grooming sessions, and simply being present.

Today, Kahu is one of Hawkez Haven's greatest success stories.

He is no longer the horse standing alone at the far end of the paddock.

He is a horse with life in his eyes, gratitude in his heart, and a future waiting for him.

Unlike some of our forever residents, Kahu's story is still moving forward.

He is ready to find his forever home.

A home that will continue to give back to him in the way he has always deserved — and so much more.

Because Kahu has already done the hard part.

He chose to live again.

And for a horse that once gave up on everything, that is perhaps the greatest second chance of all.`,
    lookingForward: "Kahu is a future rehoming candidate. When he is ready, we will look for an intermediate home that suits his kind, dependable nature.",
    riderLevel: "Intermediate.",
    height: "16.1hh",
    age: "10 years",
    colour: "Plain Bay",
    image: "/images/kahu-tacked.jpg",
  },
  {
    id: "ritz",
    name: "Ritz",
    status: "Future Rehoming Candidate",
    sex: "Gelding",
    breed: "Thoroughbred",
    journeyBegan: "2026",
    tagline: "Not dangerous. Just misunderstood.",
    description: "A 17hh gentle giant continuing his rehabilitation and education with us.",
    storyTitle: "Ritz - The Gentle Giant",
    fullStory: `Ritz is impossible to miss.

Standing at an impressive 17 hands high, this beautiful nine-year-old Off-The-Track Thoroughbred has a presence that naturally commands attention. Schooled, trained, and intelligent, Ritz is every bit the horse people dream of owning.

But there was one problem.

Ritz needed a rider who understood him.

Instead, he found himself in the hands of someone who was still learning the horse world. They loved him dearly and spoiled him endlessly, but love alone is not always enough. Horses, much like people, need to be understood.

Before arriving at Hawkez Haven, we were informed that Ritz had allegedly been drugged prior to his sale to present him as a quiet, docile horse in order to secure a quick transaction. If true, this decision changed the course of both Ritz's life and that of his new owners.

Because Ritz wasn't quiet.

He wasn't docile.

And he certainly wasn't a beginner's horse.

As his new owner struggled to find confidence, Ritz quietly stepped into the role of leader. He used his size, his intelligence, and his experience to outsmart his rider, leaving both horse and human in a difficult position.

Before long, the word 'dangerous' began to surround him.

But Ritz was never dangerous.

He was misunderstood.

Ritz arrived at Hawkez Haven in early 2026, and within two weeks, we had reached an understanding. We showed him what boundaries looked like, and in return, he showed us who he really was.

Almost immediately, the walls began to come down.

The horse who had spent so long taking charge discovered that he didn't have to carry that responsibility anymore. As trust grew, Ritz became softer, more affectionate, and more willing to work alongside us rather than against us.

And that is where the magic happens.

At Hawkez Haven, we believe in connection before correction.

Because horses like Ritz don't need harsher hands, they need understanding.

While Ritz can become frustrated with repetitive schooling and endless circles in an arena, put him out on the road for a quiet one-on-one ride, and you'll discover exactly who he is.

He loves the journey.

The scenery.

The partnership.

The simple joy of sharing an experience with his person.

Ritz has shown us that he is not just a big horse with power and presence. He is a gentle soul who knows exactly when someone needs comfort and who carries his heart far more openly than people expect.

He has become another important part of Hawkez Haven and another reminder that every horse has something to teach us.

Ritz taught us that fear does not discriminate.

Even the biggest horses can be afraid.

Even the strongest horses can be fragile.

And sometimes, the horses that appear the most intimidating are simply waiting for someone to say, 'I've got this — you don't have to do it alone anymore.'

With honesty, loyalty, kindness, and the commitment to keep showing up, Ritz became exactly who he was always meant to be.

Not a dangerous horse.

Not a problem horse.

Just a very big horse with an even bigger heart.

And we wouldn't have him any other way.`,
    lookingForward: "Ritz is a future rehoming candidate. His future home will be determined when he is ready.",
    riderLevel: "Intermediate.",
    height: "17hh",
    age: "9 years",
    colour: "Plain Bay",
    image: "/images/ritz.jpg",
  },
 {
    id: "joey",
    name: "Joey",
    status: "Future Rehoming Candidate",
    sex: "Gelding",
    breed: "Thoroughbred",
    journeyBegan: "2026",
    tagline: "Legends don't retire quietly.",
    description: "Our 19yo veteran Thoroughbred gelding and former Horse of the Year showjumper (formerly Rampant), thriving after rehabilitation and ready for a quiet, purposeful care lease home.",
    storyTitle: "Joey - The Horse Who Refused to Retire",
    disciplines: [
      "Pleasure Riding",
      "Groundwork & Liberty",
      "Companionship",
      "Light Hacking"
    ],
    riderLevel: "Confident Beginner to Experienced Home (Companionship & Light Duties)",
    height: "16.1hh - 16.2hh",
    age: "19 years",
    colour: "Dapple Liver Bay",
    image: "/images/joey-story.jpg",
    lookingForward: "Joey is available on a long-term Personalized Care Lease. We are seeking a compassionate, knowledgeable home that appreciates his rich history, manages his front hoof care and seasonal grass thoughtfully, and provides him with a relaxed, loving routine.",
    fullStory: `Joey arrived at Hawkez Haven in early 2026 carrying a name that many in the New Zealand equestrian community would recognise.

Previously known as Rampant, Joey lived a life that many horses could only dream of. From his early days on the racetrack to competing in showjumping at Horse of the Year, he made his connections immensely proud. But decades of giving his absolute all had taken a toll on his body.

When Joey stepped off the float, he carried himself with the unmistakable dignity of a former champion—coat gleaming, kind eye, and a gentle presence. Beneath that presence, however, years of wear and tear had left his front feet sore and exhausted. At times, even walking across a paddock was uncomfortable.

Rather than accepting that his story was finished, we went to work. Alongside our farrier, Joey began receiving targeted minerals, supportive natural feed additions, and dedicated hoof protection.

Month by month, Joey began to soften and heal. By May 2026, the transformation was unmistakable: the horse who had struggled to take a few steps was trotting and cantering across his paddock with playful enthusiasm.

Joey proved that retirement wasn’t on his agenda just yet. He loves having a purpose, enjoys light interactions, and thrives when he is treated as a valued partner.

Care, Hoof Management & Well-being:

• Hoof Care: Requires regular, attentive farrier visits and ongoing mineral support. He benefits from supportive boots or pads when navigating hard or stony ground.

• Pasture Management: Sensitive to lush or high-sugar spring grass. Thoughtful paddock rotation and grazing management are essential.

• Workload: Suitable for light pleasure riding, groundwork, and quiet hacks. Joey is not available for jumping, competition, or intense schooling.

• Handling: Joey thrives under calm, consistent, and patient hands. He is a gentle soul who gives his heart completely once trust is established.

Long-Term Care Lease Opportunity:

• Lifelong Safety Net: Hawkez Haven retains ownership, ensuring Joey will always have a safe haven should your circumstances ever change.

• Ongoing Support: We remain available for guidance regarding his hoof care, nutrition, and management.

• Ideal Home: A quiet, knowledgeable property where he will be loved as part of the family, receive daily interaction, and enjoy a fulfilling routine.`
  },
  {
    id: "electra",
    name: "Electra",
    status: "Future Rehoming Candidate",
    sex: "Mare",
    breed: "Thoroughbred",
    journeyBegan: "2025",
    tagline: "Fiery, intelligent, and learning to trust.",
    description: "A young mare used within education for understanding horse body language and trust.",
    storyTitle: "Electra - The Mare Who Chose to Trust",
    fullStory: `Electra arrived at Hawkez Haven alongside Diablo.

She was still just a baby herself — a young mare with a body that had yet to fill out and a mind that had yet to learn that the world could be a safe place.

She came to us underweight, covered in rain rot, and carrying a level of anxiety that seemed to follow her everywhere she went. Human affection meant nothing to her. If anything, she preferred to keep her distance and watch the world from afar.

Trust was not something Electra handed out freely.

Like many young horses, she was still trying to figure out who she was. But unlike most, she was also trying to figure out whether humans belonged in her life at all.

So, we started at the beginning.

We addressed her rain rot, improved her condition, and spent time with her one-on-one, asking for nothing except the opportunity to simply be present. Slowly, Electra began to understand the language of Hawkez Haven.

Feed buckets meant dinner.

Daily routines meant safety.

Gentle hands meant comfort.

And every ointment applied to her skin made her feel a little better than she had the day before.

Before long, Electra's confidence began to grow.

But anxiety has a way of lingering.

Whenever routines changed or something felt different, the worry would return. She would pace back and forth, toss her head, sway her body from side to side, and sometimes shake as though her mind was racing faster than her feet ever could.

Then came the day that changed everything.

Before Electra had fully learned to trust us, she decided that leading the herd away from the humans was a brilliant idea. Full of confidence and determination, she charged forward, convinced she knew best.

Unfortunately, she forgot one very important thing.

To slow down.

In her haste, Electra ran into a fence, badly injuring her hind leg.

What followed were months of rehabilitation.

Bandages.

Hose downs.

Antiseptic sprays.

Dressings changed in the heat of summer.

And countless hours spent standing beside a mare who still wasn't entirely convinced that humans could be trusted.

Because of her injury, Electra was placed in a paddock with only one companion, and stricter boundaries were put in place for her own protection.

And then, little by little, something extraordinary happened.

Electra realized we weren't going anywhere.

We weren't there to work her hard and forget about her until the next day.

We weren't there to ask for more than she could give.

We were simply there.

Every single day.

Electra has been one of the hardest horses at Hawkez Haven to bond with. Even after watching us interact with the rest of the herd she now calls family, she still needed time.

And that's okay.

Every horse is different.

If they all melted into our hands after the first session, this work wouldn't mean nearly as much.

Electra is fiery.

She is full of beans.

She keeps us on our toes.

But every now and then, her eyes soften. The tension leaves her lips, and when she hears her handler quietly say, "Shhh... relax. Everything is going to be alright," she lets herself believe it.

Those are the moments that remind us just how far she has come.

Today, Electra no longer resembles the scrawny, long-legged, scruffy young mare that first arrived at Hawkez Haven. She has put on weight beautifully. Her nearly black coat shines in the sunlight, and she carries herself with purpose, always with a bounce in her step.

She moves beautifully.

And the scar on her hind leg remains exactly what it should be — a reminder.

A reminder of a young mare who wanted freedom more than friendship.

A reminder of the day she discovered that sometimes, allowing others to help you is the bravest thing you can do.

Electra's future is still unwritten. When she is physically and mentally ready, she may be restarted under saddle. If that path isn't right for her, we will happily find her a home where she can simply be loved, whether as a paddock companion or, in the right circumstances, a broodmare for thoughtful and responsible breeding.

After spending enough time with Electra, one thing becomes very clear:

This mare has personality.

She has intelligence.

She has humor.

And she has a heart big enough for one very special person.

Electra's story reminds us that trust cannot be rushed.

It is earned.

And after months of patience, kindness, and simply showing up, Electra finally decided that perhaps humans aren't so bad after all.

For a horse who once wanted nothing more than to run away, that might just be the greatest journey of all.`,
    lookingForward: "Electra is a future rehoming candidate. Her future home will require horse experience.",
    riderLevel: "Intermediate. Electra's future home will require horse experience.",
    height: "16.1hh",
    age: "6 years",
    colour: "Dark Bay",
    image: "/images/electra.jpg",
  },
  {
    id: "kohan",
    name: "Kohan",
    status: "Future Rehoming Candidate",
    sex: "Gelding",
    breed: "Thoroughbred",
    journeyBegan: "2025",
    tagline: "Not today.",
    description: "Curious, intelligent and independent. A horse who refused to give up.",
    storyTitle: "Kohan - The Horse Who Refused to Give Up",
    disciplines: ["Pleasure Riding"],
    fullStory: `Kohan arrived at Hawkez Haven straight off the racetrack.

At just seven years old, he was originally meant to become my daughter's horse — a young Thoroughbred who needed a little schooling, a few manners installed, and someone to teach him that life didn't always have to happen at one hundred miles an hour.

Because Kohan only knew one speed.

Fast.

Life on the track had taught him to always be on the go. He didn't understand what "slow down" meant. In his mind, every moment needed to be filled with movement, excitement, and enough energy to power an entire paddock.

To put it simply, Kohan had a highly active mind.

And we say that with nothing but love.

The potential was there from the very beginning. After my daughter climbed aboard for the first time, we could all see it. Kohan just needed to quiet the noise in his own head and learn that life could be enjoyed rather than raced through.

Not long after arriving, however, Kohan became severely lame in his front foot.

We quickly discovered a significant case of thrush — something thrush is incredibly good at doing. It festers silently beneath the surface, often going unnoticed until the damage has already been done.

His shoes came off immediately, and we got to work. He spent his days grazing outside our front door while receiving minerals, natural remedies, and all the care we could provide. Remarkably, within a week, Kohan was walking comfortably again.

And just like that, his personality began to shine.

He became a little quieter.

A little less reactive.

And despite his overactive mind, he trusted us from the very beginning.

Fixing his feet? No problem.

Standing quietly for treatment? Easy.

Making sure nobody at Hawkez Haven had a moment's peace once he felt better?

That became his specialty.

As soon as Kohan returned to full health, he and his best mate Rip could often be found tearing around the paddocks together, causing chaos and encouraging everyone else to join in.

Because apparently peace and quiet are highly overrated.

It soon became obvious that Kohan needed a home that could offer him more than we could. He needed someone to ride him regularly, take him out on adventures, tackle cross-country courses, and enjoy everything life has to offer alongside a horse with a heart as big as his personality.

Then, everything changed.

One of the grazing paddocks we leased turned out to be anything but a place of rest. Hidden beneath the ground was a fence that had slowly worked its way to the surface.

Kohan found it.

And it changed his life.

After breaking through a taped fence, Kohan suffered a cut to his hind leg that developed into cellulitis and a severe infection. The swelling became extreme, and despite our efforts, his leg grew to the size of a tree trunk.

The prognosis wasn't good.

Veterinarians warned us that recovery would be long, expensive, and uncertain. We were told that many horses never truly recover from injuries like this and that, even if he survived, he may never live a normal life again.

The advice was always the same.

"It might be kinder to let him go."

We understood where people were coming from.

And as the weeks passed, Kohan became increasingly unwell. He lost weight at an alarming rate, stopped eating properly, and seemed to lose the spark that had once defined him.

For the first time since arriving at Hawkez Haven, Kohan looked tired.

He looked done and ready.

And with broken hearts, we made the hardest decision we've ever had to make.

We arranged for his final goodbye.

Pain relief and anti-inflammatories kept him comfortable while we prepared ourselves to let him go. Then, on the morning it was supposed to happen, everything changed.

A message arrived.

Along with a photograph.

And a video.

Kohan was standing in the paddock eating his breakfast.

The swelling had dramatically reduced, and he was walking as though he hadn't been fighting for his life only days before.

To this day, we cannot explain it.

We canceled everything.

Because Kohan wasn't finished.

Back at Hawkez Haven, we continued working tirelessly with him morning and night. Slowly, the swelling disappeared. The infection healed. The weight returned.

And eventually, Kohan became Kohan again.

Today, he gallops around the paddock with his usual enthusiasm and carries himself with the same spunky attitude he has always had. The horse we thought we were saying goodbye to now stands before us healthier than ever.

Will Kohan become an Olympian?

Probably not.

But somewhere out there is a person whose life is going to change because of him.

Kohan is a warrior.

He is a fighter.

And he has never once given up, no matter what the odds have been.

He has a huge personality, an even bigger heart, and one day, one very lucky human will continue writing the rest of his story alongside him.

Because Kohan is proof that sometimes, when the world says it's time to let go, a horse quietly says:

"Not today."

And if we've learned anything from Kohan, it's this:

Never underestimate a Thoroughbred with a high-intensity mind, enormous determination, and a reason to keep living.`,
    lookingForward: "Kohan is a future rehoming candidate. His future home must understand horses and appreciate his thoughtful nature.",
    riderLevel: "Intermediate to Experienced. Kohan's future home must understand horses and appreciate his thoughtful nature.",
    height: "16.2hh",
    age: "7 years",
    colour: "Golden Bay",
    image: "/images/kohan.jpg",
  },
];

export const PERMANENT_RESIDENTS = HORSES.filter(h => h.status === "Permanent Resident");
export const REHOMING_CANDIDATES = HORSES.filter(h => h.status === "Future Rehoming Candidate");
