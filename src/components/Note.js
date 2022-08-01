import React from "react";

import { MdDeleteForever } from "react-icons/md";

const Note = ({ text, date, id, handleDeleteNote }) => {
  const deleteNoteHandler = () => {
    handleDeleteNote(id);
  };

  return (
    <div className="bg-[#fef68a] drop-shadow-lg rounded-lg p-[1rem] min-h-[170px] flex flex-col justify-between">
      <span className="text-2xl">{text}</span>
      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever
          onClick={deleteNoteHandler}
          className="cursor-pointer"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
