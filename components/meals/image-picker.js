'use client';
import { useRef, useState } from 'react';
import customClasses from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({label,name}) {
  const [pickedImage,setPickedImage] = useState();
  const imageInput = useRef();
  function handlePickImage() {
    imageInput.current.click();

  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return <div className={customClasses.picker}>
    <label htmlFor={name} >{label}</label>
    <div className={customClasses.controls}>
      <div className={customClasses.preview}>
        {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && (
          <Image src={pickedImage} alt="the image selected"
          fill
          />
        )}
      </div>
      <input
      className={customClasses.input}
      type="file"
      id={name} 
      accept=".jpg,.png,.jpeg" 
      name={name}
      ref={imageInput}
      onChange={handleImageChange}
      />
      <button 
      className={customClasses.button} 
      type="button"
      onClick={handlePickImage}
      >
        pick an image
      </button>
    </div>
  </div>;
}