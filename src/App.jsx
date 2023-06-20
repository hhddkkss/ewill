import { useState } from "react";

import FirstSection from "./views/FirstSection";
import AnimationWave from "./views/AnimationWave";
import Form from "./views/Form";
import ThirdSection from "./views/Gift";
import Lighthouse from "./views/LightHouse";
import ToStore from "./views/ToStore";

function App() {
  return (
    <div style={{ backgroundColor: "var(--primaryColor4)" }}>
      <FirstSection />
      <AnimationWave />
      <Form />
      <ThirdSection />
      <Lighthouse />
      <ToStore />
    </div>
  );
}

export default App;
