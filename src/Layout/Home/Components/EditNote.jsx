const EditNote = () => {
    return(
    <div className="container mt-5">
        <h2>Редактирование*</h2>
        <h3>{"Тест"}</h3><br/>
        <div>
            <p>{"Описание"}</p>
        </div>
        <div>
            <div className="btn danger">
                Удалить
            </div>
            <div className="btn">
                Обновить
            </div>
            <div className="btn">
                Назад
            </div>
        </div>
    </div>
    );
}

export default EditNote;