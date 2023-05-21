export function getWritingStyle(lifeStyleSegment: string){
    const style : string[] = [];

    const defaultVoice = 'write at a 7th grade reading level.  Use imagery when appropriate, and a positive conversational tone'

    style.push(defaultVoice);

    if(lifeStyleSegment === 'outdoors') {
        style.push('product is geared towards a customer that enjoys the outdoors, and may enjoy hobbies such as fishing, camping, hunting, kayaking, or other outdoor activities.  You do not need to mention the activities, but you may flavor the text appropriately.')
    }

    if(!lifeStyleSegment) {
        style.push('product is geared towards a truck enthusiast who wants to make their truck stand out from the crowd')
    }

    return style;

}