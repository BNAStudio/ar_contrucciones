import './Lands.scss';

interface InputBaseProps<T = HTMLInputElement | HTMLSelectElement> {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<T>) => void;
}

interface SelectProps extends InputBaseProps<HTMLSelectElement> {
    options: { label: string; value: string }[];
}
export const InputText: React.FC<InputBaseProps> = ({ label, name, value, onChange }) => (
    <div className="input">
        <input className="input-field" type="text" name={name} value={value} onChange={onChange} />
        <label>{label}</label>
    </div>
);

export const InputTel: React.FC<InputBaseProps> = ({ label, name, value, onChange }) => (
    <div className="input">
        <input className="input-field" type="tel" name={name} value={value} onChange={onChange} />
        <label>{label}</label>
    </div>
);

export const InputEmail: React.FC<InputBaseProps> = ({ label, name, value, onChange }) => (
    <div className="input">
        <input className="input-field" type="email" name={name} value={value} onChange={onChange} />
        <label>{label}</label>
    </div>
);
export const InputNum: React.FC<InputBaseProps> = ({ label, name, value, onChange }) => (
    <div className="input">
        <input className="input-field" type="number" name={name} value={value} onChange={onChange} />
        <label>{label}</label>
    </div>
);

export const InputSelect: React.FC<SelectProps> = ({ label, name, options, value, onChange }) => (
    <div className="input">
        <label>{label}:</label>
        <select name={name} value={value} onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);
