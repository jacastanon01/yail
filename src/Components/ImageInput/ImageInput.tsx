import { ImageUtils } from "Utils";
import classNames from "classnames";
import { FC, useRef } from "react";

import Button from "Components/Button";
import { IconImage } from "Components/Icons/IconImage";
import { InputError } from "Components/Inputs";

import { IImageInputProps } from "./types";

const ImageInput: FC<IImageInputProps> = ({
  id,
  accept,
  onChange,
  className,
  maxFileSize,
  onFileLoaded,
  allowedMimeTypes,
  onValidationError,
  compression,
  inputWrapperClassName,
  label,
  error
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const [file] = e.target.files;
    const { name: fileName, type: mimeType } = file;
    const { imageValidationError, isValidImage } = await ImageUtils.validate(
      file,
      maxFileSize,
      allowedMimeTypes
    );

    if (!isValidImage) {
      onValidationError?.(imageValidationError);

      onChange({ file: null, error: imageValidationError });
      return;
    }

    onFileLoaded({
      file: { blob: file, fileName, mimeType },
      base64: !compression?.enabled
        ? await readFileAsDataURL(file)
        : await ImageUtils.compress(file, compression),
      fileName,
      mimeType
    });
  };

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read file."));
      reader.readAsDataURL(file);
    });
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={classNames(inputWrapperClassName)}>
      <label>
        <input
          ref={fileInputRef}
          id={id}
          type='file'
          accept={accept}
          onChange={handleSelect}
          className={classNames("hidden", className)}
        />

        <Button type='button' onClick={handleButtonClick} outlined>
          <div className='flex items-center justify-center gap-1'>
            <IconImage className='w-6' /> {label}
          </div>
        </Button>
      </label>
      {error && <InputError error={error} />}
    </div>
  );
};

export default ImageInput;
