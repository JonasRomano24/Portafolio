function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px]" />

            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />

        </div>
    );
}

export default Background;