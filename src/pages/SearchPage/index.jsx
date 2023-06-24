import React, { useState } from 'react';
import '../../styles/variables.css';
import './SearchPage.module.css';
import DocumentImage from '../../assets/images/SearchPageImg3.svg';
import FolderImage from '../../assets/images/SearchPageImg2.svg';
import GroupImage from '../../assets/images/SearchPageImg1.svg';

const SearchPage = () => {
  const [searchData, setSearchData] = useState({
    inn: '',
    completeness: false,
    businessContext: false,
    mainRole: false,
    tonality: '',
    riskFactors: false,
    technicalNews: false,
    announcements: false,
    newsDigests: false,
    documentCount: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSearchData({
      ...searchData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSearch = () => {
    // Здесь нужно реализовать обработку введенных данных и выполнение запроса на сервер
    console.log(searchData);
  };

  const isFormValid = () => {
    // Проверка на корректность введенных данных
    return (
      searchData.inn.length > 0 &&
      searchData.tonality.length > 0 &&
      searchData.documentCount.length > 0 &&
      searchData.startDate.length > 0 &&
      searchData.endDate.length > 0
    );
  };

  return (
    <div className="search-page">
      <div className="search-page__image-container">
        <img src={DocumentImage} alt="Search Page" className="Document__image" />
      </div>
      <div className="search-page__image-container">
        <img src={FolderImage} alt="Search Page" className="Folder__image" />
      </div>
      <div className="search-page__image-container">
        <img src={GroupImage} alt="Search Page" className="Group__image" />
      </div>
      <h1 className="search-page__title">НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ</h1>
      <p>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
      <form>
        <div className="search-page__form-group">
          <label htmlFor="inn" className="search-page__label">ИНН Компани*</label>
          <input
            type="text"
            id="inn"
            name="inn"
            value={searchData.inn}
            onChange={handleInputChange}
            required
            className="search-page__input"
          />
        </div>
        <div className="search-page__form-group">
          <input
            type="checkbox"
            id="completeness"
            name="completeness"
            checked={searchData.completeness}
            onChange={handleInputChange}
            className="search-page__checkbox"
          />
          <label htmlFor="completeness" className="search-page__label">Признак максимальной полноты</label>
        </div>
        <div className="search-page__form-group">
          <input
            type="checkbox"
            id="businessContext"
            name="businessContext"
            checked={searchData.businessContext}
            onChange={handleInputChange}
            className="search-page__checkbox"
          />
          <label htmlFor="businessContext" className="search-page__label">Упоминания в бизнес-контексте</label>
        </div>
        <div className="search-page__form-group">
          <input
            type="checkbox"
            id="mainRole"
            name="mainRole"
            checked={searchData.mainRole}
            onChange={handleInputChange}
            className="search-page__checkbox"
          />
          <label htmlFor="mainRole" className="search-page__label">Главная роль в публикации</label>
        </div>
        <div className="search-page__form-group">
          <label htmlFor="tonality" className="search-page__label">Тональность*</label>
          <select
            id="tonality"
            name="tonality"
            value={searchData.tonality}
            onChange={handleInputChange}
            required
            className="search-page__select"
          >
            <option value="positive">Позитивная</option>
            <option value="negative">Негативная</option>
            <option value="any">Любая</option>
          </select>
        </div>
        <div className="search-page__form-group">
          <input
            type="checkbox"
            id="riskFactors"
            name="riskFactors"
            checked={searchData.riskFactors}
            onChange={handleInputChange}
            className="search-page__checkbox"
          />
          <label htmlFor="riskFactors" className="search-page__label">Публикации только с риск-факторами</label>
        </div>
        <div className="search-page__form-group">
          <input
            type="checkbox"
            id="technicalNews"
            name="technicalNews"
            checked={searchData.technicalNews}
            onChange={handleInputChange}
            className="search-page__checkbox"
          />
          <label htmlFor="technicalNews" className="search-page__label">Включать технические новости рынков</label>
        </div>
        <div className="search-page__form-group">
          <input
            type="checkbox"
            id="announcements"
            name="announcements"
            checked={searchData.announcements}
            onChange={handleInputChange}
            className="search-page__checkbox"
          />
          <label htmlFor="announcements" className="search-page__label">Включать анонсы и календари</label>
        </div>
        <div className="search-page__form-group">
          <input
            type="checkbox"
            id="newsDigests"
            name="newsDigests"
            checked={searchData.newsDigests}
            onChange={handleInputChange}
            className="search-page__checkbox"
          />
          <label htmlFor="newsDigests" className="search-page__label">Включать сводки новостей</label>
        </div>
        <div className="search-page__form-group">
          <label htmlFor="documentCount" className="search-page__label">Количество документов в выдаче*</label>
          <input
            type="number"
            id="documentCount"
            name="documentCount"
            value={searchData.documentCount}
            onChange={handleInputChange}
            required
            className="search-page__input"
          />
        </div>
        <div className="search-page__form-group">
          <label htmlFor="startDate" className="search-page__label">Дата начала поиска*</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={searchData.startDate}
            onChange={handleInputChange}
            required
            className="search-page__input"
          />
        </div>
        <div className="search-page__form-group">
          <label htmlFor="endDate" className="search-page__label">Дата конца поиска*</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={searchData.endDate}
            onChange={handleInputChange}
            required
            className="search-page__input"
          />
        </div>
        <button type="button" onClick={handleSearch} disabled={!isFormValid()} className="search-page__button">
          Поиск
        </button>
      </form>
    </div>
  );
};

export { SearchPage };
