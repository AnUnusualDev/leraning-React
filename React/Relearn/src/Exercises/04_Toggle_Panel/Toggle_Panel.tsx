import FeatureForm from "./FeatureForm";
import FeatureList from "./FeatureList";
import "../../App.css";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";

export type Feature = {
  id: number;
  name: string;
  enabled: boolean;
};

function Toggle_Panel() {
  const [features, setFeatures] = useState<Feature[]>([]);

  const [featureName, setFeatureName] = useState<string>("");

  const addFeature = () => {
    if (featureName.trim() === "") alert("Der Name darf nicht leer sein!");
    else {
      setFeatures((prev) => [
        ...prev,
        { id: Date.now(), name: featureName, enabled: false },
      ]);
      setFeatureName("");
    }
  };

  const onCheckedChange = (id: number) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, enabled: !feature.enabled } : feature
      )
    );
  };

  const deleteFeature = (id: number) => {
    setFeatures((prev) => prev.filter((feature) => feature.id !== id));
  };

  return (
    <>
      <Heading textAlign={"center"} fontSize={"6xl"} marginY={"50px"}>
        FeatureList
      </Heading>
      <FeatureForm
        featureName={featureName}
        setFeatureName={setFeatureName}
        addFeature={addFeature}
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
