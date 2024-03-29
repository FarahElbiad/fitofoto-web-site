import Supported from "./Supported";
import React, { useState } from "react";
import Typed from "react-typed";
import { FaRedo, FaSeedling } from "react-icons/fa";
import Slider from 'C:/Users/hp/Desktop/DeepLeafFront/src/components/Slider.js';
import Vision from 'C:/Users/hp/Desktop/DeepLeafFront/src/components/Vision.jpg';
import mission from 'C:/Users/hp/Desktop/DeepLeafFront/src/components/Mission.jpg';
import Value from 'C:/Users/hp/Desktop/DeepLeafFront/src/components/Value.jpg';


function Index() {
    
   
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState({ prediction: "Detecting...", confidence: 0 });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fileInput = React.createRef();

    const [dragging, setDragging] = useState(false);

    const api_endpoint = 'http://127.0.0.1:5000/analyze?api_key=BETA_TESTER';


    const onRetry = () => {
        setImage(null);
        setPrediction(prevPrediction => {
            return { prediction: "Detecting...", confidence: 0 }
        });
        fileInput.current.value = null;
    };

    async function sendImage(imageURL) {
        const imageElement = document.getElementById('imgtag');
        imageElement.src = imageURL;
        imageElement.crossOrigin = "anonymous";
        setIsLoading(true);

        setTimeout(async () => {
            try {
                const response = await fetch(imageURL);
                const imageBlob = await response.blob();
                const formData = new FormData();
                formData.append("file", imageBlob, "image.jpg");

                const resp = await fetch(api_endpoint, {
                    method: 'POST',
                    body: formData,
                });

                const data = await resp.json();
                setError(null);
                setPrediction(data);
                setImage(imageURL);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                // prevent default error message in console
                // console.clear();

                console.log('Could not connect to the API.');
                setError('Could not connect to the API.');
            }
        }, 3000);


    }

    const onChange = (event) => {
        event.preventDefault();
        sendImage(URL.createObjectURL(event.target.files[0]));
    }
    function formatNumber(num) {
        return num.toFixed(2);
    }


    const onDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const onDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            setImage(URL.createObjectURL(files[0]));
            sendImage(URL.createObjectURL(files[0]));
        }
    };


    return (
        <div > 
        <div className="transparent-bg" >
        
            <div className="flex justify-center w-full md:h-full">
                <div className="justify-center items-center w-fit mx-auto mt-24 pb-10">
                <Slider/>
                    <div className="justify-center w-fit px-0 py-8 mx-auto">
                  
                        <div className="animate-out duration-300 slide-out-from-top  items-center text-left rounded-md bg-white drop-shadow-md px-4 py-4 mx-4 ">
           
                            <section className="section border-top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 mb-4 text-center">
                                            <h3 className="main-heading">Our Vision, Mission, and Values</h3>
                                                <div className="underline mx-auto"></div>
                                        </div>
                                        <div className="col-md-4">
                                                     <div className="card shadow">
                                                            <img src={Vision} className="card-image" alt="service1" />
                                                            <div className="card-body">
                                                                     <h6>Our vision</h6>
                                                                <div className="underline"></div>
                                                                    <p className="card-text">
                                                                    We see a future where AI-powered agriculture is the norm, and
                                                                    farmers have access to powerful tools and insights that help them
                                                                    grow crops more efficiently, effectively, and sustainably.
                                                                    We believe that by working together, we can create a more prosperous, healthy, and sustainable future for all.
                                                                    </p>
                                                         </div>
                                                    </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card shadow">
                                            <img src={mission} className="card-image" alt="service1" />
                                            <div className="card-body">
                                                <h6>Our mission</h6>
                                                <div className="underline"></div>
                                                <p className="card-text">
                                                Our mission at Deepleaf is to revolutionize agriculture by
                                                leveraging the latest advancements in artificial intelligence and
                                                computer vision. We are committed to providing farmers with
                                                innovative tools and solutions to enhance the productivity,
                                                sustainability, and profitability of their farms.
                                                
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card shadow">
                                            <img src={Value} className="card-image" alt="service2" />
                                            <div className="card-body">
                                                <h6>Our core values</h6>
                                                <div className="underline"></div>
                                                <p className="card-text">
                                                At Deepleaf, we are guided by a set of core values that drive our
                                                work and shape our company culture. These values are:
                                                <br />
                                                - Innovation
                                                <br />
                                                - Creativity
                                                <br />
                                                - Collaboration
                                                <br />
                                                - Customer-Centricity
                                                <br />
                                                - Ethical AI
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>                   
                        </div>

                        <div>
                            <div className="grid md:grid-cols-2 gap-8 text-left px-4 py-4 mx-4 mt-4">
                                <div className="w-full">

                                <>
                                    <div className={image === null ? '' : 'hidden'}>
                                            <h1 className="text-left w-full text-xl">
                                                Input Picture
                                            </h1>
                                            <div className="mt-4 flex justify-center items-center h-96">
  <div className={`drag-drop-area flex flex-col items-center justify-center w-full h-full px-4 py-12 border-2 border-gray-300 border-dashed rounded-md ${dragging ? "dragging" : ""}`}
    onDragEnter={onDragEnter}
    onDragLeave={onDragLeave}
    onDragOver={onDragOver}
    onDrop={onDrop}>
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-md p-6">
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-12 h-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M14 24H6a2 2 0 01-2-2V8a2 2 0 012-2h36a2 2 0 012 2v14a2 2 0 01-2 2h-8m-8 0h-4m-8 0h-4m16 0h4m-8 0h-4m8 0h4M6 42h36a2 2 0 002-2V26a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <p className="mt-4 text-lg text-gray-600">
        {dragging ? (
          <>
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 px-4 py-2 border border-green-500"
            >
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={onChange}
                ref={fileInput}
              />
            </label>
            <span className="text-gray-500 mt-2">Drop file here.</span>
          </>
        ) : (
          <>
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 px-4 py-2 border border-green-500"
            >
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={onChange}
                ref={fileInput}
              />
              <span className="text-gray-500">Upload a file</span>
            </label>
            <span className="text-gray-500 mt-2">or drag and drop</span>
          </>
        )}
      </p>
      <p className="mt-1 text-sm text-gray-500">
        Supported formats: PNG, JPG, JPEG (up to 10MB)
      </p>
    </div>
  </div>
</div>

                        </div>
                        <div className={image === null ? 'hidden' : ''}>
  <h1 className="text-left w-full text-xl">Input Picture</h1>
  <div className="mt-4 relative justify-center items-center h-96">
    <div className="relative flex-col items-center justify-center w-full h-full bg-white border-2 border-gray-300 border-dashed rounded-md drop-shadow-md">
      {image === null ? null : (
        <div className="absolute z-10 bottom-0 left-0 items-center w-fit text-left rounded-t-md bg-red-500 drop-shadow-md px-4 py-4 mx-4 animate-in duration-200 slide-in-from-bottom pt-3">
          <h1 className="flex gap-1 text-left text-white text-xl w-fit -mt-8 bg-gray-700 px-2 rounded-xl py-2">
            <FaSeedling className="mt-1 ml-1" /> Output&nbsp;
          </h1>
          <div>
            <div className="w-fit mt-3">
              <div className="w-fit border border-dashed border-red-200 px-4 py-4">
                <div className="flex ml-4">
                  <p className="w-32 mr-4 mt-1 text-white">Detection</p>
                  <p className="text-left w-fit text-lg text-gray-600 bg-gray-100 px-2 py-1 rounded-xl mb-3">
                    <Typed
                      strings={[error ? error : prediction.prediction]}
                      typeSpeed={100}
                      backSpeed={100}
                      startDelay={750}
                    />
                  </p>
                </div>
                <div className="flex ml-4">
                  <p className="w-32 mr-4 mt-1 text-white">Confidence</p>
                  <p className="text-left w-fit text-lg text-gray-600 bg-gray-100 px-2 py-1 rounded-xl mb-3">
                    <Typed
                      strings={[formatNumber(prediction.confidence).toString() + '%']}
                      typeSpeed={100}
                      backSpeed={100}
                      startDelay={1550}
                    />
                  </p>
                </div>
                <div className="flex ml-4">
                  <p className="w-32 mr-4 mt-1 text-white">Solutions</p>
                  <p className="text-left w-fit text-lg text-gray-600 bg-gray-100 px-2 py-1 rounded-xl mb-3">
                    <Typed
                      strings={["Still in development"]}
                      typeSpeed={100}
                      backSpeed={100}
                      startDelay={2750}
                    />
                  </p>
                </div>
                <div className="w-fit border border-dashed border-red-200 px-4 py-4">
                  <p className="text-white text-center w-full justify-center mb-3">Rate the results</p>
                  <div className="flex justify-center">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-400 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label className="form-check-label inline-block text-white mr-3" htmlFor="inlineRadio10">Correct</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-400 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label inline-block text-white mr-3" htmlFor="inlineRadio20">Incorrect</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-400 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label className="form-check-label inline-block text-white" htmlFor="inlineRadio20">Not sure</label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onRetry()}
                className="w-full mt-4 bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                <span className="flex justify-center items-center mx-auto gap-2">
                  <FaRedo />
                  Try another Image
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      <img id="imgtag" src="" className="w-full h-full rounded-md" border="0" alt="imageIsNotFound" />
    </div>
  </div>
</div>

                                    </>

                                </div>
                                <Supported />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Index;
