import React, { useState, useEffect } from 'react'
import {
	Formik,
	FormikActions,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from 'formik'

interface Props {}

interface MyFormValues {
	street?: string
	city?: string
	number?: number | null
	placeType?: string
	phoneNumber?: number | null
	image?: string
	description?: string
	lat?: number | null
	long?: number | null
}

const initialValues = {
	street: '',
	city: '',
	number: null,
	placeType: '',
	phoneNumber: null,
	image: '',
	description: '',
	lat: null,
	long: null,
}

const AddPlace: React.FC<Props> = () => {
	const [count, setCount] = useState()

	useEffect(() => {
		console.log(count)
	}, [count])

	return (
		<div>
			<h1>My Example</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(
					values: MyFormValues,
					actions: FormikActions<MyFormValues>,
				) => {
					console.log({ values, actions })
					alert(JSON.stringify(values, null, 2))
					actions.setSubmitting(false)
				}}
				render={(formikBag: FormikProps<MyFormValues>) => (
					<Form>
						<Field
							name="firstName"
							render={({
								field,
								form,
							}: FieldProps<MyFormValues>) => (
								<div>
									<input
										type="text"
										{...field}
										placeholder="First Name"
									/>
								</div>
							)}
						/>
					</Form>
				)}
			/>
		</div>
	)
}

export default AddPlace
