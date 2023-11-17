import React from 'react';
// import CatalogList from '../../components/CatalogList/CatalogList';
// import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import {
  useGetAdvertsQuery,
//   useGetCarsByPageQuery,
} from '../../redux/operations';

const CatalogPage = () => {

    const { data, error, isFatching } = useGetAdvertsQuery();
//     const [cars, setCars] = useState([]);
//     const [page, setPage] = useState(1);
    // const { data, error, isLoading, isFetching } = useGetCarsByPageQuery(page);
//     const { data: allAdverts } = useGetAdvertsQuery();

//   useEffect(() => {
//         if (data) {
//     setCars(prevCars=> [...prevCars, ...data])
// };
//   }, [data]);

//       const [filters, setFilters] = useState({
//     make: '',
//     filteredPrices: [],
//     minMileage: '',
//     maxMileage: '',
//   });
//   const [filteredAdverts, setFilteredAdverts] = useState(null);
//   const [isFiltering, setIsFiltering] = useState(false);

    
    return (
        
        <>
            <p>Hello!!!</p>
      {/* {error && <p>Ooops... something went wrong</p>}
      {isFatching ? (
        <Loader />
      ) : (
        <ul>
          {data.map((car) => (
            <li key={car.id}>
              <img src={car.img} alt="Car" width={250} />
              <p>{car.model}</p>
            </li>
          ))}
        </ul>
      )} */}
    </>
            
    )

}

export default CatalogPage;