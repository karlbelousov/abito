import { useOutletContext, useParams } from "react-router-dom";

export const Product = () => {
  const { products } = useOutletContext();
  const { id } = useParams();
  
  const findProduct = products.find((p) => p.id === +id);

  return (
    <section className="content">
      <div className="container">
        {findProduct ? (
          <div className="content-box">
            <div className="content-product">
              <div className="content-product__left">
                <h3 className="content-product__title">{findProduct.title}</h3>
                <img
                  className="content-product__img"
                  src={findProduct.img}
                  alt={findProduct.title}
                />
                <p className="content-product__text">
                  {findProduct.description}
                </p>
              </div>
              <div className="content-product__right">
                <h3 className="content-product__price">{findProduct.price}</h3>
                <button className="btn btn-primary btn-large">
                  Показать телефон
                </button>
              </div>
            </div>
            <div className="content-side">
              <h3 className="content-side__title">Сервисы и услуги</h3>
              <div className="content-side__box">
                <div className="content-side__list">
                  <br />
                  <div className="content-side__list-item">
                    <img
                      src="/image/side-info-1.svg"
                      alt="side-info-1"
                      className="content-side__list-item-img"
                    />
                    <h4 className="content-side__list-item-title">Доставка</h4>
                    <p className="content-side__list-item-text">
                      Проверка при получении и возможность бесплатно вернуть
                      товар
                    </p>
                  </div>
                  <div className="content-side__list-item">
                    <img
                      src="/image/side-info-2.svg"
                      alt="side-info-2"
                      className="content-side__list-item-img"
                    />
                    <h4 className="content-side__list-item-title">Автотека</h4>
                    <p className="content-side__list-item-text">
                      Отчёт с историей авто: пробег, владельцы, сведения о
                      залоге, ДТП и ремонтах
                    </p>
                  </div>
                  <div className="content-side__list-item">
                    <img
                      src="/image/side-info-3.svg"
                      alt="side-info-3"
                      className="content-side__list-item-img"
                    />
                    <h4 className="content-side__list-item-title">
                      Онлайн-бронирование жилья
                    </h4>
                    <p className="content-side__list-item-text">
                      Посуточная аренда квартир и домов: большой выбор вариантов
                      для поездок по России
                    </p>
                  </div>
                </div>
                <div className="content-side__footer">
                  <a href="#!" className="content-side__footer-item">
                    © ООО «Абито», 2011–2021
                  </a>
                  <a href="#!" className="content-side__footer-item">
                    Политика конфиденциальности
                  </a>
                  <p className="content-side__footer-item">Обработка данных</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2>Такого товара не существует!</h2>
        )}
      </div>
    </section>
  );
};
