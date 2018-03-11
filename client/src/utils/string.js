/**
 * Converts a string to titlecase. Words without separation needs to have _ with them
 * item => Item
 * item_details => Item Details
 * ITEM DETAILS => Item Details
 *
 * @param {string} [value='']
 */
export const convertToTitleCase = (value = "") =>
	(value || "").replace(/\w\S*/g, txt => {
		const Pieces =
			(txt.indexOf("_") > -1 &&
				txt.split("_").map(piece => convertToTitleCase(piece))) ||
			[]

		return Pieces.length > 0
			? Pieces.join("")
			: txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
