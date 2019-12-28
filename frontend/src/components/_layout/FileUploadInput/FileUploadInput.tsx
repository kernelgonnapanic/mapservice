import React, { useState } from 'react'
import * as S from './FileUploadInput.styles'

interface Props {
    setFieldValue: (field: string, value: any | undefined) => void
}


const FileUploadInput: React.FC<Props> = ({ setFieldValue }) => {
    const [filePreviewUrl, setUploadedFilePreviewUrl] = useState();


    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];
            const imageUrl = URL.createObjectURL(e.currentTarget.files[0]);

            setUploadedFilePreviewUrl(imageUrl);
            setFieldValue('placeImage', file);
        }
    };

    return (
        <>
            <input
                id="file" name="file"
                type="file"
                accept="image/*"
                onChange={onChangeHandler}
                className="form-control" />
            {filePreviewUrl && <S.Image src={filePreviewUrl} />}
        </>
    )
}

export default FileUploadInput
