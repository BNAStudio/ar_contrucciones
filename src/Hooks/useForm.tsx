import { useState } from 'react';

const useForm = <T extends object>(initialState: T) => {
    const [form, setForm] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
        setForm({
            ...form,
            [e.target.name]: value,
        });
    };

    console.log(form)

    return { form, handleChange };
};

export default useForm;