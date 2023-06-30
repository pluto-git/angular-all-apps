import { AppRoutes } from "src/app/shared/data-access/routes/routes";
import { AppInterface } from "./interfaces/app.interface";


export const myApps: AppInterface[] = [
    {
        id: "1", name: 'Draw0. A full-stack drawing application', link: AppRoutes.draw0, isExternal: true
    },
    {
        id: "2", name: 'Todos with RxJs mostly', link: AppRoutes.todos, isExternal: false
    },

    {
        id: "3", name: 'Currency conversion for EUR, USD, UAH', link: AppRoutes.currencyConverter, isExternal: false
    },


]
