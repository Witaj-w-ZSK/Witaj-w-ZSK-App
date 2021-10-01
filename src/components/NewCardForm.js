import { useForm } from "react-hook-form";
import { useState } from "react";

const NewCardForm = () => {
    const { register, handleSubmit } = useForm();
    const { selectedImage, setSelectedImage } = useState();
    const onSubmit = (data) => console.log(data);
    const { test, setTest } = useState("duppapp");
    const imageChange = (event) => {
        console.log("image change");
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
    };

    return (
        <form className="NewCardForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>{test}</h1>
            <p className="input-holder">
                <label htmlFor="personName" value="ddd">
                    Imie i nazwisko:
                </label>
                <input
                    type="text"
                    name="personName"
                    id="personName"
                    {...register("personName", { required: true, max: 25 })}
                />
            </p>
            <p className="input-holder">
                <label htmlFor="person">Kwestia:</label>
                <textarea
                    type="textarea"
                    name="personQuote"
                    id="personQuote"
                    rows="3"
                    {...register("personQuote", {
                        required: true,
                        max: 100,
                    })}
                />
            </p>
            <p className="input-holder">
                <label htmlFor="image">Obraz:</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    accept=".png,.jpg,.jpeg,.svg"
                    onChange={() => console.log("dddd")}
                    {...register("image", {
                        required: true,
                        validate: (files) => {
                            return files.length === 1;
                        },
                    })}
                />
                {selectedImage && (
                    <div className="image-holder">
                        oooooo
                        <img
                            src={URL.createOnjectURL(selectedImage)}
                            alt="imagePreviev"
                        />
                    </div>
                )}
            </p>
            <p className="input-holder">
                <input
                    type="submit"
                    name="submit"
                    id="newCardSubmit"
                    className="submit"
                    value="Zatwierdź"
                />
            </p>
        </form>
    );
};

export default NewCardForm;
