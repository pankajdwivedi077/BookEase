import { useSearchContext } from "../contexts/SearchContext"; 

const Search = () => {

  const search = useSearchContext();
  console.log(search);

  return (
    <div>Search Page</div>
  );
};

export default Search;