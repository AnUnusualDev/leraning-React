import { Box } from "@chakra-ui/react";
import type { Feature } from "./Toggle_Panel";
import FeatureItem from "./FeatureItem";

interface Props {
  features: Feature[];
  onCheckedChange: (id: number) => void;
  deleteFeature: (id: number) => void;
}

const FeatureList = ({ deleteFeature, features, onCheckedChange }: Props) => {
  return (
    <Box>
      {features.map((feature) => (
        <Box>
          <FeatureItem
            feature={feature}
            onCheckedChange={onCheckedChange}
            deleteFeature={deleteFeature}
          ></FeatureItem>
        </Box>
      ))}
    </Box>
  );
};

export default FeatureList;
