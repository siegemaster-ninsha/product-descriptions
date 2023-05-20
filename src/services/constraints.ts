export function getConstraints(){
    let constraints : string[] = [];
    
    const defaultConstraints = 'do not in any way mention safety, security, warranty, or any other topics that may be considered politically controversial or legally problematic.  Write at a 7th grade reading level.'
    constraints.push(defaultConstraints)

    return constraints
}