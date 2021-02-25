enum IMAGE_SOURCE {
  MIRO_MEDIUM = "miro.medium.com",
}

export const imageProcess = (img: string): string => {
  let newLink = img;
  if (img.includes(IMAGE_SOURCE.MIRO_MEDIUM)) {
    newLink = img.replace(/max\/\d+/, "max/2000");
  }

  return newLink;
};
