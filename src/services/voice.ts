// pretend these are stored in a db or config file
const DEFAULT_VOICE =
  "Write at a 7th grade reading level.  Use imagery when appropriate, and a positive conversational tone.  Do not restate the format within the response.";
const LIFESTYLE_VOICE =
  "flavor the description considering activities like fishing, camping, hunting, and kayaking although these do not need to be explicitly mentioned.";
const ENTHUSIAST_VOICE =
  "Product is geared towards a truck enthusiast who wants to make their truck stand out from the crowd.";

export type Lifestyle = "outdoors";

export function getWritingStyle(lifeStyleSegment?: Lifestyle) {
  const style = [DEFAULT_VOICE];

  if (lifeStyleSegment === "outdoors") {
    style.push(LIFESTYLE_VOICE);
  }

  if (!lifeStyleSegment) {
    style.push(ENTHUSIAST_VOICE);
  }

  return style;
}
