const VideoTitle =( {title , overview}) =>{
    return (<div className ="pt-[15%] w-screen aspect-video absolute text-white px-24 bg-gradient-to-r from-black">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="py-6 text-sm w-1/4">{overview}</p>
        <div className=""> 
            <button className="bg-white text-black p-4 px-14 text-xl rounded-lg hover: bg-opacity-80">
                ▶️Play
                </button>
            <button className="mx-2 bg-black text-white p-4 px-16 text-xl bg-opacity-60 rounded-lg">More Info</button>
        </div>
        </div>
    );
};
 export default VideoTitle;