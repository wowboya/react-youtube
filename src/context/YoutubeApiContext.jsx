import { createContext, useContext } from "react";
import FakeYoutubeClient from "../components/api/fakeYoutubeClient";
import Youtube from "../components/api/youtube";

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client); //new Youtube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
    {children}
  </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}