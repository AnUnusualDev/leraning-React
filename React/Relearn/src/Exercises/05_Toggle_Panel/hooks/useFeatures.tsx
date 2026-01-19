import { useState } from "react";
import type { Feature } from "../Toggle_Panel";

export function useFeatures() {
  const [features, setFeatures] = useState<Feature[]>([]);

  const addFeature = (name: string) => {
    if (name.trim() === "") alert("Der Name darf nicht leer sein!");
    else {
      setFeatures((prev) => [
        ...prev,
        { id: Date.now(), name: name, enabled: false },
      ]);
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
  return {
    features,
    addFeature,
    deleteFeature,
    onCheckedChange,
  };
}
