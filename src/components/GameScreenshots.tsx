import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenhots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenhots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
