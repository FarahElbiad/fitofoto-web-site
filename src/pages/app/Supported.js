function Supported() {
    return (
        <div className=" w-full">
            <h1 className="text-left w-full text-xl">Supported Plants and Diseases</h1>
            <div className="mt-4 h-96 overflow-auto bg-white drop-shadow-md">
                <table className=" table-auto w-full ">
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            <th className="border px-4 py-2">Plant</th>
                            <th className="border px-4 py-2">Diseases</th>
                        </tr>
                    </thead>
                    <tbody className="  w-full">
                        <tr>
                            <td className="border px-4 py-2">Tomato</td>
                            <td className="border px-4 py-2">Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Yellow Leaf Curl Virus</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Potato</td>
                            <td className="border px-4 py-2">Early Blight, Late Blight, Healthy,</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Strawberry</td>
                            <td className="border px-4 py-2">Leaf Scorch, Healthy</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Corn</td>
                            <td className="border px-4 py-2">Cercospora leaf spot, Common rust, Northrn leaf Blight, Healthy</td>
                            </tr>
                        <tr>
                            <td className="border px-4 py-2">Grape</td>
                            <td className="border px-4 py-2">Black Rot, Esca (Black Measles), Leaf Blight (Isariopsis Leaf Spot), Healthy</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Apple</td>
                            <td className="border px-4 py-2">Apple Scab, Black Rot, Cedar Apple Rust , Healthy</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Cherry</td>
                            <td className="border px-4 py-2">(Including Sour)Powdery mildew,(Including Sour)Healty</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Orange</td>
                            <td className="border px-4 py-2">Haunglongbing (Citrus Greening)</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Peach</td>
                            <td className="border px-4 py-2">Bacterial Spot, Healthy</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Bell Pepper</td>
                            <td className="border px-4 py-2">Bacterial Spot, Healthy</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Strawberry</td>
                            <td className="border px-4 py-2">Leaf Scorch,Healthy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Supported;