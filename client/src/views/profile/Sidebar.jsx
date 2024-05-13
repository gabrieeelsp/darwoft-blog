import { UserInfo } from "../../components"

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <div>
                {isOpen && (
                    <div 
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                        onClick={onClose}
                    ></div>
                )}
            </div>
            <div
                className={`fixed top-0 left-0 h-full w-[300px] bg-white transition-transform duration-300 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-50`}
            >
                <UserInfo onClose={onClose} />
            </div>
        </>
    )
}

export default Sidebar