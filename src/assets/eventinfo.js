/*import {
  backyard,
  code,
  connection,
  echo,
  flip,
  game,
  loop,
  paper,
  poster,
  quizzie,
  reel,
  tech,
  ui,
} from "."; */

const eventinfo = [
  {
    title: "Quizzie-Buzzie",
    type: "Technical",
    // icon: quizzie,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Engage in a battle of wits and tech knowledge as you tackle mind-bending questions in our lightning-fast quiz.",
      "Participants must answer multiple-choice questions within a set time limit.",
      "No use of external resources or devices is allowed during the quiz.",
    ],
  },
  {
    title: "Tech-It-Out",
    type: "Technical",
    // icon: tech,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Step onto the innovation stage and present your tech marvels, be it groundbreaking ideas, cutting-edge research, or visionary startup pitches.",
      "Presentations must adhere to a strict time limit allocated for each participant or team.",
      "Visual aids such as slideshows or prototypes are encouraged to enhance the presentation.",
    ],
  },
  {
    title: "ParaCoding",
    type: "Technical",
    // icon: code,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Embark on a coding expedition where you'll crack algorithms, debug solutions, and code your way through complex challenges.",
      "Teams (max 2 members) will be given a coding problem and a specified timeframe to solve it.",
      "Code submissions must follow the specified programming language and meet the problem's requirements.",
    ],
  },
  {
    title: "Flip-Flop",
    type: "Technical",
    // icon: flip,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Decode the mysteries of code in Flip-flop, where participants unravel intricate algorithms and logic.",
      "Participants must analyze and present their understanding of the given code.",
      "Detailed explanations of code segments and algorithms used must be provided during the presentation.",
    ],
  },
  {
    title: "UX/UI",
    type: "Technical",
    // icon: ui,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Immerse yourself in a design frenzy as you sprint to create captivating user interfaces for web and mobile platforms.",
      "Participants must create wireframes or prototypes for web or app designs within the given time frame.",
      "Designs should focus on usability, accessibility, and aesthetics.",
    ],
  },
  {
    title: "Dancing on the Paper",
    type: "Non-Technical",
    // icon: paper,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Dance to the rhythm of shrinking spaces in this dynamic competition.",
      "Participants must remain within the designated dance area and adapt to shrinking space as rounds progress.",
      "Judges will evaluate contestants based on creativity, synchronization, and overall performance.",
    ],
  },
  {
    title: "Reel-O-mania",
    type: "Non-Technical",
    // icon: reel,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Ignite your editing genius in Reel-O-mania, where raw video clips transform into cinematic masterpieces.",
      "Edited video reels must be submitted within the specified time limit.",
      "Participants must use the provided video clips exclusively and avoid incorporating external content.",
    ],
  },
  {
    title: "Poster Design",
    type: "Non-Technical",
    // icon: poster,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Unleash your artistic flair in a whirlwind poster design challenge.",
      "Handmade posters must be created on-site based on the theme announced.",
      "Participants must bring their own art supplies, and digital editing tools are not permitted.",
    ],
  },
  {
    title: "Loop Action",
    type: "Non-Technical",
    // icon: loop,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Collaborate, strategize, and execute flawlessly in Loop Action, where teams navigate a series of synchronized tasks.",
      "Teams will receive a sequence of tasks that must be completed in the given order.",
      "Actions should be performed accurately and swiftly, with penalties for incorrect or out-of-sequence tasks.",
    ],
  },
  {
    title: "Beat Break",
    type: "Non-Technical",
    // icon: echo,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "The song should be continued when the lyrics fade off.",
      "Each participant can participate individually or in teams of two.",
      "Participants who recognize the most lyrics will be the winner.",
      "Participants can skip a maximum of three songs.",
    ],
  },
  {
    title: "Backyard Cricket",
    type: "Non-Technical",
    // icon: backyard,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Experience the thrill of box cricket in a backyard setting with teams of five players each.",
      "Each team must consist of exactly five members, including fielders and batters.",
      "The game will follow standard box cricket rules, with each team getting a set number of overs to bat and bowl.",
    ],
  },
  {
    title: "Go Connection",
    type: "Non-Technical",
    // icon: connection,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Unleash your detective skills in Go Connection, where participants decipher answers by piecing together clues.",
      "Clues will be provided sequentially, and participants must use all given clues to arrive at the correct answer.",
      "Teams or individuals must submit their answers within the specified time limit.",
    ],
  },
  {
    title: "Free Fire",
    type: "Non-Technical",
    // icon: game,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Join us for an adrenaline-pumping Free Fire tournament where players showcase their skills in intense battles!",
      "Free Fire - Solo Mode Only.",
      "No laptops or systems can be used; only mobile phones are allowed.",
      "Room codes will be given on the spot.",
      "Decisions will be made fairly; no arguments are allowed against organizers.",
    ],
  },
];

export default eventinfo;
