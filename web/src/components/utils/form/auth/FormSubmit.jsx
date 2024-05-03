import loading from '../../../../assets/loading.gif';

const FormSubmit = (props) => {
    const {
        showResponseMessage,
        error,
        status,
    } = props;
    return (
        <>
            <div className="flex flex-col mt-2 mb-1">
                <button 
                    className="bg-sky-500 w-full text-sm hover:bg-sky-700 disabled:bg-sky-300 text-white font-bold py-2 px-4 rounded" 
                    type="submit"
                    disabled={showResponseMessage && status === 'pending'}
                    >
                    Crear cuenta
                </button>
                <div className="min-h-5 max-h-5 mt-2 ml-2 text-sm text-red-400 flex justify-center">
                    { showResponseMessage && status === 'pending' && <img src={loading} className="max-h-5 object-contain" />}
                    { showResponseMessage && status === 'succeeded' && <span className="text-green-800">Se ha Registrado exitosamente</span>}
                    { showResponseMessage && status === 'error' && !error.data && <span>{error.message}</span>}
                    { showResponseMessage && status === 'error' && error.data && <ul>{error.data.map(e => <li key={e.field}>{e.message}</li>)}</ul>}
                </div>
            </div>
        </>
    )
}

export default FormSubmit