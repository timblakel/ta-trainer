export enum CardKind {
  TeachingEasy = "Teaching Prompt Round 1",
  TeachingHard = "Teaching Prompt Round 2",
  Microaggressions = "Microaggressions Round"
}

export interface Card {
  ID: number
  Kind: CardKind
  Prompt: string
  Answer: string
}

