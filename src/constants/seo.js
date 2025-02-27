const image = "/images/hero.png";
const creator = "Honour";
const author = creator;

export const url = (slug) => {
  return `https://robinsonhonour.me/${slug ?? ""}`;
};
export const SEOdata = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "Honour - Creative Software Engineer",
    description:
      "I enjoy creating solutions with solid foundations, scalability, and excellent user experiences.",
  },
};
