export const phoneRegExp = /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/

function buildFormData(formData, data, parentKey) {
	if (
		data &&
		typeof data === 'object' &&
		!(data instanceof Date) &&
		!(data instanceof File)
	) {
		Object.keys(data).forEach((key) => {
			buildFormData(
				formData,
				data[key],
				parentKey ? `${parentKey}[${key}]` : key,
			)
		})
	} else {
		const value = data == null ? '' : data

		formData.append(parentKey, value)
	}
}

export function jsonToFormData(data) {
	const formData = new FormData()

	buildFormData(formData, data)

	return formData
}

export function truncString(string, n) {
	if (string.length > n) {
		const splitedFileNameAndDot = string.split(/\.(?=[^\.]+$)/)
		const shortFileTitle = splitedFileNameAndDot[0].substr(0, n)
		const fileExtension = splitedFileNameAndDot[1]

		return `${shortFileTitle}(...).${fileExtension}`
	}

	return string
}
