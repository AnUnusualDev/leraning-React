import { Box, Input, Button } from "@chakra-ui/react";

interface Props {
  featureName: string;
  setFeatureName: (name: string) => void;
  addFeature: () => void;
}

const FeatureForm = ({ addFeature, setFeatureName, featureName }: Props) => {
  const addButtonClick = () => {
    addFeature();
  };

  return (
    <Box display="flex" gap="5px">
      <Input
        value={featureName}
        onChange={(e) => setFeatureName(e.target.value)}
      ></Input>
      <Button variant="subtle" onClick={addButtonClick}>
        Hinzufügen
      </Button>
    </Box>
  );
};

export default FeatureForm;
