import useStore from "./store/ZustandStore";

function About() {

    const count = useStore((state) => state.count)

    return (
        <div className="pt-5">
            <h1 className="text-3xl font-bold text-center mb-2">This is the About Page</h1>
            <h2 className="text-center text-xl">This is the current count: {count}</h2>
            <div className='flex justify-between w-full px-3'>
                <button
                    onClick={useStore((state) => state.increment)}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Increment
                </button>
                <button
                    onClick={useStore((state) => state.decrement)}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                >
                    Decrement
                </button>
            </div>
        </div>
     );
}

export default About;