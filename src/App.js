import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    if(event.target.files.length > 0){
      setSelectedFile(event.target.files[0]);
    }
  };

  const validateSelectedFile = () => {
    const MIN_FILE_SIZE = 1024 // 1MB
    const MAX_FILE_SIZE = 5120 // 5MB

    if (!selectedFile) {
      setErrorMsg("Please choose a file");
      setIsSuccess(false)
      return
    }

    const fileSizeKiloBytes = selectedFile.size / 1024

    if(fileSizeKiloBytes < MIN_FILE_SIZE){
      setErrorMsg("File size is less than minimum limit");
      setIsSuccess(false)
      return
    }
    if(fileSizeKiloBytes > MAX_FILE_SIZE){
      setErrorMsg("File size is greater than maximum limit");
      setIsSuccess(false)
      return
    }

    setErrorMsg("")
    setIsSuccess(true)
  };

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <h4 className="title">File Size Validation</h4>
        </div>

        <div className="card-body">
          <p className="label">Choose File</p>
          <input
            type="file"
            name='file'
            onChange={handleFileChange}
          />

          <div className="space-between">
            <p className="info-message">Min size: 1MB</p>
            <p className="info-message">Max size: 5MB</p>
          </div>
          {isSuccess ? <p className="success-message">Validation successful</p> : null}
          <p className="error-message">{errorMsg}</p>

          <button className="btn" onClick={validateSelectedFile}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
