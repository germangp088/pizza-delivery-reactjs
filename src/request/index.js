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
        return res.body.currencies;
    } catch(err) {
        throw err
    }
}

export const getHistory = async (ip) => {
    try {
        const res = await superagent.get(`${URL_API}order/history/${ip}`);
        return res.body;
    } catch(err) {
        throw err
    }
}

export const getIP = async () => {
    try {
        const res = await superagent.get('https://api.ipify.org?format=text');
        return res.text;
    } catch(err) {
        throw err
    }
}

export const postOrder = async (order) => {
    try {
        const res = await superagent.post(`${URL_API}order`).send(order);
        return res.body;
    } catch(err) {
        throw err;
    }
}