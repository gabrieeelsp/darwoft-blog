import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';

const EditPostForm = () => {
    const [html, setHtml] = useState('my <b>HTML</b>');
    function onChange(e) {
        setHtml(e.target.value);
      }
    return (
        <>
            <div className="p-3">
                <div className="grid grid-cols-12">
                    <label className="col-span-3" htmlFor="">Título</label>
                    <input
                        className="col-span-9 focus:outline-none border border-slate-300 bg-slate-100"
                        type="text" 
                        placeholder="Título"
                        />
                </div>
                <div className="grid grid-cols-12 mt-2">
                    <label className="col-span-3" htmlFor="">Apellidos</label>
                    <select 
                        disabled
                        className="col-span-9 focus:outline-none bg-white border border-slate-300 rounded-sm px-2 "
                    >
                        <option value=""
                            className="text-slate-300"
                            >Categoría</option>
                        <option value="">Linux</option>
                        <option value="">Fisica</option>
                        <option value="">Programación</option>
                    </select>
                </div>
                <div className="grid grid-cols-12 mt-2">
                    <label className="col-span-3" htmlFor="">Contenido</label>
                    <div className='col-span-9'>
                        <Editor 
                            containerProps={{ style: { resize: 'vertical', height: '400px' } }}
                        value={html} onChange={onChange} />
                    </div>
                </div>
                {html}
                <div className="grid grid-cols-12 mt-2">
                    <div className="col-start-4 col-span-8">
                        <button 
                            className=" bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-4 rounded"
                            >Guardar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPostForm