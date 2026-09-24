import { createFileRoute } from "@tanstack/react-router";
import html from "@/pages-html/kit.html?raw";

export const Route = createFileRoute("/kit/")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
