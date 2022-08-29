import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import Modal from "./modal";

const LayoutBase = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#0F0F0F",
});
const Input = styled("input", {
  width: "250px",
  height: "35px",
  borderRadius: "5px",
  marginRight: "10px",
  backgroundColor: "black",
  border: "none",
  transition: "ease-in-out .5s",
  color: "white",
  fontSize: "18px",
  paddingLeft: "10px",

  "&:focus": {
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});
const FormLayout = styled("form", {
  height: "fit-content",
  padding: "30px",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  gap:"10px",
  color:"#00B6CD",
  backgroundColor:"rgb(0, 0,0, 0.25)",
  borderRadius:"7px",
});
const ContentWrap = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ListaLayout = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridAutoRows: "auto",

  gap: "30px",
  padding: "30px",
});
const LiLayout = styled("li", {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
  padding: "30px",
  backgroundColor: "Black",
  color: "White",
  borderRadius: "7px",
  textDecoration: "none",

  "&:hover": {
    outline: "1px solid #00B6CD",
  },
});
const DetailsLayout = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "15px 0px 0px",
  justifyContent: "space-between",
});
const SearchButton = styled("button", {
  width: "120px",
  height: "35px",
  borderRadius: "5px",
  backgroundColor: "#ACDD00",
  border: "none",
  color: "Black",
  fontWeight: "bold",
  transition: "ease-in-out .5s",

  "&:hover": {
    boxShadow: "0px 0px 15px 0 rgba(5,255,0, 0.5)",
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },

  /* "@media (min-width: 600px)": {}, */
});
const LiButton = styled("button", {
  width: "fit-content",
  height: "fit-content",
  padding: "5px 10px",
  backgroundColor: "Black",
  color: "White",
  borderRadius: "30px",
  border: "1px solid #00B6CD",

  "&:hover": {
    backgroundColor: "#00B6CD",
    color: "black",
    fontWeight: "bolder",
  },
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
        <h2>Search your Favorite character</h2>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchButton type="submit">Search</SearchButton>
      </FormLayout>
      <ContentWrap>
        <ListaLayout>
          {data.results.map((item) => (
            <LiLayout key={item.id}>
              <img alt={item.name} src={item.image} />
              <DetailsLayout>
                <h2>{item.name}</h2>
                <LiButton
                  onClick={() => {
                    console.log(item.id);
                    setModal(item.id);
                  }}
                >
                  More info
                </LiButton>
              </DetailsLayout>

              {modal === item.id && (
                <Modal
                  onClose={() => setModal("")}
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  origin={item.origin}
                  location={item.location}
                />
              )}
            </LiLayout>
          ))}
        </ListaLayout>
      </ContentWrap>
    </LayoutBase>
  );
};
