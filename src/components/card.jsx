import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import Modal from "./modal";
import Filter from "./Filters/filter";
import Pagination from "./Pagination/pagination";

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
  width: "100%",
  padding: "30px 0px 0px",
  gap: "15px",
  justifyContent: "center",
  fontSize: "22px",

  "@media (min-width: 470px)": {
    width: "84%",
  },
  "@media (min-width: 770px)": {
    fontSize: "16px",
  },
});
const ContainerSelect = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "20px 30px",
  height: "fit-content",
  borderRadius: "7px",
  gap: "15px",
  color: "Gray",
  justifyContent: "center",
  backgroundColor: "Black",

  "@media (min-width: 770px)": {
    flexDirection: "row",
  },
});
const ContentWrap = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StatusText = styled("h4", {
  variants: {
    color: {
      dead: { color: "#DF2222" },
      alive: { color: "#ACDD00" },
      unknwon: { color: "Gray" },
    },
  },
});
const ListaLayout = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridAutoRows: "auto",
  gap: "30px",
  padding: "30px",
  justifyItems: "center",

  "@media (min-width: 815px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 1200px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
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
  alignItems: "center",
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
  const [modal, setModal] = useState();
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [pageNumber, setPageNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCharacter();
  };

  let api = `https://rickandmortyapi.com/api/character/?name=${inputValue}&status=${status}&gender=${gender}&page=${pageNumber}`;

  async function searchCharacter() {
    try {
      const response = await fetch(api);
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
  }, [status, gender, pageNumber]);

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

          <p> or </p>

          <Filter setStatus={setStatus} setGender={setGender} />
        </ContainerSelect>
      </FormLayout>

      <ContentWrap>
        <ListaLayout>
          {data.results.map((item) => (
            <LiLayout key={item.id}>
              <img alt={item.name} src={item.image} />
              <DetailsLayout>
                <div>
                  <h3>{item.name}</h3>
                  <StatusText color={item.status.toLowerCase()}>
                    {item.status}
                  </StatusText>
                </div>
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
                  gender={item.gender}
                  species={item.species}
                  origin={item.origin}
                  location={item.location}
                />
              )}
            </LiLayout>
          ))}
        </ListaLayout>
      </ContentWrap>
      <Pagination
        info={data.info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </LayoutBase>
  );
};
