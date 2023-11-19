import React, {useState, useEffect} from 'react';
import CatalogItem from '../../components/CatalogItem/CatalogItem';
// import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import { CatalogListWrapper, CatalogList } from './CatalogPage.styled';
import {
  // useGetAdvertsQuery,
  useGetCarsByPageQuery,
} from '../../redux/operations';


const CatalogPage = () => {
      const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    const { data, error, isFetching } = useGetCarsByPageQuery(page);
    // const { data: allAdverts } = useGetAdvertsQuery();

  useEffect(() => {
        if (data) {
    setCars(prevCars=> [...prevCars, ...data])
};
    }, [data]);
  
  const loadMore = () => {
    setPage(page + 1);
  };

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
        
        {/* <Filter/> */}

        <CatalogListWrapper>
          {error && <p>Ooops... something went wrong</p>}
          {isFetching ? (
            <Loader />
          ) : (
            <CatalogList>
              {cars.length > 0 ? (
                cars.map((car, index) => <CatalogItem key={index} data={car} />)
              ) : null}
            </CatalogList>)}
          <Button>{ loadMore}</Button>
        </CatalogListWrapper>
      {/* 
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <img src={car.img} alt="Car" width={250} />
              <p>{car.model}</p>
            </li>
          ))}
        </ul> */}
      {/* )}  */}
    </>
            
    )

}

export default CatalogPage;