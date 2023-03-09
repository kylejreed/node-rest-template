import db from "@db";
import Router from "koa-router";
import { getExample } from "@lib/example";

const router = new Router({ prefix: "/example" });

router.get("/", async (ctx) => {
  ctx.body = await getExample();
});

export default router;
