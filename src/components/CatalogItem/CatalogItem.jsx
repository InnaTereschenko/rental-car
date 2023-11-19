import React, { useState } from 'react';
// import Button from 'components/Button/Button';
import {
  Wrapper,
  ImageWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  Text,
  List,
  Item,
} from './CatalogItem.styled';

// import Modal from 'components/Modal/Modal';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const CarItem=({ data })=> {
    
//       const toggleModal = () => {
//     setShowModal(!showModal);
//   };
  

    return (
        <Wrapper>
            <ImageWrap>
<FavoriteButton data={data} />
                
                <Image src={data.img} alt="Car" />
            </ImageWrap>
            <TitleWrap>
                <Title>
                    {data.make} {''}
                    <Span>{data.model}</Span>, {data.year}
                </Title>
                <Text> {data.rentalPrice}</Text>
            </TitleWrap>
            <List>
                <Item>{data.address.split(',')[1]}</Item>
                <Item>{data.address.split(',')[2]}</Item>
                <Item>{data.rentalCompany}</Item>
                <Item>{data.type}</Item>
                <Item>{data.model}</Item>
                <Item>{data.mileage}</Item>
                <Item>{data.accessories[0]}</Item>
            </List>
            {/* <Button onClick={toggleModal} text="Learn more" width="274px" /> */}
            {/* {ShowModal && <Modal onClose={toggleModal} data={data} />} */}
        </Wrapper>
    );
};

export default CarItem;