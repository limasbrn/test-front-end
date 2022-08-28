import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import Modal from "./modal";
import { LayoutBase, Button } from "./style";

const Input = styled("input", {
  width: "200px",
  height: "35px",
  borderRadius: "5px",
  marginRight:"10px",
  backgroundColor:"black",
  border:"none",
  transition: "ease-in-out .5s",
  color:"white",
  fontSize:"18px",
  paddingLeft:"10px",

  "&:focus": {
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});
const FormLayout = styled("form", {
  height: "fit-content",
  padding:"30px",
});

export const Card = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({ results: [] });
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(data);
  };

  async function searchCharacter() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${inputValue}`
      );
      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (window.localStorage !== undefined) {
      const data = window.localStorage.getItem("data");

      if (data !== null) {
        setData(JSON.parse(data));
      }
    }
  }, []);

  useEffect(() => {
    searchCharacter();
  }, [search]);

  return (
    <LayoutBase>
      <FormLayout onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit">Search Character</Button>
      </FormLayout>
      <div>
        <ul>
          {data.results.map((item) => (
            <li key={item.id}>
              <img alt={item.name} src={item.image} />
              <h2>{item.name}</h2>
              <button
                onClick={() => {
                  console.log(item.id);
                  setModal(item.id);
                }}
              >
                More info
              </button>

              {modal === item.id && (
                <Modal
                  onClose={() => setModal("")}
                  image={item.image}
                  name={item.name}
                  species={item.species}
                  origin={item.origin}
                  location={item.location}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </LayoutBase>
  );
};
