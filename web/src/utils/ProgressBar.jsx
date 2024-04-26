const ProgressBar = ({ loading }) => {
    return (
        <>
            <div className={`h-1 rounded-full overflow-hidden`}>
                <div className={`h-full ${loading ? 'bg-blue-500 animate-pulse' : ''}`}></div>
            </div>
            {/* <div className={`h-4 w-full bg-gray-200 rounded-full overflow-hidden ${loading ? 'animate-progress' : ''}`}>
                {loading && <div className="h-full bg-blue-500"></div>}
            </div> */}
        </>    
  );
};

export default ProgressBar;