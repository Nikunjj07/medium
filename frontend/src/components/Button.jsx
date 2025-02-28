export const Button = ({label, onclick}) => {
    return <div>
        <button className="min-w-80 bg-black text-white py-1 px-2 mt-3 rounded" onClick={onclick}>{label}</button>
    </div>
}