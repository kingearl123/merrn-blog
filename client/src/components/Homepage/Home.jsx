const Home = () => {
  return (
    <section className="flex items-center min-h-screen justify-center bg-white" id='home'>
      <div className="mx-auto max-w-[43rem] pt-20">
        <div className="text-center">
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Selamat Datang di Blog Kami!</h1>
          <p className="mt-3 text-lg font-medium leading-8 text-indigo-600/95">Temukan Inspirasi dan Pengetahuan Baru</p>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Di sini, kami berbagi berbagai artikel menarik dan informatif yang dapat membantu Anda menjelajahi dunia pengetahuan. Dari tips dan trik, hingga ulasan mendalam tentang topik-topik terkini, blog ini adalah tempat yang tepat untuk memperluas wawasan Anda.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="#home" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Mulai Membaca Sekarang!</a>
        </div>
      </div>
    </section>
  )
}

export default Home;