import home_icon from "./assets/img/home.svg";
import like_icon from "./assets/img/like.svg";
import busket_icon from "./assets/img/busket.svg";
import small_like_icon from "./assets/img/small_like.svg";
import macbook_png from "./assets/img/mac.png";
import "./App.css";

function App() {
	return (
		<>
			<div className="wrapper-header">
				<header className="header">
					<div className="header__logo">
						<p className="logo">AppleTech</p>
					</div>
					<div className="header__menu">
						<ul className="list header__list">
							<li className="line header__line">
								<a href="#" className="link link__active">
									{" "}
									Home{" "}
								</a>
								<img className="link__img" src={home_icon} alt="LOGO:Home" />
							</li>
							<li className="line header__line">
								<a href="#" className="link">
									{" "}
									Список желаний{" "}
								</a>
								<img className="link__img" src={like_icon} alt="LOGO: Like" />
							</li>
							<li className="line header__line">
								<a href="#" className="link">
									{" "}
									Корзина{" "}
								</a>
								<img className="link__img" src={busket_icon} alt="LOGO: Busket" />
							</li>
						</ul>
					</div>
				</header>
			</div>
			<div className="wrapper-content">
				<div className="content__goods">
					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>

					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>

					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>

					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>

					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>

					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>

					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>

					<div className="content__block">
						<img className="block__like_btn" src={small_like_icon} alt="like" />
						<img className="block__main_img" src={macbook_png} alt="macbook" />
						<p className="block__description">
							Ноутбук Apple MacBook Pro 13" M1 256GB 2020 (MYDA2) Silver
						</p>
						<div className="content__block_buy">
							<div className="block__price">
								<p className="discount">97000 руб</p>
								<p className="price">85000 руб</p>
							</div>
							<div>
								<button className="buy_btn">Купить</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
