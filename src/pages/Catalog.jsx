import React, { useState } from 'react';
import "../styles/style.css";
import data from '../data';
import { useParams } from "react-router-dom";
import useModal from "../components/useModal";
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

function Catalog() {
  const { title } = useParams(); // используем хук useParams для получения параметра из URL
  const cards = data.cardData.filter(cardI => cardI.sectionTitle === title); // фильтруем данные карт на основе параметра из URL
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(''); // добавляем состояние для хранения выбранного значения 
  const [isShowingModal, toggleModal] = useModal(); // используем кастомный хук useModal для управления модальным окном

  const handleChangeSearchValue = (newValue) => {
    setSearchValue(newValue);
  };

  const handleClickCard = (value) => {
    setSelectedValue(value); // обновляем выбранное значение при клике на карточку 
    toggleModal(); // открываем модальное окно 
  };

  const filteredCards = cards.filter(card => card.title.toLowerCase().includes(searchValue)); // фильтруем карты на основе значения поиска
  const chunkSize = 3;
  const dividedData = [];
  for (let i = 0; i < filteredCards.length; i += chunkSize) {
    dividedData.push(filteredCards.slice(i, i + chunkSize)); // разбиваем отфильтрованные карты на группы
  }

  return (
    <>
      <Modal show={isShowingModal} cardInfo={selectedValue} onCloseButtonClick={toggleModal} />
      <div className="catalog">
        <Navbar onChangeValue={handleChangeSearchValue} />
        {dividedData.map((group, index) => (
          <div className="card-group" key={index}>
            {group.map((card) => (
              <div onClick={() => handleClickCard(card)} key={card.id}>
                <Card cardInfo={card} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Catalog;
