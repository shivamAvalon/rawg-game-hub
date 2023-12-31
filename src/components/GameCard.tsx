import {
  Card,
  CardBody,
  Image,
  Heading,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width={'300px'} overflow={'hidden'} borderRadius={10}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt="Green double couch with wooden legs"
        borderTopRadius={"lg"}
      />

      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <Badge colorScheme="green">{game.metacritic}</Badge>
        </HStack>
        <Heading size="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
