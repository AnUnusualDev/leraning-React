import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpand] = useState(false);

  if (children.length < maxChars) return <div>{children}</div>;

  let output = isExpanded ? children : children.substring(0, maxChars);

  return (
    <div>
      {output}...
      <button onClick={() => setExpand(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
