import { AppRoutes } from "src/app/shared/data-access/routes/routes";
import { AppInterface } from "./interfaces/app.interface";


export const myApps: AppInterface[] = [
    {
        name: 'Todos with RxJs mostly', link: AppRoutes.todos
    },
    {
        name: 'Currency conversion for EUR, USD, UAH', link: AppRoutes.currencyConverter
    },
    {
        name: 'Todos MVC with RxJs mostly', link: AppRoutes.appMenu
    },
    {
        name: 'Todos MVC with RxJs mostly', link: AppRoutes.appMenu
    },
    {
        name: 'Todos MVC with RxJs mostly', link: AppRoutes.appMenu
    },
    
]