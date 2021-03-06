declare module "rdf-canonize" {
	type Term = {
		termType: string
		value: string
		language?: string
		datatype?: Term
	}
	type Quad = { subject: Term; predicate: Term; object: Term; graph: Term }
	function canonize(
		dataset: Quad[],
		options: { algorithm: "URDNA2015" }
	): Promise<string>
}
