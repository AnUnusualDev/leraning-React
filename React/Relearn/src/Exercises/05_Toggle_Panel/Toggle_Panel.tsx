import FeatureForm from "./components/FeatureForm";
import FeatureList from "./components/FeatureList";
import "../../App.css";
import { Heading } from "@chakra-ui/react";
import { useFeatures } from "./hooks/useFeatures";
import { useState } from "react";

export type Feature = {
  id: number;
  name: string;
  enabled: boolean;
};

function Toggle_Panel() {
  const { features, addFeature, deleteFeature, onCheckedChange } =
    useFeatures();

  const [featureName, setFeatureName] = useState<string>("");

  const handleAdd = () => {
    addFeature(featureName);
    setFeatureName("");
  };
  return (
    <>
      <Heading textAlign={"center"} fontSize={"6xl"} marginY={"50px"}>
        FeatureList
      </Heading>
      <FeatureForm
        featureName={featureName}
        setFeatureName={setFeatureName}
        addFeature={handleAdd}
      ></FeatureForm>
      <FeatureList
        deleteFeature={deleteFeature}
        features={features}
        onCheckedChange={onCheckedChange}
      ></FeatureList>
    </>
  );
}

export default Toggle_Panel;
