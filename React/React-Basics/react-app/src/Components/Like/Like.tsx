import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface Prop {
  onClick: () => void;
}

const Like = ({ onClick }: Prop) => {
  const [clicked, changeClicked] = useState(false);

  return (
    <div
      onClick={() => {
        onClick();
        changeClicked(!clicked);
      }}
    >
      {clicked ? (
        <AiFillHeart size="40" color="#FF7377" />
      ) : (
        <AiOutlineHeart size="40" color="#FF7377" />
      )}
    </div>
  );
};

export default Like;
