import loading from '../../../assets/loading.gif';

const FormSubmit = (props) => {
    const {
        showResponseMessage,
        error,
        status,
        succeededMessage,
    } = props;
    return (
        <>
            <div className="grid grid-cols-12 mt-2">
                <div className="col-start-4 col-span-8">
                    <button 
                        className=" bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-4 rounded"
                        type="submit"
                        disabled={showResponseMessage && status === 'pending'}
                    >Guardar</button>
                    <div className="min-h-5 max-h-5 mt-2 ml-2 text-sm text-red-400 ">
                        { showResponseMessage && status === 'pending' && <img src={loading} className="max-h-5 object-contain" />}
                        { showResponseMessage && status === 'succeeded' && <span className="text-green-800">{succeededMessage}</span>}
                        { showResponseMessage && status === 'error' && !error.data && <span>{error.message}</span>}
                        { showResponseMessage && status === 'error' && error.data && <ul>{error.data.map(e => <li key={e.field}>{e.message}</li>)}</ul>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormSubmit