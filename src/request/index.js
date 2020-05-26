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