import { useState } from "react";

export default function CropScanner(){
  const [image,setImage]=useState(null),[selectedFile,setSelectedFile]=useState(null),[result,setResult]=useState(""),[loading,setLoading]=useState(false);
  const handleImage=e=>{const file=e.target.files[0];if(file){setSelectedFile(file);setImage(URL.createObjectURL(file));setResult("")}};
  const scanImage=async()=>{
    if(!selectedFile){alert("Please upload an image first.");return}
    setLoading(true);setResult("");
    const formData=new FormData();formData.append("image",selectedFile);
    try{
      const response=await fetch("http://127.0.0.1:5000/predict",{method:"POST",body:formData});
      const data=await response.json();if(!response.ok)throw new Error(data.error||"Prediction failed");
      setResult(`${data.prediction} (${data.confidence}% Confidence)`);
    }catch(error){console.error(error);setResult("❌ AI prediction failed. Please try again.");}
    finally{setLoading(false)}
  };
  return <div className="min-h-screen bg-green-50 flex justify-center items-center p-6"><div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
    <h1 className="text-3xl font-bold text-center text-green-700">🌿 AI Crop Disease Scanner</h1>
    <p className="text-center text-gray-600 mt-2">Upload a crop leaf image for disease detection.</p>
    <input type="file" accept="image/*" onChange={handleImage} className="w-full mt-6 border p-3 rounded-lg"/>
    {image&&<img src={image} alt="Crop Preview" className="mt-6 rounded-xl w-full h-64 object-cover"/>}
    <button onClick={scanImage} disabled={loading} className="w-full bg-green-700 text-white py-3 rounded-lg mt-6">{loading?"🔄 Scanning...":"🔍 Scan Image"}</button>
    {result&&<div className="mt-6 bg-green-100 p-4 rounded-lg"><h3 className="text-xl font-bold text-green-700">Prediction Result</h3><p className="mt-2 text-gray-700">{result}</p></div>}
  </div></div>
}