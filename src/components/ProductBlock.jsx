import React from "react";
import small_like_icon from "../assets/img/small_like.svg";
import macbook_png from "../assets/img/mac.png";

function ProductBlock() {
	return (
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
	);
}

export default ProductBlock;
