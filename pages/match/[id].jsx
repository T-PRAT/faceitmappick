import React from 'react'

export default function match({ slug }) {
	return (
		<div>{slug}</div>
	)
}

export async function getStaticProps(context) {
	const slug = context.params.id;

	const res = await fetch("https://open.faceit.com/data/v4/matches/1-493f22c0-5a71-4488-b81e-255ea32df240", { headers: { Authorization: "Bearer " + process.env.FI_API_KEY })
};
console.log(res);
const data = await res.json();

if (!data) {
	return {
		notFound: true,
	};
}
console.log(data);
return {
	props: {
		slug: slug,
		data: data
	}
}
}

export async function getStaticPaths() {

	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking' //indicates the type of fallback
	}
}
