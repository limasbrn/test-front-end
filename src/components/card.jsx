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
  width: "200px",
  height: "35px",
  paddingLeft: "10px",
  marginRight: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#0F0F0F",
  color: "white",
  fontSize: "18px",
  transition: "ease-in-out .5s",

  "&:focus": {
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
  },
});
const FormLayout = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "84%",
  padding: "30px 0px 0px",
  gap: "15px",
});
const ContainerSelect = styled("div", {
  padding: "20px 30px",
  height: "fit-content",
  borderRadius: "7px",
  gap: "15px",
  color: "#00B6CD",
  backgroundColor: "Black",
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
  borderRadius: "7px",
  padding: "30px",
  backgroundColor: "Black",
  color: "White",
  textDecoration: "none",

  "&:hover": {
    outline: "1px solid #00B6CD",
  },
});
const DetailsLayout = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "15px 5px 5px",
  justifyContent: "space-between",
});
const SearchButton = styled("button", {
  width: "fit-content",
  height: "fit-content",
  padding: "7px 20px",
  borderRadius: "5px",
  border: "none",
  color: "Black",
  backgroundColor: "#ACDD00",
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
  borderRadius: "5px",
  border: "1px solid #00B6CD",
  backgroundColor: "Black",
  color: "#ACDD00",
  transition: "ease-in-out .5s",

  "&:hover": {
    outline: "1px solid #00B6CD",
    borderRadius: "30px",
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
      <FormLayout>
        <ContainerSelect>
          <form onSubmit={handleSubmit}>
            <h3>Search your Favorite character</h3>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
          </form>
          <br />
          <p> or </p>
          <br />
          <h3>Filter the characters by features</h3>
        </ContainerSelect>
      </FormLayout>

      <ContentWrap>
        <ListaLayout>
          {data.results.map((item) => (
            <LiLayout key={item.id}>
              <img alt={item.name} src={item.image} />
              <DetailsLayout>
                <h3>{item.name}</h3>
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
