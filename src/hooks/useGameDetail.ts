import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGameDetail = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getGameDetail(slug)
  });

export default useGameDetail;
