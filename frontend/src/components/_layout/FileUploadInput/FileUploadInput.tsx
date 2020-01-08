import React, { useRef, useState } from 'react';
import { Trash } from 'react-feather';
import { truncString } from '../../../assets/helpers';
import * as S from './FileUploadInput.styles';

interface Props {
    setFieldValue: (field: string, value: any | undefined) => void
}

const FileUploadInput: React.FC<Props> = ({ setFieldValue }) => {
    const [uploadedFile, setUploadedFile] = useState();
    const fileInputRef = useRef<HTMLInputElement>(null!);

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {




        if (e.currentTarget.files && e.currentTarget.files.length) {
            const file = e.currentTarget.files[0];

            setUploadedFile(file);
            setFieldValue('placeImage', file);

        }
    };

    const deleteInputData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();

        fileInputRef.current.value = ""
        setUploadedFile('');
    }

    return (
        <>
            <S.Label>Dodaj obrazek...
                <S.Input
                    id="file" name="file"
                    type="file"
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={onChangeHandler}
                    className="form-control"
                    ref={fileInputRef}
                />

                {uploadedFile &&
                    <>
                        <S.Image src={URL.createObjectURL(uploadedFile)} />
                        <S.FileTitle>
                            {truncString(uploadedFile.name, 25)}
                        </S.FileTitle>
                        <S.Button onClick={deleteInputData}><Trash size={15} />Usuń</S.Button>
                    </>
                }
            </S.Label>

        </>
    )
}

export default FileUploadInput
