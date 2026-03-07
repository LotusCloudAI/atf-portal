import i18n from "../../i18n/config";

const LanguageSwitcher = () => {

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="flex gap-3">
      <button onClick={() => changeLanguage("en")}>
        EN
      </button>

      <button onClick={() => changeLanguage("te")}>
        తెలుగు
      </button>
    </div>
  );
};

export default LanguageSwitcher;