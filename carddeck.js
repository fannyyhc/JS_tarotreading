// take in card information
const tarotCard = (card, uprightMessage, reverseMessage) => {
    return {
        card,
        message: [uprightMessage, reverseMessage],
    }
}

// Card deck with major arcana
const tarotDeck = [
    tarotCard("The Fool", "innocence, new beginnings, free spirit", "recklessness, taken advantage of, inconsideration" ), 
    tarotCard("The Magician", "willpower, desire, creation, manifestation", "trickery, illusions, out of touch"),
    tarotCard("The High Priestess", "intuitive, unconscious, inner voice", "lack of center, lost inner voice, repressed feelings"),
    tarotCard("The Empress", "motherhood, fertility, nature", "dependence, smothering, emptiness, nosiness"),
    tarotCard("The Emperor", "authority, structure, control, fatherhood", "tyranny, rigidity, coldness"),
    tarotCard("The Hierophant", "tradition, conformity, morality, ethics", "rebellion, subversiveness, new approaches"),
    tarotCard("The Lovers", "partnerships, duality, union", "loss of balance, one-sidedness, disharmony"),
    tarotCard("The Chariot", "direction, control, willpower", "lack of control, lack of direction, aggression"),
    tarotCard("Strength", "inner strength, bravery, compassion, focus", "self doubt, weakness, insecurity"),
    tarotCard("The Hermit", "contemplation, search for truth, inner guidance", "loneliness, isolation, lost your way"),
    tarotCard("The Wheel of Fortuen", "change, cycles, inevitable fate", "no control, clinging to control, bad luck"),
    tarotCard("Justice", "cause and effect, clarity, truth", "dishonesty, unaccountability, unfairness"),
    tarotCard("The Hanged Man", "sacrifice, release, martyrdom", "stalling, needless sacrifice, fear of sacrifice"),
    tarotCard("Death", "end of cycle, beginnings, change, metamorphosis", "fear of change, holding on, stagnation, decay"),
    tarotCard("Temperance", "middle path, patience, finding meaning", "extremes, excess, lack of balance"),
    tarotCard("The Devil", "addiction, materialism, playfulness", "freedom, release, restoring control"),
    tarotCard("The Tower", "sudden upheaval, broken pride, disaster", "disaster avoided, delayed disaster, fear of suffering"),
    tarotCard("The Star", "hope, faith, rejuvenation", "faithlessness, discouragement, insecurity"),
    tarotCard("The Moon", "unconscious, illusions, intuition", "confusion, fear, misinterpretation"),
    tarotCard("The Sun", "joy, success, celebration, positivity", "negativity, depression, sadness"),
    tarotCard("Judgement", "reflection, reckoning, awakening", "lack of self awareness, doubt, self loathing"),
    tarotCard("The World", "fulfillment, harmony, completion", "incompletion, no closure")
]

// draw card
const drawDeck = () => {
    let i = Math.floor(Math.random()*22);
    let j = Math.floor(Math.random()*2);
    console.log("You've picked out " + tarotDeck[i].card + ": " + tarotDeck[i].message[j])
}

drawDeck()
// console.log(tarotDeck[Math.floor(Math.random()*22)])