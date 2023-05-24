// pretend these are stored in a db or config file
const DEFAULT_VOICE = 'Write at a 7th grade reading level.  Use imagery when appropriate, and a positive conversational tone.';
const LIFESTYLE_VOICE = 'Product is geared towards a customer that enjoys the outdoors, and may enjoy hobbies such as fishing, camping, hunting, kayaking, or other outdoor activities.  You do not need to mention the activities, but you may flavor the text appropriately.';
const ENTHUSIAST_VOICE = 'Product is geared towards a truck enthusiast who wants to make their truck stand out from the crowd.';

export type Lifestyle = 'outdoors';

export function getWritingStyle(lifeStyleSegment?: Lifestyle) {
    const style = [DEFAULT_VOICE];

    if (lifeStyleSegment === 'outdoors') {
        style.push(LIFESTYLE_VOICE)
    }

    if (!lifeStyleSegment) {
        style.push(ENTHUSIAST_VOICE)
    }

    return style;
}
