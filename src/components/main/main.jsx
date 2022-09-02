import { useEffect, useState } from "react";
import ModalCard from "../modal";
import Filter from "../Filters/filter";
import Pagination from "../Pagination/pagination";
import {
  LayoutBase,
  Input,
  FormLayout,
  ContainerSelect,
  ContentWrap,
  StatusText,
  ListaLayout,
  LiLayout,
  DetailsLayout,
  SearchButton,
  LiButton,
} from "./main.style";


export const Main = () => {
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
                <ModalCard
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
