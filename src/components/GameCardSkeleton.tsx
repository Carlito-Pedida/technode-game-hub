import { Card, CardBody, Skeleton, Text } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <Text>Game Loading...</Text>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
