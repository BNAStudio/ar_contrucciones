import useForm from "../../Hooks/useForm";
import { FillBtn } from "../Buttons/Buttons";
import { InputEmail, InputTel, InputText, InputNum } from "./Inputs";

interface FormValues {
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    oferente: string;
    tipoNegocio: string;
    ciudad: string;
    direccion: string;
    areaAproximada: number;
    valorTerreno: number;
    valorM2: number;
    mensaje: string;
}

const Form: React.FC = () => {
    const initialState: FormValues = {
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        oferente: '',
        tipoNegocio: '',
        ciudad: '',
        direccion: '',
        areaAproximada: 0,
        valorTerreno: 0,
        valorM2: 0,
        mensaje: ''
    };

    const { form, handleChange } = useForm<FormValues>(initialState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <form className="lands-form" onSubmit={handleSubmit}>
            <section className="c-form-content">
                <InputText label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} />
                <InputText label="Apellido" name="apellido" value={form.apellido} onChange={handleChange} />
                <InputTel label="Teléfono" name="telefono" value={form.telefono} onChange={handleChange} />
                <InputEmail label="Email" name="email" value={form.email} onChange={handleChange} />
                <InputText label="Ciudad" name="ciudad" value={form.ciudad} onChange={handleChange} />
                <InputText label="Dirección" name="direccion" value={form.direccion} onChange={handleChange} />
                <InputNum label="Valor m2" name="valorM2" value={form.valorM2.toString()} onChange={handleChange} />
                <InputNum label="Valor terrerno" name="valorTerreno" value={form.valorTerreno.toString()} onChange={handleChange} />

            </section>
                <FillBtn text="Enviar" />
        </form>
    );
};

export default Form;