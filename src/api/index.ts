import Router from "koa-router";
import exampleRouter from "./example";

export const API_ROUTES = new Router({ prefix: "/api" });
API_ROUTES.use(exampleRouter.routes());
API_ROUTES.use(exampleRouter.allowedMethods());
