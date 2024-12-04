import React from "react";

const TopMenu = () => {
    return(
        <div className="modal-dialog-centered">
            <nav className="navbar navbar-expand-lg navbar-dark myNavParam">
                <a class="navbar-brand" href="#">Заметки</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item "><a className="nav-link" href="#">Задачи</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">Цели</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">Шаблоны</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">Архив</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">Поддержка</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">Поддержать автора</a></li>
                    <li className="nav-item "><a className="nav-link" href="#">Настройки</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default TopMenu;


