import { GUIDE_IMG_EXTENSION, GUIDE_ROOT, HTTPS } from "@constants/api.ts";

const getId = (url: string) => {
  return url.replace(/[^\d*]/g, "");
};

export const getPeopleId = (url: string): string => getId(url);

export const getImgPeople = (id: string, category: string): string => {
  const c: string = category === "people" ? "characters" : category;
  return `${HTTPS + GUIDE_ROOT + c}/${id + GUIDE_IMG_EXTENSION}`;
};
