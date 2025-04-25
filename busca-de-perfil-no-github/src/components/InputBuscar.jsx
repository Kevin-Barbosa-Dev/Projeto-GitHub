import { useState } from "react"

export default function InputBuscar({ onProfileData }) {
    const [userName, setUserName] = useState('')
    const handleSearch = async () => {
        if (!userName.trim()) return;

        try {
            const response = await fetch(`https://api.github.com/users/${userName}`)
            const data = await response.json()

            if (response.ok) {
                onProfileData(data);
            } else {
                console.log("Erro ao buscar usuário:", data.message);
                onProfileData(null);
            }
        } catch (error) {
            onProfileData(null);
        }
    }


    return (
        <div className='flex justify-center items-center w-full max-w-[503px] h-[62px] border-1 rounded-[15px]'>
            <input
                type="text"
                placeholder="Digite um usuário do Github"
                className="w-full h-full px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-base md:placeholder:text-xl placeholder:font-semibold placeholder:text-black placeholder:font-nunito"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
                className="bg-[#005cff] text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors h-full"
                onClick={handleSearch}
            >
                <img src="./src/assets/img/Caminho 20013.png" alt="Buscar"
                />
            </button>
        </div>
    )
}
