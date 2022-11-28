import { AppRoutes } from "src/app/shared/data-access/routes/routes";

export interface AppInterface {
    id: string,
    name: string,
    link: AppRoutes,
    isExternal: boolean,
    tags?: string[],
    date?: string,
}