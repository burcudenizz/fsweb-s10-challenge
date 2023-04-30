import React from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { tumunuSil } from "../actions";

const PostList = () => {
  const notlar = useSelector((store) => store.notlar);
  const dispatch = useDispatch();
  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
      <button
        className="text-xs text-amber-600 mt-4 underline bg-slate-50 p-6"
        onClick={() => dispatch(tumunuSil())}
      >
        Tüm notları sil
      </button>
    </div>
  );
};

export default PostList;
