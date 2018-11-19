export type index<T> = {[key: string]: T};

export type resolverSlugs = {
    project: string | number,
    userStory?: string | number,
    issue?: string | number,
    task?: string | number,
    milestone?: string | number,
    wiki?: string | number,
    reference?: string | number
};