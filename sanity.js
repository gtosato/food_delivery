import { createClient } from "@sanity/client";
import urlBuilder from "@sanity/image-url";

const client = createClient({
	projectId: "axd4xdau",
	dataset: "production",
	useCdn: true,
	apiVersion: "2021-10-21",
});

const builder = urlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;
