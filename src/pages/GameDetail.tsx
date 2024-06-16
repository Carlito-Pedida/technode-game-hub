import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading, Image, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Image
        boxSize="400px"
        borderRadius={8}
        objectFit="cover"
        src={game.background_image}
      />
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetail;
