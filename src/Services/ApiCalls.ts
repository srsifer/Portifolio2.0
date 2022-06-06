import axios from "axios";

export const getUrlCards = async (url: string) => {
  const URL = url
  const response = await (await fetch(URL)).json();
  return response
}
