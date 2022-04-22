import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "7q56kn2q",
	dataset: "production",
	apiVersion: "2022-03-30",
	useCDN: false
})