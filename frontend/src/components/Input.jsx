export const Input= ({label,placeholder})=>{
    return <div>
        <div className="text-sm font-medium text-left py-1">
            {label}
        </div>
        <div>
            <input type="text" placeholder={placeholder} className="min-w-80 px-2 py-1 border rounded border-slate-200"/>
        </div>
    </div>
}