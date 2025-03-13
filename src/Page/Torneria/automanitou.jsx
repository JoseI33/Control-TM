import SearchSpare from "../../components/layout/search"

const autoeleManitou = () => {
   const handleSearch = (query) => {
      console.log("Buscando...", query);
    }

    return (
        <div>
          <SearchSpare onSearch={handleSearch} />
        </div>
    );
}

export default autoeleManitou;

