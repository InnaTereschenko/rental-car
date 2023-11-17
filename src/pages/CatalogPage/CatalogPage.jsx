import React, {useEffect, useState} from 'react';
import CatalogList from '../../components/CatalogList/CatalogList';
import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import {
  useGetAdvertsQuery,
  useGetCarsByPageQuery,
} from '../../redux/operations';

const CatalogPage = () => {

    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isFetching } = useGetCarsByPageQuery(page);
    
  useEffect(() => {
        if (data) {
    setCars(prevCars=> [...prevCars, ...data])
};
  }, [data]);

    return (
        <>
            {isFetching && <Loader/>}
            <Filter />
            <CatalogList/>
      {/* {cars?.length > 0 && <CatalogList cars={cars} />} */}
        </>
    )

}

export default CatalogPage;