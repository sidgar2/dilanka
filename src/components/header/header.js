function Header() {
    return (
        <div className="Header">
          <p className="header-logo-text">Простір твоїх<br/>можливостей</p>
          <img className="header-image" src={require("../../assets/images/2-3.jpg")} alt=""/>
          <p className="header-text">
            Продаж земельної ділянки
          </p>
        </div>
    );
}

export default Header;
