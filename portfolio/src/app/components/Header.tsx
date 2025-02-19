function Header() {
  return (
    <header className="header">
      <a className="header__link" href="">
        <img className="header__image" src="/images/logo.png" alt="logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="/exp">
              Опыт
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/works">
              Работы
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/achievements">
              Награды
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/contact">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
