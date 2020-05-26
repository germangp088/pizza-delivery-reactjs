import superagent from "superagent";
import {URL_API} from "../constants/URLConstants";

export const getProducts = async () => {
    try {
        const res = await superagent.get(`${URL_API}product`);
        return res.body.products;
    } catch(err) {
        throw err
    }
}

export const getShippingFee = async () => {
    try {
        const res = await superagent.get(`${URL_API}shipping_fee`);
        return res.body.shipping_fee;
    } catch(err) {
        throw err
    }
}

export const getCurrencies = async () => {
    try {
        const res = await superagent.get(`${URL_API}currency`);
        console.log(res.body.currencies)
        return res.body.currencies;
    } catch(err) {
        throw err
    }
}