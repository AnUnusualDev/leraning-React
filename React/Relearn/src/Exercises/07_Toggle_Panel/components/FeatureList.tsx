import { Box } from "@chakra-ui/react";
import type { Feature } from "../Toggle_Panel";
import FeatureItem from "./FeatureItem";

interface Props {
  features: Feature[];
  onCheckedChange: (id: number) => void;
  deleteFeature: (id: number) => void;
  updateFeatureName: (id: number, name: string) => void;
}

const FeatureList = ({
  updateFeatureName,
  deleteFeature,
  features,
  onCheckedChange,
}: Props) => {
  return (
    <Box>
      {features.map((feature) => (
        <Box>
          <FeatureItem
            updateFeatureName={updateFeatureName}
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
