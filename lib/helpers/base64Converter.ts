const getBase64 = (file: File, setImage: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setImage(reader.result);
    };
};

export default getBase64;
