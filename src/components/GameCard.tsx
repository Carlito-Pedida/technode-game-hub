import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import croppedImageUrl from "../services/image-crop";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={"/games/" + game.slug}>
        <Image alt="No Data" src={croppedImageUrl(game.background_image)} />
      </Link>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
