import home_icon from "./assets/img/home.svg";
import like_icon from "./assets/img/like.svg";
import busket_icon from "./assets/img/busket.svg";
import ProductBlock from "./components/ProductBlock";
import "./App.css";

function App(props) {
	return (
		<>
			<div className="wrapper-header">
				<header className="header">
					<div className="header__logo">
						<p className="logo">{props.logo}</p>
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
					<ProductBlock price={8500} discount={9500}></ProductBlock>
					<ProductBlock price={8500} discount={9500}></ProductBlock>
					<ProductBlock price={8500} discount={9500}></ProductBlock>
					<ProductBlock price={8500} discount={9500}></ProductBlock>
					<ProductBlock price={8500} discount={9500}></ProductBlock>
					<ProductBlock price={8500} discount={9500}></ProductBlock>
					<ProductBlock price={8500} discount={9500}></ProductBlock>
					<ProductBlock price={8500} discount={9500}></ProductBlock>
				</div>
			</div>
		</>
	);
}

export default App;
