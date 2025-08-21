import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className="logo-container flex items-center absolute top-0 z-20 m-5">
                <div className="logo-container w-32 h-16">
                    <img src={'./logo.png'} className='w-full h-full' alt="website logo" />
                </div>
                <p className='text-[#e50814] text-2xl font-bold'>x GPT</p>
            </div>
        </div >
    )
}

export default Header