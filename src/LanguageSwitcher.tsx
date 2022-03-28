import React from 'react';
import { useIntl } from 'react-intl';

interface LanguageSwitcherProps {
  onChangeLanguage?: (locale: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  onChangeLanguage,
}) => {
  const intl = useIntl();
  return (
    <div className="select">
      <select
        value={intl.locale}
        onChange={(e) => {
          if (onChangeLanguage) {
            onChangeLanguage(e.target.value);
          }
        }}
      >
        <option value="cs">Česky</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

// const Button = ({ children }) => {
//   <div style={{ fontSize: '20px' }}>{children}</div>;
// };
// <Button>
//   <span>ahoj</span>
// </Button>;
