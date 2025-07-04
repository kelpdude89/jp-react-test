import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';

const el = document.querySelector('#root');
const root = ReactDom.createRoot(el);

function App() {

    const refresh = () => { window.location.reload(); }
    
    return (

        <body class="bg-[url('gyat.jpg')] bg-contain bg-center h-screen transition-all duration-500">

        {/* <script src="https://cdn.tailwindcss.com"></script> */}

        <div className="h-screen flex flex-col justify-center items-center">
            <div className="relative -translate-y-40 text-2xl font-bold underline">
                <p>hello arthur and</p>
            </div>
            <div className="relative -translate-y-40 text 2xl font-thin"><p>philip goon mobile</p></div>
        

        
            <button onClick={refresh} class='px-10 py-5 text-xl bg-violet-600 hover:bg-violet-900 text-white rounded-full hover:text-gray-400 cursor-grab active:cursor-grabbing hover:ring-8 hover:ring-violet-400 active:ring-red-600'>gokce is cool</button>

            <p className="relative translate-y-24 text-5xl font-extrabold text-red-500">Briggs is touchable</p>

        </div>

        {/* <script>
            const body = document.getElementById('body');
            const button = document.getElementById('multiplyBtn');

            let isMultiplied = false;

            button.addEventListener('click', () => {
                if (!isMultiplied) {
                    body.classList.remove('bg-contain', 'bg-center');
                    body.classList.add('bg-repeat', 'bg-[length:200px_200px]');
                } else {
                    body.classList.remove('bg-repeat', 'bg-[length:200px_200px]');
                    body.classList.add('bg-contain', 'bg-center');
                }
                isMultiplied = !isMultiplied;
            });
        </script> */}

        </body>

);
}

root.render(<App />);