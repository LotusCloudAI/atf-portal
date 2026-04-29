import React, { useState } from "react";
import BirthDataForm from "../components/BirthDataForm";
import ChartsView from "../components/ChartsView";
import PredictionPanel from "../components/PredictionPanel";
import AshtakavargaView from "../components/AshtakavargaView";
import { getPrediction } from "../../../services/astrologyService";

const AstrologyPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: any) => {
    try {
      setLoading(true);
      const response = await getPrediction(formData);
      setData(response);
    } catch (error) {
      console.error("Astrology error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <BirthDataForm onSubmit={handleSubmit} loading={loading} lang="en" />
      {data && (
        <>
          <ChartsView data={data} />
          <PredictionPanel
            type="general"
            lang="en"
            planets={data.planets}
            dashas={data.dashas}
          />
          <AshtakavargaView
            ashtaka={data.ashtaka}
            sarvashtaka={data.sarvashtaka}
            lang="en"
          />
        </>
      )}
    </div>
  );
};

export default AstrologyPage;