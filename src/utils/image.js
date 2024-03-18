const getImageURL = (name) => {
    return new URL(`../assets/project-imgs/${name}`, import.meta.url).href;
}

export default getImageURL;