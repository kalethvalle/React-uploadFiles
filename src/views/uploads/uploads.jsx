/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'

import { useUpLoads } from './useUploads';

export const FilesUpLoads = () => {
    const { files, upload, sendFiles } = useUpLoads();
    return (
        <div className="container" >
            <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                    <h5 className="card-title">Change files</h5>
                    <div className="mb-3">
                        <input 
                            onChange={upload}
                            type="file"
                            id="formFileMultiple"
                            multiple 
                        />
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary"
                        onClick={() => sendFiles() }
                    >
                        uploads
                    </button>
                </div>
            </div>
            <div>
                <div className='d-flex flex-row justify-content-center' style={{ marginTop: '10px' }}>
                {
                    files.length > 0 ?(
                        files.map(file => (
                            <img 
                                src={`http://localhost:8000${file.images}`}
                                className="rounded"
                                alt="images"
                                key={file.id}
                                style={{ width: '200px', height: '200px' }}
                            />
                        ))
                    ) : (
                        <div>
                            No hay imagenes
                        </div>
                    )
                }
                </div>
            </div>
        </div>
    )
}