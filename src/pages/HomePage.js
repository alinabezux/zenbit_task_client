import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {itemsService} from "../services";
import {GET_ITEMS} from "../redux";


const HomePage = () => {

    const {items} = useSelector(state => state.itemsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        itemsService.getItems().then(({data}) => dispatch({type: GET_ITEMS, payload: data}))
    }, [dispatch])

    return (
        <div className="homepage">
            <div className="homepage-img-container">
                <img
                    className="homepage-img"
                    src="https://s3-alpha-sig.figma.com/img/9bba/e4f7/be8fbaf8d7b80aeb919c8ae858f5037f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RStDFVbYbAzm4NYkoX0hVjSbftRuqqNwT10GwqjRbhg515Sehguxgb~XdF0oYybAewKXluWY4o-6uvDYwZCK4yHaef8uHXDelJj9KkQislZ8mD5aILZLc0nL-B~Xx0TGQpaVQtOtoTJ02xFut2a8ibYXdrly3jiLmy9K8OvepGIqLU5MxtJdNTs2PWZjTlFn2fjxtlhHAPW9s5hG2xYgxJqhQneIvdN-owZ45XzttkFFNyuMc~9tO-fqZcPGLd6fdWyZVU60BlC4zhckfl7~zkKS89tEB-FOnG22ZSG~wvj3086EpjfFC6qNewJGi3c25CJCo9ctH9k6UUL2bIGvng__"
                    alt="background home"
                />
                <div className="homepage-img-content">
                    <h1 className="homepage-title">The chemical negatively charged</h1>
                    <p className="homepage-text">
                        Numerous calculations predict, and experiments confirm, that the force field <br/>
                        reflects the beam, while the mass defect is not formed. The chemical compound is <br/>
                        negatively charged. Twhile the mass defect is
                    </p>
                    <button className="homepage-btn"><a href="#opendeals">Get Started</a></button>
                </div>
            </div>

            <div id="opendeals" className="homepage-opendeals">
                <h3 className="homepage-opendeals-title">Open Deals</h3>
                <div className="homepage-opendeals-cards">
                    {
                        items.map(item =>
                            <div className="homepage-opendeals-card">
                                <img src={item.img} alt={item.title}/>
                                <div className="homepage-opendeals-card-content">
                                    <h3 className="homepage-opendeals-card-content-title">{item.title}</h3>
                                    <div className="homepage-opendeals-card-content-description">
                                        <div>
                                            <p>{item.price}</p>
                                            <p>Yield {item.yield}</p>
                                            <p>Sold {item.sold}</p>
                                        </div>
                                        <div>
                                            <p>Tiket - {item.tiket}</p>
                                            <p>Days left {item.days}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>

    );
};

export {HomePage};