import Koa from "koa";
import { API_ROUTES } from "./api";

const app = new Koa();

app.use(API_ROUTES.routes());
app.use(API_ROUTES.allowedMethods());

export default app;
