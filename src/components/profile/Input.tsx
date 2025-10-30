interface InputProps {
    value: string;
    name: string;
    isEditing: boolean;
    type: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, isEditing, value, name, handleInputChange }: InputProps) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            disabled={!isEditing}
            onChange={handleInputChange}
            className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white bg-opacity-60 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        />
    )
}