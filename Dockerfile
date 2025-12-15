FROM oven/bun:canary-slim AS dependency

WORKDIR /app
COPY package.json .
COPY bun.lock .
RUN bun install

FROM oven/bun:canary-slim AS builder
WORKDIR /app
COPY . .
COPY --from=dependency /app/node_modules ./node_modules
RUN bun run build

FROM oven/bun:canary-slim AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/.next ./.next
CMD ["bun", "run", "server.js"]
# CMD ["npm", "start"]
