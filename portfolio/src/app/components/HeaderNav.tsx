function HeaderNav() {
  return (
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
  );
}

export default HeaderNav;
