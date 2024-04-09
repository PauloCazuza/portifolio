import Image from "next/image";

function FormChat() {
    return (
        <div className="flex items-center h-[100%] px-[20%] bg-opacity-40">
            <input
                className="flex-[11] h-[100%] px-11 m-4 rounded-full"
                placeholder="teste"
            />
            <button className=" flex  mr-4 justify-center items-center h-1/2">
                <div className=" bg-blue-700 rounded-full size-16 p-4 flex items-center">
                    <Image
                        src={require("../../assets/send.png")}
                        className="object-contain "
                        alt="Send"
                    />
                </div>
            </button>
        </div>
    );
}

export default FormChat;