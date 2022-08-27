/* import { styled } from "@stitches/react"; */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

/* const Base = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "250px",
  minHeight: "222px",
  height: "fit-content",

  backgroundColor: "#FFFFFF",
  boxShadow: "0 0 5px 0 rgba(0,0,0, 0.10)",
  borderRadius: "5px",
});
 */

const fetcher = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const options = {
  onSuccess: (data) => {
    console.log(data);
  },
  onError: (error) => {
    console.log(error);
  },
  retry: true,
  refetchOnWindowFocus: false,
};


export const Card = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    ["characters"],
    fetcher,
    options
  );

  if (isLoading) {
    return <div> Loading ...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <ul>
          {data.results.map((item) => (
            <li key={item.id}>
              <img src={item.image}/>
              {item.name}</li>
          ))}
        </ul>
        <button>Carregar mais personagens</button>
      </div>
    );
  }
  return null;
};
