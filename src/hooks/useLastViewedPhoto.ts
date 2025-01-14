import { createGlobalState } from "react-hooks-global-state";

interface State {
  photoToScrollTo: number | null;
}

const initialState = { photoToScrollTo: null };
const { useGlobalState } = createGlobalState<State>(initialState);

export const useLastViewedPhoto = () => {
  return useGlobalState("photoToScrollTo");
};
