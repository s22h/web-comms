import * as fastify from "fastify";
import * as fastifyStatic from "fastify-static";
import { Server, IncomingMessage, ServerResponse } from "http";
import * as fs from "fs";
import * as path from "path";

import * as dotenv from "dotenv";

dotenv.config();

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});

server.register(fastifyStatic, {
	root: path.join(__dirname, "../web")
});

const run = async () => {
	try {
		let host = process.env.LISTEN || "127.0.0.1";
		let port = parseInt(process.env.PORT) || 3000;

		await server.listen({
			port: port,
			host: host
		});

		console.log(`Server listening on port ${port}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}

run();
