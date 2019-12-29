import React, { useState } from 'react'
import * as S from './FileUploadInput.styles'
import { trimString } from '../../../assets/helpers'

interface Props {
    setFieldValue: (field: string, value: any | undefined) => void
}


const FileUploadInput: React.FC<Props> = ({ setFieldValue }) => {
    const [uploadedFile, setUploadedFile] = useState();

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];

            setUploadedFile(file);
            setFieldValue('placeImage', file);
        }
    };


    console.log(trimString("KNOPERS2555.jpg", 5));

    return (
        <>
            <S.Label>Dodaj obrazek...
                <S.Input
                    id="file" name="file"
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={onChangeHandler}
                    className="form-control" />
                {uploadedFile &&
                    <>
                        <S.Image src={URL.createObjectURL(uploadedFile)} />
                        <S.FileTitle>{uploadedFile.name}</S.FileTitle>
                        <div>DELETE</div>
                    </>
                }
            </S.Label>

        </>
    )
}

export default FileUploadInput
