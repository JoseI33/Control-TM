import SearchSpare from "../../components/layout/search"

const Volcadoras = () => {
    const handleSearch = (query) => {
        console.log(query);
        }
       return (
        <div>
          <SearchSpare onSearch={handleSearch} />
        </div>
    );
}

export default Volcadoras;