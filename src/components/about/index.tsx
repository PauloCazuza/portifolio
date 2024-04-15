import CardStudy from "../card-study";
import CardPercentage from "../cardPercentage";

function About() {
    return (
        <>
            <div
                className="flex flex-col justify-center items-center px-[15%] py-[40px]"
            >
                <p className="text-3xl py-4">Sobre mim</p>
                {/* <p className="text-xl py-4">Introdução</p> */}

                <p className="text-center text-xl">
                    Com uma paixão inigualável pela tecnologia e uma expertise sólida, eu sou um desenvolvedor determinado a superar expectativas. Com habilidades afiadas em .NET Core, ReactJS, React Native, Firebase e Progress 4GL, estou preparado para criar soluções inovadoras que transcendem os limites do convencional. Minha jornada profissional, marcada por avanços rápidos e liderança eficaz, reflete meu compromisso com a excelência em cada projeto. Para mais informações por favor não deixe de interagir com o chat em Sobre.
                </p>
            </div>
            <div>
                <p className="text-2xl py-4 text-center">Distribuição do uso das ferramentas nos ultimos 5 anos</p>
            </div>
            <div className="flex flex-col px-[15%]">
                <div className="flex flex-1 flex-col lg:flex-row xs:flex-row justify-around">
                    <CardPercentage title="React JS" percentage={100} />
                    <CardPercentage title="React Native" percentage={100} />
                </div>
                <div className="flex flex-1 flex-col lg:flex-row xs:flex-row justify-around">
                    <CardPercentage title=".Net Core" percentage={80} />
                    <CardPercentage title="Node JS" percentage={70} />
                </div>
                <div className="flex flex-1 flex-col lg:flex-row xs:flex-row justify-around">
                    <CardPercentage title="SQL" percentage={100} />
                    <CardPercentage title="NoSQL" percentage={60} />
                </div>
            </div>
            <div>
                <p className="text-2xl py-4 text-center">Meus Estudos</p>
            </div>
            <div className="flex flex-col px-[15%]">
                <div className="flex flex-col lg:flex-row xs:flex-row justify-around items-center">
                    <CardStudy
                        title="Front-End"
                        subcription="Aplicações front-end de estudos e inspirações para templates"
                        uri={require("../../assets/react.png")}
                    />
                    <CardStudy
                        title="Back-End"
                        subcription="Aplicações back-end de estudos e inspirações para templates"
                        uri={require("../../assets/netcore.png")}
                    />
                    <CardStudy
                        title="Testes unitários"
                        subcription="Projetos com testes unitários em aplicações front-end e back-end"
                        uri={require("../../assets/test.png")}
                    />
                    <CardStudy
                        title="Design Patterns"
                        subcription="Projetos com exemplos de diferentes tipos de Design Patterns"
                        uri={require("../../assets/design-patterns.png")}
                    />
                </div>
            </div>
        </>
    );
}

export default About;