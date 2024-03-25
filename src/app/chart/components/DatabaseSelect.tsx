"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface DatabaseSelectProps {}

const DatabaseSelect = ({}: DatabaseSelectProps) => {
  const [pageId, setPageId] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageId(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notion`, {
      method: "POST",
      body: JSON.stringify(pageId),
    });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-gray-400 "
        type="text"
        value={pageId}
        onChange={handleChange}
      />
      <button type="submit">데이터 베이스 가져오기</button>
    </form>
  );
};

export default DatabaseSelect;
