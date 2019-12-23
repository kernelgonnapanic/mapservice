import React from 'react'


interface Props {
    setFieldValue?: (field: string, value: any | undefined) => void
}


const FileUploadInput: React.FC<Props> = () => {


    // interface HTMLInputEvent extends Event {
    //     target: HTMLInputElement & EventTarget;
    // }

    // const onChangeHandler = (event: React.ChangeEvent<HTMLInputEvent>): void => {

    //     console.log(event.target);


    // };


    return (
        <input
            id="file" name="file"
            type="file"
            // onChange={onChangeHandler} 
            className="form-control" />
    )
}

export default FileUploadInput
