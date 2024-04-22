const CommentForm = () => {
    return (
        <>
            <div>
                <div className='flex'>
                    <div
                        className='w-12 h-12 rounded-full overflow-hidden border border-slate-300 bg-slate-100'
                        >
                        
                    </div>
                    <textarea 
                        className='col-span-11 border border-slate-200 w-full ml-5 h-20 resize-none focus:outline-none p-2 text-slate-700 rounded-lg'
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        
                        ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                    <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-1 px-4 rounded">Enviar</button>
                </div>
                
            </div>

        </>
    )
}

export default CommentForm