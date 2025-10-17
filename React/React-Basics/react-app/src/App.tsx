import { useState } from "react";
import "./App.css";
import ExpandableText from "./Components/ExpandableText";

function App() {
  return (
    <ExpandableText maxChars={100}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
      reprehenderit, sit tempora distinctio totam asperiores nam repellendus
      perferendis, excepturi doloribus dolor repellat aliquam iste cum quasi
      similique ab? Voluptates? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Perferendis quibusdam debitis excepturi obcaecati
      laboriosam nam, tenetur ex eum nihil at quae numquam ad maiores rerum
      voluptatem error dolorem in. Blanditiis!
    </ExpandableText>
  );
}

export default App;
