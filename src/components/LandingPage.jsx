const imageLink = "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"

export const LandingPage = () => {
  return (
    <>
    <div className="container">
        <div className="nav">
        <div>
            <h1>TALHA</h1>
        </div>
        <div className="menuItems" >
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
        </div>
        </div>
    </div>
    <div className="heroSection">
    <div className="mm" >
    
            <div>
                <h1 className="name" >Hy there Im Talha Mushtaq</h1>
                <h3>Im a full Zero Stack web developer</h3>
            </div>
            <div>
                <img alt="banana" src={imageLink} />
            </div>
            </div>
    </div>
    </>
  )
}
