import axios from "axios";
import { mockPhotos } from "./mock/mock-unsplash-random";
const ACCESS_KEY = "HAbDb_rFc_lpMjljd8_mPe3sjA9I5uUIiqc3-j38IkU";


export async function getPhotos() {
  const count = 30;
  const url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&count=${count}`;
  try {
    const res = await axios.get(url);
    const { data } = res; //photos can be found here
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function getMockPhotos() {
  return mockPhotos;
}
