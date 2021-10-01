import { useForm } from "react-hook-form";

const NewCardForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <form class="NewCardForm" onSubmit={handleSubmit(onSubmit)}>
            <p class="input-holder">
                <label for="personName" value="ddd">
                    Imie i nazwisko:
                </label>
                <input
                    type="text"
                    name="personName"
                    id="personName"
                    {...register("personName")}
                />
            </p>
            <p class="input-holder">
                <label for="person">Kwestia:</label>
                <textarea
                    type="textarea"
                    name="personQuote"
                    id="personQuote"
                    rows="3"
                    {...register("personQuote")}
                />
            </p>
            <p class="input-holder">
                <input
                    type="submit"
                    name="submit"
                    id="newCardSubmit"
                    class="submit"
                    value="Zatwierdź"
                />
            </p>
        </form>
    );
};

export default NewCardForm;
