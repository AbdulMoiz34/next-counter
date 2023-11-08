const Button = ({ clickHandler, text }) => {
    return (
        <button
            onClick={clickHandler}
            className={`cursor-pointer bg-slate-200 px-3 text-gray-700 py-1 rounded-lg w-5/6 hover:bg-slate-300`}>
            {text}
        </button>);
}

export default Button;