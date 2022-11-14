import { AppRoutes } from "src/app/shared/data-access/routes/routes";

export interface AppInterface {
    name: string,
    link: AppRoutes,
    tags?: string[],
    date?: string,
}