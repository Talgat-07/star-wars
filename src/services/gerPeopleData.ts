import {
  GUIDE_IMG_EXTENSION,
  HTTPS,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  URL_IMG_PERSON,
} from "../constants/api.ts";

const getId = (url: string, category: string) => {
  return url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");
};

export const getPeopleId = (url: string): string => getId(url, SWAPI_PEOPLE);

export const getImgPeople = (id: string): string =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
