import type { ArgsOf, Client } from "discordx";
import { Discord, On } from "discordx";

const replies: {
  type: "message" | "react";
  reply: string[];
  message: string[];
  chance?: number;
}[] = [
  {
    type: "message",
    message: ["ohio"],
    reply: ["stfu :skull:"],
  },
  {
    type: "message",
    chance: 0.75,
    message: ["t!", "t!help"],
    reply: [
      "Huh, do you want something?",
      "What?",
      "??????????????????????????????",
      "im not gonna help you.",
      "you have to figure me out on your own.",
      "SHUT UP BRO",
    ],
  },
  {
    type: "message",
    message: ["moderator"],
    reply: ["https://tenor.com/view/kek-kekw-gif-19460649"],
  },
  {
    type: "message",
    message: ["rooki"],
    reply: ["https://tenor.com/view/ascension-sponge-bob-gif-15077046"],
  },
  {
    type: "message",
    message: ["r3"],
    reply: ["https://tenor.com/view/homer-brain-monkey-gif-11098413"],
  },
  {
    type: "message",
    message: ["putin"],
    reply: [
      "Putin anexes your message!\nhttps://cdn.discordapp.com/attachments/1054061668080046182/1054071060494032896/putin-walk-swag-walk.gif",
    ],
  },
  {
    type: "message",
    message: ["taiwan"],
    reply: [
      "Taiwan is not real! -30.000.000 Social Points\nhttps://tenor.com/view/social-credit-social-credit-score-credit-score-score-china-gif-23125701",
    ],
  },
  {
    type: "message",
    message: ["sex"],
    chance: 0.5,
    reply: [
      `https://tenor.com/view/tf2heavy-pootis-sex-now-travis-touchdown-meme-gif-24958337`,
    ],
  },
  {
    type: "message",
    message: ["sex"],
    chance: 0.5,
    reply: [
      `How do I get my husband to stop going ‘Goblin Mode’ during sex?

    TLDR; My husband says ‘Goblin Mode activated’ when we start to have sex, growls and acts like a caveman, and then says ‘Goblin Mode off’ when we stop, and then pretends not to remember afterward.
    
    I really love my husband and he’s always been great in bed. But recently he’s been acting really weird. So, a couple of days ago, my son went on a rampage through our house and said he was in ‘Goblin Mode’. We didn’t really know what to do with him, so we sent him to live with my parents so he can go to a special needs school. My husband a really great relationship with our son and loved him more than anything. Naturally, he was upset when he had to leave. He’s an incredibly tough man, but this was the first time I’ve ever seen him cry. I think since then, he’s been a little emotionally unwell. I’ve heard him muttering, ‘Goblin’ repeatedly when he didn’t notice me, staring blankly into his food, and just going alone by himself to do who knows what. I feel awful for him, but we both agreed that this was for the best. Last night, the day after our son went away, we decided to have sex to relieve our stress. However, my husband said ‘Goblin Mode activated’, starting growling, and went wild having sex with me. Admittedly, it was some of the best and most experimental sex I’ve ever had, but I’m worried that something might be going on with my husband. Any advice?
    
    Edit: The problem isn’t the ‘Goblin Mode’, it’s that he could be ill`,
    ],
  },
  {
    type: "message",
    chance: 0.1,
    message: [],
    reply: [
      `I like to creep around my home and act like a goblin

    I don’t know why but I just enjoy doing this. Maybe it’s my way of dealing with stress or something but I just do it about once every week. Generally I’ll carry around a sack and creep around in a sort of crouch-walking position making goblin noises, then I’ll walk around my house and pick up various different “trinkets” and put them in my bag while saying stuff like “I’ll be having that” and laughing maniacally in my goblin voice (“trinkets” can include anything from shit I find on the ground to cutlery or other utensils). The other day I was talking with my neighbours and they mentioned hearing weird noises like what I wrote about and I was just internally screaming the entire conversation. I’m 99% sure they don’t know it’s me but god that 1% chance is seriously weighing on my mind.`,
    ],
  },
  {
    type: "message",
    message: ["amogus"],
    reply: [
      `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠛⠛⠛⠛⠛⢛⣿⠿⠟⠛⠛⠛⠛⠛⠛⠿⠿⣿⣟⠛⠛⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣛
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⢠⡿⠁⣀⢀⢀⠀⣀⠀⣀⠀⠀⡀⣀⠙⢷⡀⠺⠿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⣰⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢸⡇⢰⢿⣿⢻⡿⣿⢿⣯⡼⣧⡇⣿⡆⢸⡇⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⠃⢀⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣀⡀⠀⠘⢷⣀⠀⠀⠀⠀⠉⠀⠈⠀⠀⠀⠀⢀⣼⠃⠀⠀⠀⠉⠛⠿⢿⣿⣿⡏⠀⣼⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⡀⠀⠀⠉⠛⢷⣄⠈⢙⡷⠀⠀⣠⣤⣤⣤⣤⣤⡴⠾⠋⠁⣠⡶⠶⠶⠶⠶⣤⡀⠀⣿⡇⠀⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠐⠉⠉⠁⠀⠀⠀⠀⠹⣶⠻⠟⠛⠛⠋⠀⠀⠀⡏⠀⠀⠀⠀⢠⡏⣠⣤⠤⠤⣄⡈⢻⡄⣿⡇⠀⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⡖⠲⣶⣶⢤⡤⠤⣤⣿⡆⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⡾⠀⠻⣷⣶⡶⠾⠃⠈⣿⣿⡇⠀⣿⡿⠿⢿
    ⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⢀⣉⣛⠛⠉⢠⡙⠲⢿⣿⠃⠀⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡇⠀⣿⣧⣤⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣌⠛⠿⠿⠖⣎⣤⣶⡛⠁⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⠟⠋⠉⠙⠛⠻⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⡿⠁⠀⠠⢤⡀⠀⢀⡬⠟⣻⣿⣯⠍⠻⣆⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢸⡇⠀⣠⠶⠶⠶⢶⡀⠀⠀⢸⣿⡇⠀⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⠃⠀⡀⠀⠀⠉⠓⠋⠀⠀⣳⣾⡴⠂⠀⢹⡆⠀⠀⠀⠀⢀⣸⣰⣛⣛⣺⣀⣀⣸⣆⣀⣀⣸⣇⣀⣀⣸⣿⡇⠀⣿⣿⣿⣿
    ⣿⣿⣿⣿⡏⠀⠀⠉⠓⢦⣄⣀⣠⣴⣿⣷⣼⣵⣻⡄⠀⡇⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿
    ⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠉⢹⣿⣿⣿⣿⣿⣍⣀⣸⣧⣤⣤⣤⣤⣼⣄⣀⣀⣀⡀⠀⢀⣀⣠⣤⣤⣤⣤⣤⣤⣀⣀⣀⠀⠀⠀⠀⠀
    ⠛⠛⢻⡏⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠉⠉⠉⠛⠛⠛⠛⠛⠉⠉⠀⠀⠀⠀⠀⠉⠉⠉⠛⠛⠛⠛⠛⠛
    ⣀⣀⣸⠁⠀⠀⢀⣶⣶⣦⠀⢀⣟⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣠⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀`,
    ],
  },
  {
    type: "message",
    message: ["tardigrade"],
    reply: [
      "Who? Me?! Im so important! So useful! I will change discord forever! I am the biggest bird!",
    ],
  },
  {
    type: "react",
    message: [],
    chance: 0.1,
    reply: ["🤡"],
  },
  {
    type: "react",
    message: ["unpopular opinion"],
    reply: ["🤡"],
  },
  {
    type: "message",
    message: ["ok"],
    chance: 0.2,
    reply: ["https://on.soundcloud.com/uHgsLGVTj3aVgf6M9"],
  },
  {
    type: "message",
    message: ["im the biggest bird"],
    reply: ["IM THE BIGGEST BIRD :angry:"],
  },
  {
    type: "message",
    chance: 0.5,
    message: ["bruh"],
    reply: [
      "https://tenor.com/view/bruh-homelander-gif-26433831",
    ],
  },
  {
    type: "message",
    message: ["<@1040702560664817745>"],
    reply: ["DONT PING MY FUCKING DADDY"],
  }
];

@Discord()
export class textResponses {
  @On({ event: "messageCreate" })
  noOhio([message]: ArgsOf<"messageDelete">, client: Client): void {
    console.log(message.content)
    if (message.member?.user.bot) return;
    const found = replies.find(
      (x) =>
        (x.message.length == 0 ||
          x.message?.find((x) => message.content?.toLowerCase().includes(x))) &&
        Math.random() <= (x.chance || 1)
    );
    console.log("found?");
    console.log(found);

    if (found && found.type === "message") {
      message.channel.send({
        content:
          found.reply![Math.floor(Math.random() * found.reply?.length!)]! ||
          undefined,
        reply: { messageReference: message.id },
      });
    } else if (found && found.type === "react") {
      console.log("HERE");
      message.react(
        found.reply![Math.floor(Math.random() * found.reply?.length!)]!
      );
    }
  }
}
