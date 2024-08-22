import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import englandFlag from '../assets/england_flag.png';
import spainFlag from '../assets/spain_flag.png';
import portugalFlag from '../assets/portugal_flag.png';
import { boneWhite, marineBlue, mintGreen } from '../constants/colors';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // Track the current selected language
  const [currentLanguage, setCurrentLanguage] = useState({
    code: 'en',
    label: 'English',
    flag: englandFlag,
  });

  const changeLanguage = (lng, label, flag) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage({ code: lng, label, flag });
  };

  return (
    <DropdownButton
      id="dropdown-language-selector"
      title={
        <span style={{ color: boneWhite }}>
          <img
            src={currentLanguage.flag}
            alt={currentLanguage.label}
            width="20"
            height="20"
            className="me-2"
          />
          {currentLanguage.label}
        </span>
      }
      variant="outline-dark"
      style={{
        borderRadius: '10px',
        backgroundColor: mintGreen,
        borderColor: mintGreen,
      }}
    >
      <Dropdown.Item
        onClick={() => changeLanguage('en', 'English', englandFlag)}
        style={{ color: marineBlue }}
      >
        <img
          src={englandFlag}
          alt="English"
          width="20"
          height="20"
          className="me-2"
        />
        English
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => changeLanguage('es', 'Español', spainFlag)}
        style={{ color: marineBlue }}
      >
        <img
          src={spainFlag}
          alt="Español"
          width="20"
          height="20"
          className="me-2"
        />
        Español
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => changeLanguage('pt', 'Português', portugalFlag)}
        style={{ color: marineBlue }}
      >
        <img
          src={portugalFlag}
          alt="Português"
          width="20"
          height="20"
          className="me-2"
        />
        Português
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageSelector;
