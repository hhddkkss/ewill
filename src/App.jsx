import { useState } from "react";

import FirstSection from "./views/FirstSection";
import AnimationWave from "./views/AnimationWave";
import Form from "./views/Form";

function App() {
  return (
    <div>
      <FirstSection />
      <AnimationWave />
      <Form></Form>
    </div>
  );
}

export default App;
