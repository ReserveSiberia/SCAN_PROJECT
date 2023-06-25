import React, { useState } from 'react';
import styles from './SearchPage.module.css';
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
    <main className={styles.searchPage}>
       <div className={styles.imageContainer}>
        <img src={DocumentImage} alt="Search Page" className={styles.imageDoc} />
        <img src={FolderImage} alt="Search Page" className={styles.imageFol} />
        <img src={GroupImage} alt="Search Page" className={styles.imageGro} />
      </div>
      <h1 className={styles.title}>НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ</h1>
      <p>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</p>
        <form className={styles.form}>
          <div className={styles.left}>
            <label htmlFor="inn" className={styles.label}>ИНН Компани*</label>
            <input
              type="text"
              id="inn"
              name="inn"
              value={searchData.inn}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <label htmlFor="documentCount" className={styles.label}>Количество документов в выдаче*</label>
            <input
              type="number"
              id="documentCount"
              name="documentCount"
              value={searchData.documentCount}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <label htmlFor="startDate" className={styles.label}>Дата начала поиска*</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={searchData.startDate}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <label htmlFor="endDate" className={styles.label}>Дата конца поиска*</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={searchData.endDate}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            </div>
          <div className={styles.right}>
            <label htmlFor="completeness" className={styles.label}>Признак максимальной полноты</label>
            <input
              type="checkbox"
              id="businessContext"
              name="businessContext"
              checked={searchData.businessContext}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <label htmlFor="businessContext" className={styles.label}>Упоминания в бизнес-контексте</label>
            <input
              type="checkbox"
              id="mainRole"
              name="mainRole"
              checked={searchData.mainRole}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <label htmlFor="mainRole" className={styles.label}>Главная роль в публикации</label>
            <input
              type="checkbox"
              id="completeness"
              name="completeness"
              checked={searchData.completeness}
              onChange={handleInputChange}
              className={styles.checkbox}
              />
            <label htmlFor="tonality" className={styles.label}>Тональность*</label>
            <select
              id="tonality"
              name="tonality"
              value={searchData.tonality}
              onChange={handleInputChange}
              required
              className={styles.select}
            >
              <option value="positive">Позитивная</option>
              <option value="negative">Негативная</option>
              <option value="any">Любая</option>
            </select>
            <input
              type="checkbox"
              id="riskFactors"
              name="riskFactors"
              checked={searchData.riskFactors}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <label htmlFor="riskFactors" className={styles.label}>Публикации только с риск-факторами</label>

            <input
              type="checkbox"
              id="technicalNews"
              name="technicalNews"
              checked={searchData.technicalNews}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <label htmlFor="technicalNews" className={styles.label}>Включать технические новости рынков</label>

            <input
              type="checkbox"
              id="announcements"
              name="announcements"
              checked={searchData.announcements}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <label htmlFor="announcements" className={styles.label}>Включать анонсы и календари</label>
  
            <input
              type="checkbox"
              id="newsDigests"
              name="newsDigests"
              checked={searchData.newsDigests}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <label htmlFor="newsDigests" className={styles.label}>Включать сводки новостей</label>
            </div> 
                <button type="button" onClick={handleSearch} disabled={!isFormValid()} className={styles.submitButton}>
            Поиск
            {!isFormValid() && (
            <div className={styles.error}>Пожалуйста, заполните все поля формы.</div>
            )}
          </button>
        </form>
      </main>
    );
  };

export { SearchPage };
