import React from "react";
import axios from "axios";

export const useUpLoads = () => {
    const [files, _setFiles] = React.useState([]);
    const [upLoadsFiles, _setUpLoadsFiles] = React.useState([]);

    React.useEffect(() => {
        _initUpLoads();
    }, []);

    const _initUpLoads = async () => {
        try {            
            let option = {
                method: 'GET',
                data: '',
                headers: '',
                params: '',
                url: 'http://localhost:8000/uploads/'
            };
            const result = await axios(option)
            return _setFiles(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    
    const upload = (e) => {
        Array.from(e.target.files).forEach(file => {
            _setUpLoadsFiles(upLoadsFiles => [...upLoadsFiles, file])            
        });        
    }

    const sendFiles = async () => {
        for (let file of upLoadsFiles) {
            try {
                const formData = new FormData();
                if(file != null) formData.append("images", file);
                let option = {
                    method: 'POST',
                    data: formData,
                    headers: '',
                    params: '',
                    url: 'http://localhost:8000/uploads/'
                };
                await axios(option)
            } catch (error) {
                console.log(error);
            }
        }
        _initUpLoads()
        return _setUpLoadsFiles([])
    }

    return {
        files,
        upload,
        sendFiles
    }

}