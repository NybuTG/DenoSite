FROM denoland/deno:latest as base

WORKDIR /backend

USER deno

COPY . ./

RUN deno cache main.ts
CMD ["run", "--allow-all", "main.ts"]
