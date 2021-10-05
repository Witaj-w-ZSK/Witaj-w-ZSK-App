import Card from "./Card";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const NewCardForm = () => {
    //get all threads on render
    // useEffect(() => {
    //     let fs = require("fs");
    //     let threads = fs.readdirSync(`${process.env.PUBLIC_URL}/threads`);
    //     console.log(threads);
    // }, []);

    const { register, handleSubmit, getValues, watch } = useForm({
        defaultValues: {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
        },
    });
    const [selectedImage, setSelectedImage] = useState();
    const onSubmit = (data) => console.log(data);
    const watchPerson = watch("person");
    const watchQuote = watch("quote");
    const watchImage = watch("image", []);

    return (
        <>
            <div className="form-holder">
                <form className="NewCardForm" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Dodaj kartę:</h1>
                    <p className="input-holder">
                        <label htmlFor="person" value="ddd">
                            Imie i nazwisko:
                        </label>
                        <input
                            type="text"
                            name="person"
                            id="person"
                            {...register("person", {
                                required: true,
                                max: 25,
                            })}
                        />
                    </p>
                    <p className="input-holder">
                        <label htmlFor="quote">Kwestia:</label>
                        <textarea
                            type="textarea"
                            name="quote"
                            id="quote"
                            rows="3"
                            {...register("quote", {
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
                            accept="image"
                            {...register("image", {
                                required: true,
                                validate: (files) => {
                                    return files.length === 1;
                                },
                            })}
                        />
                    </p>
                    <div className="statistics-input-holder">
                        <p className="input-holder">
                            <label htmlFor="a">aaa</label>
                            <input
                                type="number"
                                step="0.05"
                                max="0.1"
                                min="-0.1"
                                name=""
                                id=""
                                {...register("a", { required: true })}
                            />
                        </p>
                        <p className="input-holder">
                            <label htmlFor="b">bbbb</label>
                            <input
                                type="number"
                                step="0.05"
                                max="0.1"
                                min="-0.1"
                                name=""
                                id=""
                                {...register("b", { required: true })}
                            />
                        </p>
                        <p className="input-holder">
                            <label htmlFor="c">cccccc</label>
                            <input
                                type="number"
                                step="0.05"
                                max="0.1"
                                min="-0.1"
                                name=""
                                id=""
                                {...register("c", { required: true })}
                            />
                        </p>
                        <p className="input-holder">
                            <label htmlFor="d">ddddddd</label>
                            <input
                                type="number"
                                step="0.05"
                                max="0.1"
                                min="-0.1"
                                name=""
                                id=""
                                {...register("d", { required: true })}
                            />
                        </p>
                    </div>
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
            </div>
            <Card
                person={watchPerson ? watchPerson : "[Wstaw imię]"}
                quote={watchQuote ? watchQuote : "[Wstaw kwestię]"}
                image={
                    watchImage.length
                        ? URL.createObjectURL(watchImage[0])
                        : `${process.env.PUBLIC_URL}/images/uczen_ZSK.png`
                }
            />
        </>
    );
};

export default NewCardForm;
