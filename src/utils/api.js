export let sResults = [];
const files = [
 
  {
    id: 1,
    report: `A blue lake is deeply set in mountains capped with eternal snow. A
    dark network of gardens descends in gorgeous folds to the water. White
    houses that look like lumps of sugar peer down from the bank into the
    lake; and everything around is as quiet and peaceful as the sleep of a
    child.
    
    It is morning. A perfume of flowers is wafted gently from the
    mountains. The sun is new risen and the dew still glistens on the
    leaves of trees and the petals of flowers. A road like a grey ribbon
    thrusts into the quiet mountain gorge--a stone-paved road which yet
    looks as soft as velvet, so that one almost has a desire to stroke it.`,
    comment: 'changes for adding loader overlay',
    tags: [1],
    modified_time: '2020-06-30T11:44:41Z',
    
  },
  {
    id: 2,
    report: `The boy walks on. The road, like a broad ribbon, cleaves a way amid
    fields invaded by the gathering twilight; straight it goes, piercing
    the side of the town like a rapier thrust by a powerful, unseen hand.
    The trees by the roadside resemble unlit torches; their large black
    heads are uplifted above the silent earth in motionless expectancy.
    
    The sky is covered with clouds and no stars are to be seen; there are
    no shadows; the late evening is sad and still, and save for the slow,
    light steps of the boy no sound breaks the silence of the tired fields
    as they fall asleep in the dusk.`,
    tags: [2],
    modified_time: '2020-07-01T08:33:40Z'
  },
  {
    id: 3,
    report: `The boy walks on. And, noiselessly, the night follows him and envelops
    in its black mantle the distances from which he has emerged.
    
    As the dusk grows deeper it hides in its embrace the red and white
    houses which sink submissively into the earth. It hides the gardens
    with their trees, and leaves them lonely, like orphans, on the
    hillsides. It hides the chimney-stacks.
    
    Everything around becomes black, vanishes, blotted out by the darkness
    of the night; it is as if the little figure advancing slowly, stick in
    hand, along the road inspired some strange kind of fear.`,
    tags: [],
    modified_time: '2020-07-01T12:43:57Z'
  },
  {
    id: 4,
    report: `The sun sinks completely. The crosses, the vanes and the spires melt
    and vanish, the town seems to subside, grow smaller, and to press ever
    more closely against the dumb earth.
    
    Above the town, an opal cloud, weirdly coloured, flares and gradually
    grows larger; a phosphorescent, yellowish mist settles unevenly on
    the grey network of closely huddled houses. The town itself no longer
    seems to be consumed by fire and reeking in blood--the broken lines
    of the roofs and walls have the appearance now of something magical,
    fantastic, but yet of something incomplete, not properly finished, as
    if he who planned this great town for men had suddenly grown tired and
    fallen asleep, or had lost faith, and, casting everything aside in his
    disappointment, had gone away, or died.`,
    tags: [],
    modified_time: '2020-07-01T08:26:15Z'
  },
  {
    id: 5,
    report: `There are two fishermen on the stones. One is an old man, in a straw
    hat. He has a heavy-looking face, covered on cheeks and chin and upper
    lip with grey bristles; his eyes are embedded in fat, his nose is red,
    and his hands are sunburnt. He has cast his pliant fishing-rod far out
    into the sea, and he sits upon a rock, his hairy legs hanging over the
    green water. A wave washes up and bathes them, and from the dark toes
    clear, heavy drops of water fall back into the sea.
    
    Behind the old man, leaning with one elbow on a rock, stands a tawny
    black-eyed fellow, thin and lank. On his head is a red cap, and a
    white jersey covers his muscular torso; his blue trousers are rolled
    up to the knee. He tugs with his right hand at his moustache and looks
    thoughtfully out to sea; in the distance black streaks of fishing boats
    are moving, and far beyond them, scarcely visible, is a white sail; the
    white sail is motionless, and seems to melt like a cloud in the sun.`,
    tags: [1],
    modified_time: '2020-06-29T09:23:42Z'
  },
  {
    id: 6,
    report: `He was given a seat at once. He then straightened his blue linen suit,
    heaved a sigh of relief and, putting his hands on his little, withered
    knees, smiled good-humouredly, disclosing a toothless mouth.`,
    tags: [1],
    modified_time: '2020-07-01T08:26:15Z'
  },
  {
    id: 7,
    report: `Forgive me, I have done you wrong. It was all a mistake--and I have
    worn you out. Now when I am struck down I see that my faith was only
    fear before what I could not understand, notwithstanding my desire and
    my efforts. It was fear, but it was in my blood, I was born with it. I
    have my own mind--or yours--but somebody else's heart; you are right, I
    understand it now, but my heart could not agree with you.`,
    tags: [2],
    modified_time: '2020-07-01T08:26:15Z'
  },
  {
    id: 8,
    report: `They opened the gate for her. and let her out of the town. For a long
    time they watched her from the wall as she made her way over this
    native soil, sodden now with blood shed by her son. She walked slowly,
    dragging her feet painfully through the mire, bowing her head before
    the corpses of the defenders of the town and repugnantly spurning the
    pieces of broken weapons that lay in her path--for mothers hate the
    instruments of destruction, believing only in that which preserves
    life.`,
    tags: [2],
    modified_time: '2020-07-01T08:26:15Z'
  },
  {
    id: 9,
    report: `I was born into the world and for the world. in order to strike it
    with astonishment! I spared this town for your sake--it is like a
    splinter in my foot and hinders me from advancing to fame as quickly as
    I could wish. But either to-day or tomorrow I will destroy the nest of
    these stubborn ones!`,
    tags: [],
    modified_time: '2020-07-01T08:26:15Z'
  },
  {
    id: 10,
    report: `A mother creates, she preserves. And to talk about destruction in her
    presence is to speak against her understanding of life. But not knowing
    this the son was denying all that life meant for his mother.
    
    A mother is always against death, and the hand that introduces death
    into people's dwellings is hateful and hostile to all mothers. But the
    son did not see it, blinded by the cold gleam of glory which kills the
    heart.`,
    tags: [2],
    modified_time: '2020-06-29T16:14:27Z'
  },
  {
  id: 11,
  report: `A blue lake is deeply set in mountains capped with eternal snow. A
  dark network of gardens descends in gorgeous folds to the water. White
  houses that look like lumps of sugar peer down from the bank into the
  lake; and everything around is as quiet and peaceful as the sleep of a
  child.
  
  It is morning. A perfume of flowers is wafted gently from the
  mountains. The sun is new risen and the dew still glistens on the
  leaves of trees and the petals of flowers. A road like a grey ribbon
  thrusts into the quiet mountain gorge--a stone-paved road which yet
  looks as soft as velvet, so that one almost has a desire to stroke it.`,
  comment: 'changes for adding loader overlay',
  tags: [1],
  modified_time: '2020-06-30T11:44:41Z',
  
},
{
  id: 12,
  report: `The boy walks on. The road, like a broad ribbon, cleaves a way amid
  fields invaded by the gathering twilight; straight it goes, piercing
  the side of the town like a rapier thrust by a powerful, unseen hand.
  The trees by the roadside resemble unlit torches; their large black
  heads are uplifted above the silent earth in motionless expectancy.
  
  The sky is covered with clouds and no stars are to be seen; there are
  no shadows; the late evening is sad and still, and save for the slow,
  light steps of the boy no sound breaks the silence of the tired fields
  as they fall asleep in the dusk.`,
  tags: [2],
  modified_time: '2020-07-01T08:33:40Z'
},
{
  id: 13,
  report: `The boy walks on. And, noiselessly, the night follows him and envelops
  in its black mantle the distances from which he has emerged.
  
  As the dusk grows deeper it hides in its embrace the red and white
  houses which sink submissively into the earth. It hides the gardens
  with their trees, and leaves them lonely, like orphans, on the
  hillsides. It hides the chimney-stacks.
  
  Everything around becomes black, vanishes, blotted out by the darkness
  of the night; it is as if the little figure advancing slowly, stick in
  hand, along the road inspired some strange kind of fear.`,
  tags: [],
  modified_time: '2020-07-01T12:43:57Z'
},
{
  id: 14,
  report: `The sun sinks completely. The crosses, the vanes and the spires melt
  and vanish, the town seems to subside, grow smaller, and to press ever
  more closely against the dumb earth.
  
  Above the town, an opal cloud, weirdly coloured, flares and gradually
  grows larger; a phosphorescent, yellowish mist settles unevenly on
  the grey network of closely huddled houses. The town itself no longer
  seems to be consumed by fire and reeking in blood--the broken lines
  of the roofs and walls have the appearance now of something magical,
  fantastic, but yet of something incomplete, not properly finished, as
  if he who planned this great town for men had suddenly grown tired and
  fallen asleep, or had lost faith, and, casting everything aside in his
  disappointment, had gone away, or died.`,
  tags: [],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 15,
  report: `There are two fishermen on the stones. One is an old man, in a straw
  hat. He has a heavy-looking face, covered on cheeks and chin and upper
  lip with grey bristles; his eyes are embedded in fat, his nose is red,
  and his hands are sunburnt. He has cast his pliant fishing-rod far out
  into the sea, and he sits upon a rock, his hairy legs hanging over the
  green water. A wave washes up and bathes them, and from the dark toes
  clear, heavy drops of water fall back into the sea.
  
  Behind the old man, leaning with one elbow on a rock, stands a tawny
  black-eyed fellow, thin and lank. On his head is a red cap, and a
  white jersey covers his muscular torso; his blue trousers are rolled
  up to the knee. He tugs with his right hand at his moustache and looks
  thoughtfully out to sea; in the distance black streaks of fishing boats
  are moving, and far beyond them, scarcely visible, is a white sail; the
  white sail is motionless, and seems to melt like a cloud in the sun.`,
  tags: [1],
  modified_time: '2020-06-29T09:23:42Z'
},
{
  id: 16,
  report: `He was given a seat at once. He then straightened his blue linen suit,
  heaved a sigh of relief and, putting his hands on his little, withered
  knees, smiled good-humouredly, disclosing a toothless mouth.`,
  tags: [1],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 17,
  report: `Forgive me, I have done you wrong. It was all a mistake--and I have
  worn you out. Now when I am struck down I see that my faith was only
  fear before what I could not understand, notwithstanding my desire and
  my efforts. It was fear, but it was in my blood, I was born with it. I
  have my own mind--or yours--but somebody else's heart; you are right, I
  understand it now, but my heart could not agree with you.`,
  tags: [2],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 18,
  report: `They opened the gate for her. and let her out of the town. For a long
  time they watched her from the wall as she made her way over this
  native soil, sodden now with blood shed by her son. She walked slowly,
  dragging her feet painfully through the mire, bowing her head before
  the corpses of the defenders of the town and repugnantly spurning the
  pieces of broken weapons that lay in her path--for mothers hate the
  instruments of destruction, believing only in that which preserves
  life.`,
  tags: [2],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 19,
  report: `I was born into the world and for the world. in order to strike it
  with astonishment! I spared this town for your sake--it is like a
  splinter in my foot and hinders me from advancing to fame as quickly as
  I could wish. But either to-day or tomorrow I will destroy the nest of
  these stubborn ones!`,
  tags: [],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 20,
  report: `A mother creates, she preserves. And to talk about destruction in her
  presence is to speak against her understanding of life. But not knowing
  this the son was denying all that life meant for his mother.
  
  A mother is always against death, and the hand that introduces death
  into people's dwellings is hateful and hostile to all mothers. But the
  son did not see it, blinded by the cold gleam of glory which kills the
  heart.`,
  tags: [2],
  modified_time: '2020-06-29T16:14:27Z'
},
{ id: 21,
  report: `A blue lake is deeply set in mountains capped with eternal snow. A
  dark network of gardens descends in gorgeous folds to the water. White
  houses that look like lumps of sugar peer down from the bank into the
  lake; and everything around is as quiet and peaceful as the sleep of a
  child.
  
  It is morning. A perfume of flowers is wafted gently from the
  mountains. The sun is new risen and the dew still glistens on the
  leaves of trees and the petals of flowers. A road like a grey ribbon
  thrusts into the quiet mountain gorge--a stone-paved road which yet
  looks as soft as velvet, so that one almost has a desire to stroke it.`,
  comment: 'changes for adding loader overlay',
  tags: [1],
  modified_time: '2020-06-30T11:44:41Z',
  
},
{
  id: 22,
  report: `The boy walks on. The road, like a broad ribbon, cleaves a way amid
  fields invaded by the gathering twilight; straight it goes, piercing
  the side of the town like a rapier thrust by a powerful, unseen hand.
  The trees by the roadside resemble unlit torches; their large black
  heads are uplifted above the silent earth in motionless expectancy.
  
  The sky is covered with clouds and no stars are to be seen; there are
  no shadows; the late evening is sad and still, and save for the slow,
  light steps of the boy no sound breaks the silence of the tired fields
  as they fall asleep in the dusk.`,
  tags: [2],
  modified_time: '2020-07-01T08:33:40Z'
},
{
  id: 23,
  report: `The boy walks on. And, noiselessly, the night follows him and envelops
  in its black mantle the distances from which he has emerged.
  
  As the dusk grows deeper it hides in its embrace the red and white
  houses which sink submissively into the earth. It hides the gardens
  with their trees, and leaves them lonely, like orphans, on the
  hillsides. It hides the chimney-stacks.
  
  Everything around becomes black, vanishes, blotted out by the darkness
  of the night; it is as if the little figure advancing slowly, stick in
  hand, along the road inspired some strange kind of fear.`,
  tags: [],
  modified_time: '2020-07-01T12:43:57Z'
},
{
  id: 24,
  report: `The sun sinks completely. The crosses, the vanes and the spires melt
  and vanish, the town seems to subside, grow smaller, and to press ever
  more closely against the dumb earth.
  
  Above the town, an opal cloud, weirdly coloured, flares and gradually
  grows larger; a phosphorescent, yellowish mist settles unevenly on
  the grey network of closely huddled houses. The town itself no longer
  seems to be consumed by fire and reeking in blood--the broken lines
  of the roofs and walls have the appearance now of something magical,
  fantastic, but yet of something incomplete, not properly finished, as
  if he who planned this great town for men had suddenly grown tired and
  fallen asleep, or had lost faith, and, casting everything aside in his
  disappointment, had gone away, or died.`,
  tags: [],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 25,
  report: `There are two fishermen on the stones. One is an old man, in a straw
  hat. He has a heavy-looking face, covered on cheeks and chin and upper
  lip with grey bristles; his eyes are embedded in fat, his nose is red,
  and his hands are sunburnt. He has cast his pliant fishing-rod far out
  into the sea, and he sits upon a rock, his hairy legs hanging over the
  green water. A wave washes up and bathes them, and from the dark toes
  clear, heavy drops of water fall back into the sea.
  
  Behind the old man, leaning with one elbow on a rock, stands a tawny
  black-eyed fellow, thin and lank. On his head is a red cap, and a
  white jersey covers his muscular torso; his blue trousers are rolled
  up to the knee. He tugs with his right hand at his moustache and looks
  thoughtfully out to sea; in the distance black streaks of fishing boats
  are moving, and far beyond them, scarcely visible, is a white sail; the
  white sail is motionless, and seems to melt like a cloud in the sun.`,
  tags: [1],
  modified_time: '2020-06-29T09:23:42Z'
},
{
  id: 26,
  report: `He was given a seat at once. He then straightened his blue linen suit,
  heaved a sigh of relief and, putting his hands on his little, withered
  knees, smiled good-humouredly, disclosing a toothless mouth.`,
  tags: [1],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 27,
  report: `Forgive me, I have done you wrong. It was all a mistake--and I have
  worn you out. Now when I am struck down I see that my faith was only
  fear before what I could not understand, notwithstanding my desire and
  my efforts. It was fear, but it was in my blood, I was born with it. I
  have my own mind--or yours--but somebody else's heart; you are right, I
  understand it now, but my heart could not agree with you.`,
  tags: [2],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 28,
  report: `They opened the gate for her. and let her out of the town. For a long
  time they watched her from the wall as she made her way over this
  native soil, sodden now with blood shed by her son. She walked slowly,
  dragging her feet painfully through the mire, bowing her head before
  the corpses of the defenders of the town and repugnantly spurning the
  pieces of broken weapons that lay in her path--for mothers hate the
  instruments of destruction, believing only in that which preserves
  life.`,
  tags: [2],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 29,
  report: `I was born into the world and for the world. in order to strike it
  with astonishment! I spared this town for your sake--it is like a
  splinter in my foot and hinders me from advancing to fame as quickly as
  I could wish. But either to-day or tomorrow I will destroy the nest of
  these stubborn ones!`,
  tags: [],
  modified_time: '2020-07-01T08:26:15Z'
},
{
  id: 30,
  report: `A mother creates, she preserves. And to talk about destruction in her
  presence is to speak against her understanding of life. But not knowing
  this the son was denying all that life meant for his mother.
  
  A mother is always against death, and the hand that introduces death
  into people's dwellings is hateful and hostile to all mothers. But the
  son did not see it, blinded by the cold gleam of glory which kills the
  heart.`,
  tags: [2],
  modified_time: '2020-06-29T16:14:27Z'
},
  
  
];

export default files;
