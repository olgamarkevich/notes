export const getTagsFromStr = (str: string) => str.match(/#\S+/g) || [];
