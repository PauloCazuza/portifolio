import { getGreeting } from "@/utils/frases";
import BallonChat from "../ballonChat";
import FormChat from "../formChat";

function Chat() {
    return (
        <div className="flex flex-col flex-1 w-[100vw] h-[100vh]">
            <div className="flex rounded-lg flex-col mt-24 flex-[11] w-full px-[20%] overflow-auto ">
                <BallonChat
                    type="system"
                    message={getGreeting() + " Sou um chat desenvolvido para responder perguntas a respeito de Paulo Roberto, quaisquer duvidas sobre suas experiencias e carreira e estarei a disposição para responder. "} />
                <BallonChat type="user" message="Tenho uma duvida." />
                <BallonChat type="system" animation message="Lorem ipsum dolor sit amet. Et quibusdam minima est fuga aspernatur vel exercitationem molestias ut facilis cupiditate. Ut repudiandae molestiae aut ullam minima quo magnam reprehenderit ut consectetur corrupti ea accusamus corrupti ut sunt nulla.

Aut asperiores impedit est aspernatur sequi hic eius sapiente ut labore placeat. Rem voluptas eligendi et unde tempora est laudantium veniam et corporis magnam. Qui quia dignissimos rem similique odio sit expedita mollitia est omnis saepe ut dolor fuga in mollitia voluptate. Aut asperiores minima est vero corporis et ullam dolor est ducimus cupiditate aut amet officiis.

Ut illum excepturi ex praesentium fugit et animi voluptatem. Ut nihil dolore in nesciunt veritatis ab debitis consequatur At voluptatum voluptatibus sit velit quisquam." />

            </div>
            <div className="flex flex-col justify-start flex-[1] p-10">
                <FormChat />
            </div>
        </div>
    );
}

export default Chat;