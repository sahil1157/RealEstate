import React, { useState } from 'react';
import Header from '../BuyComponent/HeaderFile/Header';
import Head from './Head';
import OutsideBox from './OutsideBox';
import { userContext } from '../ContextAPI/CreateContext';
import Details from './Details/Details';

const HeadArea = () => {
  const headerProps = {
    name: 'Calculator',
    img: '/Headerimg/black.avif'
  };

  const [userInpValues, setUserInputValues] = useState({
    Ropani: '',
    Aana: '',
    Paisa: '',
    Daam: '',
    Bigha: '',
    Kattha: '',
    Dhur: '',
    SquareFeet: '',
    SquareMeter: ''
  });

  

  const getuserInputValues = (e, identifier) => {
    const getUserInput = parseFloat(e.target.value) || '';
    setUserInputValues((prev) => {
      const getItems = { ...prev, [identifier]: getUserInput }

      switch (identifier) {
        case 'Ropani':
          getItems.Kattha = (parseFloat(getUserInput * 1.50) || 0).toFixed(2).toString()
          getItems.Aana = (parseFloat(getUserInput * 16) || 0).toFixed(2).toString()
          getItems.Dhur = (parseFloat(getUserInput * 30.05) || 0).toFixed(2).toString()
          getItems.SquareFeet = (parseFloat(getUserInput * 5476) || 0).toFixed(2).toString()
          getItems.SquareMeter = (parseFloat(getUserInput * 508.72) || 0).toFixed(2).toString()
          break;

        case 'Aana':
          getItems.Dhur = (parseFloat(getUserInput * 1.88) + parseFloat(getItems.Ropani * 10.05) || 0).toFixed(2).toString()
          getItems.SquareMeter = (parseFloat(getUserInput * 31.80) + parseFloat(getItems.Ropani * 508.72) || 0).toFixed(2).toString()
          getItems.SquareFeet = (parseFloat(getUserInput * 342.25) + parseFloat(getItems.Ropani * 5476) || 0).toFixed(2).toString()
          break;

        case 'Paisa':
          getItems.Daam = (parseFloat(getUserInput * 4) || 0).toString()
          getItems.SquareMeter = (parseFloat(getUserInput * 7.95) + parseFloat(getItems.Ropani * 508.72 + getItems.Aana * 31.80) || 0).toFixed(2).toString()
          break;

        case 'Bigha':
          getItems.Ropani = (parseFloat(getUserInput * 13.31) || 0).toFixed(2).toString()
          getItems.Aana = (parseFloat(getUserInput * 5) || 0).toFixed(2).toString()
          getItems.Paisa = (parseFloat(getUserInput * 1) || 0).toFixed(2).toString()
          getItems.Daam = (parseFloat(getUserInput * 1.25) || 0).toFixed(2).toString()
          getItems.SquareFeet = (parseFloat(getUserInput * 72900) || 0).toFixed(2).toString()
          getItems.SquareMeter = (parseFloat(getUserInput * 6772.63) || 0).toFixed(2).toString()
          break

        case 'Dhur':
          getItems.Ropani = (parseFloat(getUserInput * 0.033) || 0).toFixed(2).toString()
          break;

        case 'Kattha':
          getItems.Dhur = (parseFloat(getUserInput * 20) || 0).toFixed(2).toString()
          break

        default:
          break
      }

      return getItems
    });
  };



  return (
    <userContext.Provider value={{
      userInpValues,
      getuserInputValues
    }}>
      <Header {...headerProps} />
      <Head />
      <OutsideBox />
      <Details/>
    </userContext.Provider>
  );
};

export default HeadArea;